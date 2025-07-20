
let words = [];
let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;
let stage = 1;

async function loadWords() {
  const res = await fetch('words.json');
  words = await res.json();
  showWord();
}

function updateProgress() {
  const percent = Math.floor((currentIndex / words.length) * 100);
  document.getElementById('progress-bar').style.width = percent + '%';
  document.getElementById('progress-text').textContent = `מילה ${currentIndex + 1} מתוך ${words.length} (${percent}%)`;
}

function showWord() {
  const w = words[currentIndex];
  if (!w) return;
  const display = document.getElementById('word-display');
  if (stage === 1) display.textContent = `${w.hebrew} – ${w.english}`;
  else if (stage === 2) display.textContent = `${w.hebrew} – ${w.english.slice(0, -2)}__`;
  else if (stage === 3) display.textContent = `${w.hebrew} – ${w.english[0]}${'_'.repeat(w.english.length - 1)}`;
  else if (stage === 4) display.textContent = w.hebrew;
  document.getElementById('user-input').value = '';
  updateProgress();
}

function checkInput() {
  const w = words[currentIndex];
  const input = document.getElementById('user-input').value.trim().toLowerCase();
  if (input === w.english.toLowerCase()) {
    document.getElementById('feedback').textContent = 'נכון! 😊';
    setTimeout(nextStage, 700);
  } else {
    document.getElementById('feedback').textContent = '';
  }
}

function nextStage() {
  stage++;
  if (stage > 4) {
    stage = 1;
    currentIndex++;
    localStorage.setItem('currentIndex', currentIndex);
  }
  showWord();
}

function prevStage() { stage = Math.max(1, stage - 1); showWord(); }
function skipWord() { currentIndex++; showWord(); }

function playWord() {
  const w = words[currentIndex];
  const u = new SpeechSynthesisUtterance(w.english);
  u.lang = 'en-US';
  speechSynthesis.speak(u);
}

function checkVoice() {
  if (!('webkitSpeechRecognition' in window)) { alert('אין תמיכה בזיהוי קול'); return; }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.onresult = (e) => {
    const spoken = e.results[0][0].transcript.toLowerCase();
    alert(spoken === words[currentIndex].english.toLowerCase() ? 'נאמר נכון!' : 'אמרת: ' + spoken);
  };
  recognition.start();
}

document.getElementById('user-input').addEventListener('input', checkInput);
loadWords();
