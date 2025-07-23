
let currentGroup = 0;
let currentLang = localStorage.getItem('language') || 'he';

function t(key) {
    return translations[currentLang][key] || key;
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentGroup = parseInt(urlParams.get('start')) || 0;
    loadGroup();
});

function loadGroup() {
    document.getElementById("lesson-title").innerText = t("groupLabel") + " " + (currentGroup + 1);
    showStageA();
    updateProgress();
}

function updateProgress() {
    const percent = ((currentGroup + 1) / allGroups.length) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
}

function getWord(wordObj) {
    const lang = currentLang;
    if (wordObj[lang]) {
        return wordObj[lang];
    }
    return wordObj.he;
}

function nextGroup() {
    if (currentGroup + 1 < allGroups.length) {
        currentGroup++;
        localStorage.setItem('lastGroup', currentGroup);
        loadGroup();
    } else {
        alert(t("finishedAll"));
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
    content.innerHTML = "<p>" + t("stageAIntro") + "</p>";
    const group = allGroups[currentGroup];
    group.forEach((word, i) => {
        const displayWord = getWord(word);
        content.innerHTML += `<div class="word-card"><b>${displayWord}</b> – <span>${word.en}</span><br>
            <button onclick="speakWord('${word.en}')">` + t('listen') + `</button><br>
            <input type="text" id="input${i}" placeholder="` + t('typeEnglish') + `">
            <button onclick="checkAnswer(${i}, '${word.en}')">` + t('check') + `</button></div>`;
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
        alert(t("correctAnswer"));
    } else {
        alert(t("incorrectAnswer"));
    }
}

// שלבים נוספים נשארים כבעבר

function showStageB() {
    const content = document.getElementById("lesson-content");
    content.innerHTML = "<p>" + t("stageBIntro") + "</p>";
    const group = allGroups[currentGroup];
    const shuffled = group.slice().sort(() => 0.5 - Math.random());
    group.forEach(word => {
        const div = document.createElement("div");
        div.className = "word-card";
        div.innerHTML = `<b>${word.he}</b> –
            <select onchange="matchCheck(this, '${word.en}')">
                <option>` + t("choose") + `</option>
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
    content.innerHTML = "<p>" + t("stageCIntro") + "</p>";
    const group = allGroups[currentGroup];
    group.forEach(word => {
        const div = document.createElement("div");
        div.className = "word-card";
        div.innerHTML = `<b>${word.he}</b> – <button onclick="startSpeechRecognition('${word.en}')">` + t('speak') + `</button>`;
        content.appendChild(div);
    });
}

function startSpeechRecognition(expectedWord) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = function(event) {
        const spoken = event.results[0][0].transcript.trim().toLowerCase();
        alert(spoken === expectedWord.toLowerCase() ? t("correctAnswer") : t("incorrectAnswer") + " (" + spoken + ")");
    };
}

// חזרות
function openReview() {
    const content = document.getElementById("lesson-content");
    content.innerHTML = "<h3>" + t("review") + "</h3>" +
        "<button onclick='showReview(8)'>" + t("review8") + "</button>" +
        "<button onclick='showReview(72)'>" + t("reviewBig") + "</button>";
}

function showReview(count) {
    const content = document.getElementById("lesson-content");
    if (count === 8) {
        content.innerHTML = "<h3>" + t("review8") + "</h3>";
        let reviewWords = [];
        let startGroup = Math.max(0, currentGroup - 1);
        for (let i = startGroup; i <= currentGroup; i++) {
            reviewWords = reviewWords.concat(allGroups[i]);
        }
        showCustomStageB(reviewWords);
    } else {
        content.innerHTML = "<h3>" + t("reviewBig") + "</h3>";
        let reviewWords = [];
        let startGroup = Math.max(0, currentGroup - 17);
        for (let i = startGroup; i <= currentGroup; i++) {
            reviewWords.push(allGroups[i][0]);
        }
        showCustomStageB(reviewWords);
    }
}

function showCustomStageB(customWords) {
    const content = document.getElementById("lesson-content");
    content.innerHTML += "<p>" + t("stageBIntro") + "</p>";
    const shuffled = customWords.slice().sort(() => 0.5 - Math.random());
    customWords.forEach(word => {
        const div = document.createElement("div");
        div.className = "word-card";
        div.innerHTML = `<b>${word.he}</b> –
            <select onchange="matchCheck(this, '${word.en}')">
                <option>` + t("choose") + `</option>
                ${shuffled.map(w => `<option>${w.en}</option>`).join('')}
            </select>`;
        content.appendChild(div);
    });
}

console.log('Lesson loaded, groups:', allGroups.length);