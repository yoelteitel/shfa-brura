
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

window.onload = function() {
    const groupLinks = document.getElementById("groupLinks");
    allGroups.forEach((_, idx) => {
        const btn = document.createElement("button");
        btn.innerText = "קבוצה " + (idx + 1);
        btn.className = "nav-btn";
        btn.onclick = () => startGroup(idx);
        groupLinks.appendChild(btn);
    });
}

function startGroup(groupIndex) {
    currentGroup = groupIndex;
    currentStage = 0;
    openLearningPage();
}

function openLearningPage() {
    document.body.innerHTML = `
        <div class="container">
            <h2>קבוצה ${currentGroup+1} – שלב א</h2>
            <div id="stage"></div>
            <button class="nav-btn" onclick="showStage(1)">עבור לשלב ב</button>
        </div>`;
    showStage(0);
}

function showStage(stageIndex) {
    currentStage = stageIndex;
    saveProgress();
    const stageDiv = document.getElementById("stage");
    const group = allGroups[currentGroup];
    stageDiv.innerHTML = "";
    if (stageIndex === 0) {
        group.forEach(p => {
            const div = document.createElement("div");
            div.className = "word-block";
            div.innerHTML = `
                <button class="word-btn">${p.he} - ${p.en}</button><br/>
                <input class="word-input" placeholder="כתוב כאן: ${p.en}"/>
            `;
            stageDiv.appendChild(div);
        });
    }
    else if (stageIndex === 1) {
        showMatchGame(group);
    }
    else if (stageIndex === 2) {
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
    nextBtn.innerText = "עבור לשלב ג";
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
        resultDiv.innerHTML = `<span style="color:green;">✔ נכון!</span>`;
    } else {
        resultDiv.innerHTML = `<span style="color:red;">✖ לא נכון.</span>`;
    }
    selectedHe = null;
}

function showSpeakStage(group) {
    const stageDiv = document.getElementById("stage");
    stageDiv.innerHTML = `
        <p>בשלב זה אמור בקול את המילים.</p>
        <button class="nav-btn" onclick="checkMicrophone()">בדוק מיקרופון</button>
    `;
}

function checkMicrophone() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            alert("המיקרופון זמין ומחובר. דבר ובדוק באפליקציה אחרת.");
            stream.getTracks().forEach(track => track.stop());
        })
        .catch(err => {
            alert("המיקרופון לא זמין: " + err.message);
        });
}
