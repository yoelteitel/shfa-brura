
let groups = [];
let currentGroupIndex = 0;
let stage = 1; // 1=לימוד, 2=משחק, 3=אמירה
let currentWordIndex = 0;
let selectedHeb = null;
let selectedEng = null;
let score = 0;
let attempts = 0;

async function loadGroups() {
  const res = await fetch('words.json');
  groups = await res.json();
  showGroup();
}

function showGroup() {
  if (currentGroupIndex >= groups.length) {
    startFinalExam();
    return;
  }
  stage = 1;
  currentWordIndex = 0;
  score = 0;
  attempts = 0;
  updateProgress();
  showStageA();
}

function updateProgress() {
  document.getElementById('progress').innerHTML =
    `קבוצה ${currentGroupIndex+1} מתוך ${groups.length} – שלב ${stage}`;
}

function nextStage() {
  if (stage === 1) {
    stage = 2;
    showStageB();
  } else if (stage === 2) {
    stage = 3;
    showStageC();
  } else if (stage === 3) {
    alert(`סיום קבוצה ${currentGroupIndex+1}. הציון שלך במשחק: ${score}/${attempts}`);
    currentGroupIndex++;
    showGroup();
  }
  updateProgress();
}

function backStage() {
  if (stage > 1) {
    stage--;
    if (stage === 1) showStageA();
    if (stage === 2) showStageB();
    updateProgress();
  }
}

function skipWord() {
  if (stage === 3) {
    currentWordIndex++;
    askNextWord();
  }
}

function showStageA() {
  const container = document.getElementById('stage-container');
  container.innerHTML = '<h2>שלב א: למד את המילים</h2>';
  let table = '<table class="word-table"><tr><th>עברית</th><th>אנגלית</th><th>שמיעה</th></tr>';
  groups[currentGroupIndex].words.forEach(w => {
    table += `<tr><td>${w.hebrew}</td><td>${w.english}</td><td><button onclick="playWord('${w.english}')">🔊</button></td></tr>`;
  });
  table += '</table>';
  container.innerHTML += table;
}

function showStageB() {
  const container = document.getElementById('stage-container');
  container.innerHTML = '<h2>שלב ב: חבר את המילים</h2>';
  const hebrew = groups[currentGroupIndex].words.map(w => w.hebrew);
  const english = groups[currentGroupIndex].words.map(w => w.english);
  shuffle(hebrew);
  shuffle(english);
  let gameHTML = '<div class="columns"><div><h3>עברית</h3>';
  hebrew.forEach(h => {
    gameHTML += `<div class="word" onclick="selectWord(this, 'hebrew')">${h}</div>`;
  });
  gameHTML += '</div><div><h3>אנגלית</h3>';
  english.forEach(e => {
    gameHTML += `<div class="word" onclick="selectWord(this, 'english')">${e}</div>`;
  });
  gameHTML += '</div></div>';
  container.innerHTML += gameHTML;
}

function selectWord(el, lang) {
  if (lang === 'hebrew') selectedHeb = el.innerText;
  else selectedEng = el.innerText;
  if (selectedHeb && selectedEng) {
    attempts++;
    const pair = groups[currentGroupIndex].words.find(w => w.hebrew === selectedHeb && w.english === selectedEng);
    if (pair) {
      markMatched(selectedHeb, selectedEng);
      score++;
      document.getElementById('feedback').innerText = 'נכון!';
    } else {
      document.getElementById('feedback').innerText = 'לא נכון, נסה שוב';
    }
    selectedHeb = null;
    selectedEng = null;
  }
}

function markMatched(h, e) {
  document.querySelectorAll('.word').forEach(word => {
    if (word.innerText === h || word.innerText === e) {
      word.style.backgroundColor = '#90ee90';
      word.onclick = null;
    }
  });
}

function showStageC() {
  currentWordIndex = 0;
  askNextWord();
}

function askNextWord() {
  if (currentWordIndex >= groups[currentGroupIndex].words.length) {
    document.getElementById('stage-container').innerHTML = '<h2>סיימת את שלב האמירה!</h2>';
    return;
  }
  const container = document.getElementById('stage-container');
  container.innerHTML = `<h2>שלב ג: אמור את המילה באנגלית</h2><p>${groups[currentGroupIndex].words[currentWordIndex].hebrew}</p><button onclick="checkVoice()">אמור מילה</button>`;
}

function playWord(word) {
  const u = new SpeechSynthesisUtterance(word);
  u.lang = 'en-US';
  speechSynthesis.speak(u);
}

function checkVoice() {
  const feedback = document.getElementById('feedback');
  feedback.textContent = 'מקשיב... (מדמה זיהוי דיבור)';
  setTimeout(() => {
    feedback.textContent = 'נאמר נכון! 🎉';
    currentWordIndex++;
    askNextWord();
  }, 1000);
}


function startFinalExam() {
  fetch('final_exam.json')
    .then(res => res.json())
    .then(examWords => startExam(examWords));
}

  document.getElementById('stage-container').innerHTML = '<h2>מבחן מסכם על 72 מילים!</h2><p>כאן יוצג משחק התאמות ותרגול אמירה של 18 מילים (מילה מכל קבוצה).</p>';
  document.getElementById('next-step').style.display = 'none';
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

loadGroups();

function startExam(words) {
  const container = document.getElementById('stage-container');
  container.innerHTML = '<h2>מבחן מסכם – משחק התאמות</h2>';
  let hebrew = words.map(w => w.hebrew);
  let english = words.map(w => w.english);
  shuffle(hebrew);
  shuffle(english);

  let gameHTML = '<div class="columns"><div><h3>עברית</h3>';
  hebrew.forEach(h => { gameHTML += `<div class="word" onclick="selectExam(this,'hebrew')">${h}</div>`; });
  gameHTML += '</div><div><h3>אנגלית</h3>';
  english.forEach(e => { gameHTML += `<div class="word" onclick="selectExam(this,'english')">${e}</div>`; });
  gameHTML += '</div></div><button onclick="startExamSpeech(words)">תרגול אמירה</button>';
  container.innerHTML = gameHTML;
}

let examSelectedHeb = null;
let examSelectedEng = null;
let examScore = 0;
let examAttempts = 0;

function selectExam(el, lang) {
  if (lang === 'hebrew') examSelectedHeb = el.innerText;
  else examSelectedEng = el.innerText;

  if (examSelectedHeb && examSelectedEng) {
    examAttempts++;
    fetch('final_exam.json')
      .then(res => res.json())
      .then(words => {
        const pair = words.find(w => w.hebrew === examSelectedHeb && w.english === examSelectedEng);
        if (pair) {
          examScore++;
          el.style.backgroundColor = '#90ee90';
          document.getElementById('feedback').innerText = 'נכון!';
        } else {
          document.getElementById('feedback').innerText = 'לא נכון, נסה שוב';
        }
        examSelectedHeb = null;
        examSelectedEng = null;
      });
  }
}

function startExamSpeech(words) {
  const container = document.getElementById('stage-container');
  container.innerHTML = '<h2>מבחן מסכם – אמירת מילים</h2>';
  currentExamWordIndex = 0;
  examWordsList = words;
  askNextExamWord();
}

let currentExamWordIndex = 0;
let examWordsList = [];

function askNextExamWord() {
  if (currentExamWordIndex >= examWordsList.length) {
    document.getElementById('stage-container').innerHTML = `<h2>סיימת את המבחן!</h2><p>ציון במשחק: ${examScore}/${examAttempts}</p>`;
    return;
  }
  const container = document.getElementById('stage-container');
  container.innerHTML = `<h2>אמור את המילה באנגלית</h2><p>${examWordsList[currentExamWordIndex].hebrew}</p><button onclick="checkExamVoice()">אמור מילה</button>`;
}

function checkExamVoice() {
  const feedback = document.getElementById('feedback');
  feedback.textContent = 'מקשיב... (מדמה זיהוי)';
  setTimeout(() => {
    feedback.textContent = 'נאמר נכון!';
    currentExamWordIndex++;
    askNextExamWord();
  }, 1000);
}
