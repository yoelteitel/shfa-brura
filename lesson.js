
const REVIEW_BIG = 72;  // ניתן לשנות בקלות את מספר המילים לחזרה הגדולה

let currentGroup = 0;

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentGroup = parseInt(urlParams.get('start')) || 0;
    loadGroup();
});

function loadGroup() {
    document.getElementById("lesson-title").innerText = `קבוצה ${currentGroup + 1}`;
    showStageA();
    updateProgress();
}

function updateProgress() {
    const percent = ((currentGroup + 1) / allGroups.length) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
}

function nextGroup() {
    if (currentGroup + 1 < allGroups.length) {
        currentGroup++;
        localStorage.setItem('lastGroup', currentGroup);
        loadGroup();
    } else {
        alert("סיימת את כל הקבוצות בקובץ זה! נטען קובץ מילים נוסף...");
        location.href = "index.html";
    }
}

function prevGroup() {
    if (currentGroup > 0) {
        currentGroup--;
        localStorage.setItem('lastGroup', currentGroup);
        loadGroup();
    }
}

// שלב א
function showStageA() {
    const content = document.getElementById("lesson-content");
    content.innerHTML = "<p><b>שלב א:</b> קרא את המילה בעברית ובאנגלית, לחץ 'שמיעה', וכתוב את המילה באנגלית.</p>";
    const group = allGroups[currentGroup];
    group.forEach((word, i) => {
        const div = document.createElement("div");
        div.className = "word-card";
        div.innerHTML = `<b>${word.he}</b> – <span>${word.en}</span><br>
                         <button onclick="speakWord('${word.en}')">שמיעה</button><br>
                         <input type="text" id="input${i}" placeholder="כתוב באנגלית">
                         <button onclick="checkAnswer(${i}, '${word.en}')">בדיקה</button>`;
        content.appendChild(div);
    });
}

function speakWord(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
}

function checkAnswer(index, correct) {
    const input = document.getElementById(`input${index}`);
    if (input.value.trim().toLowerCase() === correct.toLowerCase()) {
        input.parentElement.classList.add("correct");
        input.parentElement.classList.remove("incorrect");
    } else {
        input.parentElement.classList.add("incorrect");
        input.parentElement.classList.remove("correct");
    }
}

// שלב ב
function showStageB() {
    const content = document.getElementById("lesson-content");
    content.innerHTML = "<p><b>שלב ב:</b> בחר את התרגום הנכון לכל מילה.</p>";
    const group = allGroups[currentGroup];
    const shuffled = group.slice().sort(() => 0.5 - Math.random());
    group.forEach(word => {
        const div = document.createElement("div");
        div.className = "word-card";
        div.innerHTML = `<b>${word.he}</b> –
            <select onchange="matchCheck(this, '${word.en}')">
                <option>בחר</option>
                ${shuffled.map(w => `<option>${w.en}</option>`).join('')}
            </select>`;
        content.appendChild(div);
    });
}

function matchCheck(select, correct) {
    if (select.value === correct) {
        select.parentElement.classList.add("correct");
        select.parentElement.classList.remove("incorrect");
    } else {
        select.parentElement.classList.add("incorrect");
        select.parentElement.classList.remove("correct");
    }
}

// שלב ג
function showStageC() {
    const content = document.getElementById("lesson-content");
    content.innerHTML = "<p><b>שלב ג:</b> אמור בקול את המילה באנגלית.</p>";
    const group = allGroups[currentGroup];
    group.forEach(word => {
        const div = document.createElement("div");
        div.className = "word-card";
        div.innerHTML = `<b>${word.he}</b> – <button onclick="startSpeechRecognition('${word.en}')">אמור באנגלית</button>`;
        content.appendChild(div);
    });
}

function startSpeechRecognition(expectedWord) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = function(event) {
        const spoken = event.results[0][0].transcript.trim().toLowerCase();
        alert(spoken === expectedWord.toLowerCase() ? "נכון!" : `לא נכון (${spoken})`);
    };
}

// חזרות
function openReview() {
    const content = document.getElementById("lesson-content");
    content.innerHTML = "<h3>בחר חזרה:</h3>" +
        "<button onclick='showReview(8)'>חזרה על 8 מילים אחרונות</button>" +
        `<button onclick='showReview(${REVIEW_BIG})'>חזרה חלקית – מילה אחת מכל קובץ</button>`;
}

function showReview(count) {
    const content = document.getElementById("lesson-content");
    if (count === 8) {
        content.innerHTML = "<h3>חזרה על 8 המילים האחרונות</h3>";
        let reviewWords = [];
        let startGroup = Math.max(0, currentGroup - 1);
        for (let i = startGroup; i <= currentGroup; i++) {
            reviewWords = reviewWords.concat(allGroups[i]);
        }
        showCustomStageB(reviewWords);
    } else if (count === REVIEW_BIG) {
        content.innerHTML = `<h3>חזרה חלקית – מילה אחת מכל קובץ</h3>`;
        let reviewWords = [];
        let startGroup = Math.max(0, currentGroup - (REVIEW_BIG / 4 - 1));
        for (let i = startGroup; i <= currentGroup; i++) {
            reviewWords.push(allGroups[i][0]);
        }
        showCustomStageB(reviewWords);
    }
}

function showCustomStageB(customWords) {
    const content = document.getElementById("lesson-content");
    content.innerHTML += "<p><b>בחר את התרגום הנכון.</b></p>";
    const shuffled = customWords.slice().sort(() => 0.5 - Math.random());
    customWords.forEach(word => {
        const div = document.createElement("div");
        div.className = "word-card";
        div.innerHTML = `<b>${word.he}</b> –
            <select onchange="matchCheck(this, '${word.en}')">
                <option>בחר</option>
                ${shuffled.map(w => `<option>${w.en}</option>`).join('')}
            </select>`;
        content.appendChild(div);
    });
}
