
const allGroups = [
    [ {he: "שולחן", en: "Table"}, {he: "כסא", en: "Chair"}, {he: "חלון", en: "Window"}, {he: "דלת", en: "Door"} ],
    [ {he: "ספר", en: "Book"}, {he: "עט", en: "Pen"}, {he: "עיפרון", en: "Pencil"}, {he: "מחברת", en: "Notebook"} ]
];

let currentGroup = 0;
let currentStage = 0;

function saveProgress() {
    localStorage.setItem("lastGroup", currentGroup);
    localStorage.setItem("lastStage", currentStage);
}
function resumeLast() {
    const lastGroup = localStorage.getItem("lastGroup");
    const lastStage = localStorage.getItem("lastStage");
    if (lastGroup !== null) {
        startGroup(parseInt(lastGroup));
        if (lastStage !== null) showStage(parseInt(lastStage));
    } else {
        alert("לא נמצא מיקום קודם.");
    }
}
function startFromBeginning() {
    currentGroup = 0;
    currentStage = 0;
    startGroup(0);
}
function startGroup(groupIndex) {
    currentGroup = groupIndex;
    currentStage = 0;
    document.getElementById("home").classList.add("hidden");
    document.getElementById("learning").classList.remove("hidden");
    openLearningPage();
}
function openLearningPage() {
    const learning = document.getElementById("learning");
    learning.innerHTML = `
        <h2>קבוצה ${currentGroup+1} – שלב א</h2>
        <div id="stage"></div>
    `;
    showStage(0);
}
function showStage(stageIndex) {
    currentStage = stageIndex;
    saveProgress();
    const stageDiv = document.getElementById("stage");
    const group = allGroups[currentGroup];
    stageDiv.innerHTML = "";

    if (stageIndex === 0) {
        const title = document.createElement("h3");
        title.innerText = "שלב א";
        stageDiv.appendChild(title);
        group.forEach(p => {
            const div = document.createElement("div");
            div.className = "word-block";
            div.innerHTML = `
                <button class="word-btn">${p.he} - ${p.en}</button>
                <button class="speak-btn" onclick="speak('${p.en}')">השמע</button><br/>
                <input class="word-input" placeholder="כתוב כאן: ${p.en}"/>
            `;
            stageDiv.appendChild(div);
        });
        const btn = document.createElement("button");
        btn.innerText = "המשך לשלב ב";
        btn.className = "nav-btn";
        btn.onclick = () => showStage(1);
        stageDiv.appendChild(btn);
    }
    else if (stageIndex === 1) {
        const title = document.createElement("h3");
        title.innerText = "שלב ב";
        stageDiv.appendChild(title);
        showMatchGame(group);
    }
    else if (stageIndex === 2) {
        const title = document.createElement("h3");
        title.innerText = "שלב ג";
        stageDiv.appendChild(title);
        showSpeakStage(group);
    }
}
function showMatchGame(group) {
    const stageDiv = document.getElementById("stage");
    const heDiv = document.createElement("div");
    const enDiv = document.createElement("div");
    heDiv.innerHTML = "<h3>עברית</h3>";
    enDiv.innerHTML = "<h3>אנגלית</h3>";
    group.forEach((p,i)=>{
        const btn = document.createElement("button");
        btn.innerText = p.he;
        btn.className = "word-btn";
        btn.onclick = ()=> selectHe(i);
        heDiv.appendChild(btn);
    });
    const shuffled = [...group].sort(()=>Math.random()-0.5);
    shuffled.forEach(p=>{
        const btn = document.createElement("button");
        btn.innerText = p.en;
        btn.className = "word-btn";
        btn.onclick = ()=> selectEn(p.en);
        enDiv.appendChild(btn);
    });
    stageDiv.appendChild(heDiv);
    stageDiv.appendChild(enDiv);
    const resultDiv = document.createElement("div");
    resultDiv.id = "matchResult";
    stageDiv.appendChild(resultDiv);
    const nextBtn = document.createElement("button");
    nextBtn.className = "nav-btn";
    nextBtn.innerText = "המשך לשלב ג";
    nextBtn.onclick = () => showStage(2);
    stageDiv.appendChild(nextBtn);
}
let selectedHe = null;
function selectHe(index) {
    selectedHe = allGroups[currentGroup][index];
    document.getElementById("matchResult").innerText = `בחרת "${selectedHe.he}", עכשיו בחר באנגלית.`;
}
function selectEn(enWord) {
    if (!selectedHe) return;
    const resultDiv = document.getElementById("matchResult");
    if (selectedHe.en === enWord) {
        resultDiv.innerHTML = `<span style="color:green;">✔ נכון! 😊</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color:red;">✖ לא נכון.</span>`;
    }
    selectedHe = null;
}
function showSpeakStage(group) {
    const stageDiv = document.getElementById("stage");
    group.forEach((p) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p><b>${p.he}</b> <span id="smiley-${p.en}" class="smiley"></span></p>
            <button class="listen-btn" onclick="startListening('${p.en}')">בדוק אם אמרת נכון</button>
            <div id="result-${p.en}" style="margin-top:5px;"></div>
        `;
        stageDiv.appendChild(div);
    });
}
function speak(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
}
function startListening(correctWord) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.start();
    recognition.onresult = function(event) {
        const said = event.results[0][0].transcript.trim().toLowerCase();
        const correct = correctWord.toLowerCase();
        const resultDiv = document.getElementById("result-" + correctWord);
        const smiley = document.getElementById("smiley-" + correctWord);
        if (said === correct) {
            resultDiv.innerHTML = `<span style="color:green;">✔ אמרת נכון (${said}) 😊</span>`;
            smiley.innerHTML = "😊";
        } else {
            resultDiv.innerHTML = `<span style="color:red;">✖ שמענו "${said}" במקום "${correct}"</span>`;
            smiley.innerHTML = "";
        }
    };
    recognition.onerror = function() {
        alert("לא ניתן לזהות קול. בדוק את המיקרופון.");
    };
}
