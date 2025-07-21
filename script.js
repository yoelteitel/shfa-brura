
const allGroups = [[{'he': 'שולחן 1', 'en': 'table1'}, {'he': 'כסא 1', 'en': 'chair1'}, {'he': 'חלון 1', 'en': 'window1'}, {'he': 'דלת 1', 'en': 'door1'}], [{'he': 'שולחן 2', 'en': 'table2'}, {'he': 'כסא 2', 'en': 'chair2'}, {'he': 'חלון 2', 'en': 'window2'}, {'he': 'דלת 2', 'en': 'door2'}], [{'he': 'שולחן 3', 'en': 'table3'}, {'he': 'כסא 3', 'en': 'chair3'}, {'he': 'חלון 3', 'en': 'window3'}, {'he': 'דלת 3', 'en': 'door3'}], [{'he': 'שולחן 4', 'en': 'table4'}, {'he': 'כסא 4', 'en': 'chair4'}, {'he': 'חלון 4', 'en': 'window4'}, {'he': 'דלת 4', 'en': 'door4'}], [{'he': 'שולחן 5', 'en': 'table5'}, {'he': 'כסא 5', 'en': 'chair5'}, {'he': 'חלון 5', 'en': 'window5'}, {'he': 'דלת 5', 'en': 'door5'}], [{'he': 'שולחן 6', 'en': 'table6'}, {'he': 'כסא 6', 'en': 'chair6'}, {'he': 'חלון 6', 'en': 'window6'}, {'he': 'דלת 6', 'en': 'door6'}], [{'he': 'שולחן 7', 'en': 'table7'}, {'he': 'כסא 7', 'en': 'chair7'}, {'he': 'חלון 7', 'en': 'window7'}, {'he': 'דלת 7', 'en': 'door7'}], [{'he': 'שולחן 8', 'en': 'table8'}, {'he': 'כסא 8', 'en': 'chair8'}, {'he': 'חלון 8', 'en': 'window8'}, {'he': 'דלת 8', 'en': 'door8'}], [{'he': 'שולחן 9', 'en': 'table9'}, {'he': 'כסא 9', 'en': 'chair9'}, {'he': 'חלון 9', 'en': 'window9'}, {'he': 'דלת 9', 'en': 'door9'}], [{'he': 'שולחן 10', 'en': 'table10'}, {'he': 'כסא 10', 'en': 'chair10'}, {'he': 'חלון 10', 'en': 'window10'}, {'he': 'דלת 10', 'en': 'door10'}], [{'he': 'שולחן 11', 'en': 'table11'}, {'he': 'כסא 11', 'en': 'chair11'}, {'he': 'חלון 11', 'en': 'window11'}, {'he': 'דלת 11', 'en': 'door11'}], [{'he': 'שולחן 12', 'en': 'table12'}, {'he': 'כסא 12', 'en': 'chair12'}, {'he': 'חלון 12', 'en': 'window12'}, {'he': 'דלת 12', 'en': 'door12'}], [{'he': 'שולחן 13', 'en': 'table13'}, {'he': 'כסא 13', 'en': 'chair13'}, {'he': 'חלון 13', 'en': 'window13'}, {'he': 'דלת 13', 'en': 'door13'}], [{'he': 'שולחן 14', 'en': 'table14'}, {'he': 'כסא 14', 'en': 'chair14'}, {'he': 'חלון 14', 'en': 'window14'}, {'he': 'דלת 14', 'en': 'door14'}], [{'he': 'שולחן 15', 'en': 'table15'}, {'he': 'כסא 15', 'en': 'chair15'}, {'he': 'חלון 15', 'en': 'window15'}, {'he': 'דלת 15', 'en': 'door15'}], [{'he': 'שולחן 16', 'en': 'table16'}, {'he': 'כסא 16', 'en': 'chair16'}, {'he': 'חלון 16', 'en': 'window16'}, {'he': 'דלת 16', 'en': 'door16'}], [{'he': 'שולחן 17', 'en': 'table17'}, {'he': 'כסא 17', 'en': 'chair17'}, {'he': 'חלון 17', 'en': 'window17'}, {'he': 'דלת 17', 'en': 'door17'}], [{'he': 'שולחן 18', 'en': 'table18'}, {'he': 'כסא 18', 'en': 'chair18'}, {'he': 'חלון 18', 'en': 'window18'}, {'he': 'דלת 18', 'en': 'door18'}]];
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
    learning.innerHTML = `<div id="stage"></div>`;
    showStage(0);
}
function showStage(stageIndex) {
    currentStage = stageIndex;
    saveProgress();
    const stageDiv = document.getElementById("stage");
    const group = allGroups[currentGroup];
    stageDiv.innerHTML = "";

    const backHomeBtn = document.createElement("button");
    backHomeBtn.innerText = "חזור לדף הבית";
    backHomeBtn.className = "nav-btn";
    backHomeBtn.onclick = () => window.location='index.html';
    stageDiv.appendChild(backHomeBtn);

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
                <input class="word-input" id="input-${p.en}" placeholder="כתוב כאן" onblur="checkInput('${p.en}')"/>
                <div class="feedback" id="feedback-${p.en}"></div>
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
        const nextBtn = document.createElement("button");
        nextBtn.innerText = "עבור לקבוצה הבאה";
        nextBtn.className = "nav-btn";
        nextBtn.onclick = nextGroup;
        stageDiv.appendChild(nextBtn);
    }
}
function checkInput(word) {
    const input = document.getElementById("input-" + word).value.trim().toLowerCase();
    const correct = word.toLowerCase();
    const feedback = document.getElementById("feedback-" + word);
    if (input === correct) {
        feedback.innerHTML = `<span style="color:green;">✔ נכון! 😊</span>`;
        speakText('נכון');
    } else {
        feedback.innerHTML = `<span style="color:red;">✖ לא נכון.</span>`;
        speakText('לא נכון');
    }
}
function showMatchGame(group) {
    const stageDiv = document.getElementById("stage");
    const heDiv = document.createElement("div");
    const enDiv = document.createElement("div");
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
}
let selectedHe = null;
function selectHe(index) {
    selectedHe = allGroups[currentGroup][index];
}
function selectEn(enWord) {
    if (!selectedHe) return;
    if (selectedHe.en === enWord) {
        alert("✔ נכון! 😊");
        speakText('נכון');
    } else {
        alert("✖ לא נכון.");
        speakText('לא נכון');
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
function nextGroup() {
    currentGroup++;
    if (currentGroup < allGroups.length) {
        startGroup(currentGroup);
    } else {
        alert("סיימת את כל הקבוצות!");
    }
}
function speak(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
}
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'he-IL';
    speechSynthesis.speak(utterance);
}
