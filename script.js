
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
    updateProgressBar();
    showStage(0);
}

function updateProgressBar() {
    const fill = document.getElementById("progressFill");
    const percent = Math.floor((currentGroup / allGroups.length) * 100);
    fill.style.width = percent + "%";
    document.getElementById("progressText").innerText = `קבוצה ${currentGroup + 1} מתוך ${allGroups.length}`;
}

function showStage(stageIndex) {
    currentStage = stageIndex;
    saveProgress();
    const stageDiv = document.getElementById("stage");
    const group = allGroups[currentGroup];
    stageDiv.innerHTML = "";
    updateProgressBar();

    if (stageIndex === 0) {
        const title = document.createElement("h3");
        title.innerText = "שלב א";
        stageDiv.appendChild(title);
        group.forEach(p => {
            const div = document.createElement("div");
            div.innerHTML = `
                <button class="word-btn">${p.he}</button>
                <button class="speak-btn" onclick="speak('${p.en}')">השמע</button><br/>
                <input class="word-input" id="input-${p.en}" placeholder="כתוב כאן" onblur="checkInput('${p.en}')"/>
                <div class="feedback" id="feedback-${p.en}"></div>
            `;
            stageDiv.appendChild(div);
        });
        const btn = document.createElement("button");
        btn.innerText = "המשך לשלב ב";
        btn.className = "next-btn";
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
        nextBtn.innerText = "הבא";
        nextBtn.className = "next-btn";
        nextBtn.onclick = nextGroup;
        stageDiv.appendChild(nextBtn);
    }
}

function checkInput(word) {
    const input = document.getElementById("input-" + word).value.trim().toLowerCase();
    const correct = word.toLowerCase();
    const feedback = document.getElementById("feedback-" + word);
    feedback.innerHTML = input === correct ? "<span style='color:green;'>✔ נכון! 😊</span>" : "<span style='color:red;'>✖ לא נכון.</span>";
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
    const btnNext = document.createElement("button");
    btnNext.innerText = "הבא";
    btnNext.className = "next-btn";
    btnNext.onclick = () => showStage(2);
    stageDiv.appendChild(btnNext);
}

let selectedHe = null;
function selectHe(index) { selectedHe = allGroups[currentGroup][index]; }
function selectEn(enWord) {
    if (!selectedHe) return;
    alert(selectedHe.en === enWord ? "✔ נכון! 😊" : "✖ לא נכון.");
    selectedHe = null;
}

function showSpeakStage(group) {
    const stageDiv = document.getElementById("stage");
    group.forEach((p) => {
        const div = document.createElement("div");
        div.innerHTML = `<p><b>${p.he}</b></p>`;
        stageDiv.appendChild(div);
    });
}

function nextGroup() {
    currentGroup++;
    if (currentGroup % 2 === 0 && currentGroup > 0) {
        showReview(8);
        return;
    }
    if (currentGroup % 18 === 0 && currentGroup > 0) {
        showReview(72);
        return;
    }
    if (currentGroup < allGroups.length) startGroup(currentGroup);
    else alert("סיימת את כל הקבוצות!");
}

function showReview(num) {
    const stageDiv = document.getElementById("stage");
    stageDiv.innerHTML = `<h3>חזרה על ${num} מילים</h3>`;
    let words = [];
    const start = Math.max(0, currentGroup - (num / 4));
    for (let i = start; i < currentGroup; i++) {
        words.push(...allGroups[i]);
    }
    showMatchGame(words);
}

function speak(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
}
