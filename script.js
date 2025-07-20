
const allGroups = [
    [ {he: "שולחן", en: "Table"}, {he: "כסא", en: "Chair"}, {he: "חלון", en: "Window"}, {he: "דלת", en: "Door"} ],
    [ {he: "ספר", en: "Book"}, {he: "עט", en: "Pen"}, {he: "עיפרון", en: "Pencil"}, {he: "מחברת", en: "Notebook"} ],
    [ {he: "מים", en: "Water"}, {he: "חלב", en: "Milk"}, {he: "לחם", en: "Bread"}, {he: "חמאה", en: "Butter"} ],
    [ {he: "תפוח", en: "Apple"}, {he: "בננה", en: "Banana"}, {he: "תפוז", en: "Orange"}, {he: "ענבים", en: "Grapes"} ],
    [ {he: "יום", en: "Day"}, {he: "לילה", en: "Night"}, {he: "שמש", en: "Sun"}, {he: "ירח", en: "Moon"} ],
    [ {he: "אב", en: "Father"}, {he: "אם", en: "Mother"}, {he: "בן", en: "Son"}, {he: "בת", en: "Daughter"} ],
    [ {he: "חבר", en: "Friend"}, {he: "מורה", en: "Teacher"}, {he: "ילד", en: "Child"}, {he: "תלמיד", en: "Student"} ],
    [ {he: "כלב", en: "Dog"}, {he: "חתול", en: "Cat"}, {he: "פרה", en: "Cow"}, {he: "סוס", en: "Horse"} ],
    [ {he: "אדום", en: "Red"}, {he: "כחול", en: "Blue"}, {he: "ירוק", en: "Green"}, {he: "צהוב", en: "Yellow"} ],
    [ {he: "גדול", en: "Big"}, {he: "קטן", en: "Small"}, {he: "חדש", en: "New"}, {he: "ישן", en: "Old"} ],
    [ {he: "חם", en: "Hot"}, {he: "קר", en: "Cold"}, {he: "יפה", en: "Beautiful"}, {he: "מכוער", en: "Ugly"} ],
    [ {he: "מהר", en: "Fast"}, {he: "איטי", en: "Slow"}, {he: "גבוה", en: "Tall"}, {he: "נמוך", en: "Short"} ],
    [ {he: "עבודה", en: "Work"}, {he: "משחק", en: "Game"}, {he: "בית", en: "Home"}, {he: "רחוב", en: "Street"} ],
    [ {he: "מכונית", en: "Car"}, {he: "רכבת", en: "Train"}, {he: "מטוס", en: "Plane"}, {he: "אופניים", en: "Bicycle"} ],
    [ {he: "לחכות", en: "Wait"}, {he: "לרוץ", en: "Run"}, {he: "ללכת", en: "Walk"}, {he: "לשבת", en: "Sit"} ],
    [ {he: "לאכול", en: "Eat"}, {he: "לשתות", en: "Drink"}, {he: "לישון", en: "Sleep"}, {he: "לשחק", en: "Play"} ],
    [ {he: "לפתוח", en: "Open"}, {he: "לסגור", en: "Close"}, {he: "לקרוא", en: "Read"}, {he: "לכתוב", en: "Write"} ],
    [ {he: "לראות", en: "See"}, {he: "לשמוע", en: "Hear"}, {he: "לדבר", en: "Speak"}, {he: "לחשוב", en: "Think"} ]
];

let currentGroup = 0;
let currentStage = 0;
let selectedHe = null;
let learnedWords = 0;

function init() {
    const groupLinks = document.getElementById("groupLinks");
    allGroups.forEach((g, idx) => {
        const btn = document.createElement("button");
        btn.innerText = "קבוצה " + (idx+1);
        btn.onclick = () => startGroup(idx);
        groupLinks.appendChild(btn);
    });
    updateProgress();
}

function updateProgress() {
    const total = 72;
    const percent = Math.floor((learnedWords / total) * 100);
    document.getElementById("progressBar").style.width = percent + "%";
    document.getElementById("progressText").innerText = percent + "% הושלם";
}

function startGroup(groupIndex) {
    currentGroup = groupIndex;
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("learning").classList.remove("hidden");
    showStage(0);
}

function showStage(stageIndex) {
    currentStage = stageIndex;
    const stageDiv = document.getElementById("stage");
    stageDiv.innerHTML = "";
    const groupTitle = document.getElementById("groupTitle");
    groupTitle.innerText = "קבוצה " + (currentGroup+1) + " – שלב " + (stageIndex === 0 ? "א" : stageIndex === 1 ? "ב" : "ג");
    const group = allGroups[currentGroup];

    if (stageIndex === 0) {
        group.forEach(p => {
            const div = document.createElement("div");
            div.className = "word-pair";
            div.innerHTML = `${p.he} - ${p.en} <button onclick="speak('${p.en}')">▶</button>`;
            stageDiv.appendChild(div);
        });
        const btn = document.createElement("button");
        btn.innerText = "עבור לשלב ב";
        btn.onclick = () => showStage(1);
        stageDiv.appendChild(btn);
    } else if (stageIndex === 1) {
        selectedHe = null;
        const heDiv = document.createElement("div");
        const enDiv = document.createElement("div");
        heDiv.innerHTML = "<h3>עברית</h3>";
        enDiv.innerHTML = "<h3>אנגלית</h3>";
        group.forEach((p, i) => {
            const btn = document.createElement("button");
            btn.innerText = p.he;
            btn.onclick = () => selectHe(i);
            heDiv.appendChild(btn);
        });
        const shuffled = [...group].sort(() => Math.random()-0.5);
        shuffled.forEach(p => {
            const btn = document.createElement("button");
            btn.innerText = p.en;
            btn.onclick = () => selectEn(p.en);
            enDiv.appendChild(btn);
        });
        stageDiv.appendChild(heDiv);
        stageDiv.appendChild(enDiv);
        const resultDiv = document.createElement("div");
        resultDiv.id = "matchResult";
        stageDiv.appendChild(resultDiv);
        const nextBtn = document.createElement("button");
        nextBtn.innerText = "עבור לשלב ג";
        nextBtn.onclick = () => showStage(2);
        stageDiv.appendChild(nextBtn);
    } else if (stageIndex === 2) {
        group.forEach(p => {
            const btn = document.createElement("button");
            btn.innerText = p.he;
            btn.onclick = () => startRecognition(p.en);
            stageDiv.appendChild(btn);
        });
        const resultDiv = document.createElement("div");
        resultDiv.id = "speechResult";
        stageDiv.appendChild(resultDiv);
        const nextBtn = document.createElement("button");
        nextBtn.innerText = "סיים קבוצה";
        nextBtn.onclick = () => finishGroup();
        stageDiv.appendChild(nextBtn);
    }
}

function selectHe(index) {
    selectedHe = allGroups[currentGroup][index];
    document.getElementById("matchResult").innerHTML = `בחרת "${selectedHe.he}", עכשיו בחר באנגלית.`;
}

function selectEn(enWord) {
    if (!selectedHe) return;
    const resultDiv = document.getElementById("matchResult");
    if (selectedHe.en === enWord) {
        resultDiv.innerHTML = `<span class='success'>✔ נכון! ${selectedHe.he} = ${enWord}</span>`;
    } else {
        resultDiv.innerHTML = `<span class='error'>✖ לא נכון! ${selectedHe.he} ≠ ${enWord}</span>`;
    }
    selectedHe = null;
}

function speak(word) {
    const msg = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(msg);
}

function startRecognition(correctWord) {
    const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = (e) => {
        const said = e.results[0][0].transcript;
        document.getElementById('speechResult').innerHTML = 
            said.toLowerCase() === correctWord.toLowerCase() 
            ? `<span class='success'>נכון! אמרת ${said}</span>` 
            : `<span class='error'>לא נכון. אמרת ${said} (צריך: ${correctWord})</span>`;
    };
}

function finishGroup() {
    learnedWords += 4;
    updateProgress();
    // בדוק אם צריך מבחן 8 מילים
    if ((currentGroup + 1) % 2 === 0) {
        showReview();
    } else {
        nextGroup();
    }
}

function showReview() {
    const startIdx = currentGroup - 1;
    const lastTwo = allGroups[startIdx].concat(allGroups[startIdx + 1]);
    const stageDiv = document.getElementById("stage");
    stageDiv.innerHTML = "<h3>מבחן חזרה – 8 מילים אחרונות</h3>";
    // משחק התאמה פשוט
    const heDiv = document.createElement("div");
    const enDiv = document.createElement("div");
    heDiv.innerHTML = "<h3>עברית</h3>";
    enDiv.innerHTML = "<h3>אנגלית</h3>";
    lastTwo.forEach((p, i) => {
        const btn = document.createElement("button");
        btn.innerText = p.he;
        btn.onclick = () => selectHeReview(i, lastTwo);
        heDiv.appendChild(btn);
    });
    const shuffled = [...lastTwo].sort(() => Math.random()-0.5);
    shuffled.forEach(p => {
        const btn = document.createElement("button");
        btn.innerText = p.en;
        btn.onclick = () => selectEnReview(p.en, lastTwo);
        enDiv.appendChild(btn);
    });
    stageDiv.appendChild(heDiv);
    stageDiv.appendChild(enDiv);
    const resultDiv = document.createElement("div");
    resultDiv.id = "matchResultReview";
    stageDiv.appendChild(resultDiv);
    const btn = document.createElement("button");
    btn.innerText = "סיים חזרה";
    btn.onclick = () => nextGroup();
    stageDiv.appendChild(btn);
}

let selectedHeReview = null;

function selectHeReview(i, list) {
    selectedHeReview = list[i];
    document.getElementById("matchResultReview").innerHTML = `בחרת "${selectedHeReview.he}", עכשיו בחר באנגלית.`;
}

function selectEnReview(enWord, list) {
    if (!selectedHeReview) return;
    const resultDiv = document.getElementById("matchResultReview");
    if (selectedHeReview.en === enWord) {
        resultDiv.innerHTML = `<span class='success'>✔ נכון! ${selectedHeReview.he} = ${enWord}</span>`;
    } else {
        resultDiv.innerHTML = `<span class='error'>✖ לא נכון. ${selectedHeReview.he} ≠ ${enWord}</span>`;
    }
    selectedHeReview = null;
}

function nextGroup() {
    if (currentGroup < allGroups.length - 1) {
        startGroup(currentGroup + 1);
    } else {
        alert("סיימת את כל המילים!");
    }
}

function prevGroup() {
    if (currentGroup > 0) {
        startGroup(currentGroup - 1);
    }
}

function backStage() {
    if (currentStage > 0) {
        showStage(currentStage - 1);
    }
}

window.onload = init;
