
let groups = [];
let currentGroupIndex = 0;
let stage = 1; // 1=לימוד, 2=משחק, 3=אמירה
let currentWordIndex = 0;
let score = 0;
let attempts = 0;
let selectedHeb = null;
let selectedEng = null;

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
  document.getElementById('progress').innerHTML = totalProgress() + '<br>' + `קבוצה ${currentGroupIndex+1} מתוך ${groups.length} – שלב ${stage}`;
}

function nextStage() {
  if (stage === 1) {
    stage = 2;
    showStageB();
  } else if (stage === 2) {
    stage = 3;
    showStageC();
  } else if (stage === 3) {
    alert(`סיום קבוצה ${currentGroupIndex+1}. ציון במשחק: ${score}/${attempts}`);
    if (groups[currentGroupIndex].review) {
      showReview();
    } else {
      currentGroupIndex++;
      showGroup();
    }
  }
  updateProgress();
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
  hebrew.forEach(h => gameHTML += `<div class="word" onclick="selectWord(this, 'hebrew')">${h}</div>`);
  gameHTML += '</div><div><h3>אנגלית</h3>';
  english.forEach(e => gameHTML += `<div class="word" onclick="selectWord(this, 'english')">${e}</div>`);
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
      score++;
      markMatched(selectedHeb, selectedEng);
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
  container.innerHTML = `<h2>שלב ג: אמור את המילה באנגלית</h2><p>${groups[currentGroupIndex].words[currentWordIndex].hebrew}</p><button onclick="nextWord()">הבא</button>`;
}

function nextWord() {
  currentWordIndex++;
  askNextWord();
}

function showReview() {
  const container = document.getElementById('stage-container');
  container.innerHTML = '<h2>חזרה על 8 מילים</h2>';
  const lastTwo = [groups[currentGroupIndex - 1], groups[currentGroupIndex]];
  let combined = [...lastTwo[0].words, ...lastTwo[1].words];
  const hebrew = combined.map(w => w.hebrew);
  const english = combined.map(w => w.english);
  shuffle(hebrew);
  shuffle(english);
  let gameHTML = '<div class="columns"><div><h3>עברית</h3>';
  hebrew.forEach(h => gameHTML += `<div class="word" onclick="selectWord(this, 'hebrew')">${h}</div>`);
  gameHTML += '</div><div><h3>אנגלית</h3>';
  english.forEach(e => gameHTML += `<div class="word" onclick="selectWord(this, 'english')">${e}</div>`);
  gameHTML += '</div></div>';
  container.innerHTML += gameHTML;
  document.getElementById('next-step').onclick = () => { currentGroupIndex++; showGroup(); };
}

function playWord(word) {
  const u = new SpeechSynthesisUtterance(word);
  u.lang = 'en-US';
  speechSynthesis.speak(u);
}

function startFinalExam() {
  const container = document.getElementById('stage-container');
  container.innerHTML = '<h2>מבחן מסכם על 72 מילים!</h2>';
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

loadGroups();

function startFinalExam() {
  fetch('final_exam.json')
    .then(res => res.json())
    .then(words => startExam(words));
}

let examIndex = 0;
let examScore = 0;
let examAttempts = 0;
let examWords = [];

function startExam(words) {
  examWords = words;
  examIndex = 0;
  examScore = 0;
  examAttempts = 0;
  askNextExamWord();
}

function askNextExamWord() {
  if (examIndex >= examWords.length) {
    document.getElementById('stage-container').innerHTML =
      `<h2>סיימת את המבחן!</h2><p>ציון: ${examScore}/${examAttempts}</p>`;
    return;
  }
  const container = document.getElementById('stage-container');
  container.innerHTML = `<h2>מבחן מסכם</h2><p>${examWords[examIndex].hebrew}</p>
    <input type="text" id="answer" placeholder="כתוב את המילה באנגלית">
    <button onclick="checkExamAnswer()">בדוק</button>`;
}

function checkExamAnswer() {
  const ans = document.getElementById('answer').value.trim().toLowerCase();
  examAttempts++;
  if (ans === examWords[examIndex].english.toLowerCase()) {
    examScore++;
    document.getElementById('feedback').innerText = 'נכון!';
  } else {
    document.getElementById('feedback').innerText = `טעות! התשובה: ${examWords[examIndex].english}`;
  }
  examIndex++;
  setTimeout(askNextExamWord, 800);
}

// אחוז התקדמות
function updateProgress() {
  const totalGroups = groups.length;
  const completed = currentGroupIndex;
  const percent = Math.floor((completed / totalGroups) * 100);
  document.getElementById('progress').innerHTML =
    `קבוצה ${currentGroupIndex+1} מתוך ${totalGroups} – שלב ${stage} | התקדמות: ${percent}%`;
}

// דלג/חזור קבוצות
function skipGroup() {
  if (currentGroupIndex < groups.length - 1) {
    currentGroupIndex++;
    showGroup();
  }
}

function prevGroup() {
  if (currentGroupIndex > 0) {
    currentGroupIndex--;
    showGroup();
  }
}

// שמירת מיקום אחרון
function saveProgress() {
  localStorage.setItem('currentGroupIndex', currentGroupIndex);
  localStorage.setItem('currentStage', stage);
}

// טעינת מיקום אחרון
function loadProgress() {
  const savedGroup = localStorage.getItem('currentGroupIndex');
  const savedStage = localStorage.getItem('currentStage');
  if (savedGroup !== null) currentGroupIndex = parseInt(savedGroup);
  if (savedStage !== null) stage = parseInt(savedStage);
}

// שכתוב פונקציות להצגת שלבים עם שמירה
function showGroup() {
  saveProgress();
  if (currentGroupIndex >= groups.length) {
    startFinalExam();
    return;
  }
  currentWordIndex = 0;
  score = 0;
  attempts = 0;
  updateProgress();
  if (stage === 1) showStageA();
  else if (stage === 2) showStageB();
  else if (stage === 3) showStageC();
}

function nextStage() {
  if (stage === 1) stage = 2;
  else if (stage === 2) stage = 3;
  else if (stage === 3) {
    alert(`סיום קבוצה ${currentGroupIndex+1}. ציון במשחק: ${score}/${attempts}`);
    if (groups[currentGroupIndex].review) {
      showReview();
      return;
    } else {
      currentGroupIndex++;
      stage = 1;
    }
  }
  saveProgress();
  showGroup();
}

document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
});



function totalProgress() {
  const completedGroups = currentGroupIndex;
  const totalGroups = groups.length;
  const percentage = Math.floor((completedGroups / totalGroups) * 100);
  return `התלמיד התקדם ${percentage}% מכלל 72 המילים`;
}

