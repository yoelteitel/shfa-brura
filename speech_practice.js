
let words = [];
let practiceList = [];
let step = 1;

async function loadWords() {
  const res = await fetch('words.json');
  words = await res.json();
  const level = new URLSearchParams(window.location.search).get('level') || 'medium';
  const count = (level === 'medium') ? 4 : 6;
  practiceList = words.slice(0, count);
}

function startSpeechPractice() {
  const container = document.getElementById('speech-container');
  if (step === 1) {
    buildMatching(container);
    step = 2;
  } else if (step === 2) {
    buildVoiceCheck(container);
    document.getElementById('next-step').style.display = 'none';
  }
}

function buildMatching(container) {
  container.innerHTML = '<h2>שלב א: לחץ על מילה בעברית ואז באנגלית</h2>';
  practiceList.forEach(w => {
    container.innerHTML += `<button onclick="playWord('${w.english}')">${w.hebrew}</button>`;
  });
  container.innerHTML += '<br><br>';
  practiceList.forEach(w => {
    container.innerHTML += `<button>${w.english}</button>`;
  });
}

function playWord(word) {
  const u = new SpeechSynthesisUtterance(word);
  u.lang = 'en-US';
  speechSynthesis.speak(u);
}

function buildVoiceCheck(container) {
  container.innerHTML = '<h2>שלב ב: אמור את המילים בקול</h2><button onclick="startVoiceCheck()">התחל בדיקה</button>';
}

function startVoiceCheck() {
  if (!('webkitSpeechRecognition' in window)) { alert('אין תמיכה בזיהוי קול'); return; }
  let idx = 0, score = 0;
  function next() {
    if (idx >= practiceList.length) {
      document.getElementById('speech-score').textContent = `ציון דיבור: ${score}/${practiceList.length}`;
      return;
    }
    const w = practiceList[idx];
    const u = new SpeechSynthesisUtterance(w.english);
    u.lang = 'en-US';
    speechSynthesis.speak(u);
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (e) => {
      const spoken = e.results[0][0].transcript.toLowerCase();
      if (spoken === w.english.toLowerCase()) score++;
      idx++;
      next();
    };
    recognition.start();
  }
  next();
}

loadWords();
