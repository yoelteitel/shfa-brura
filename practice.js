
let words = [];
let step = 1;
let correctMatches = 0;
let selectedHeb = '';
let selectedEng = '';

async function loadWords() {
  const res = await fetch('words.json');
  words = await res.json();
}

function startPractice() {
  if (step === 1) stepOne();
  else if (step === 2) stepTwo();
  else if (step === 3) stepThree();
}

function stepOne() {
  const container = document.getElementById('practice-container');
  container.innerHTML = '<h2>שלב א: לחץ על מילה בעברית ואז באנגלית</h2>';
  correctMatches = 0;
  words.slice(0, 6).forEach(w => {
    container.innerHTML += `<button class='hebrew-btn' onclick="selectHebrew('${w.hebrew}')">${w.hebrew}</button> `;
  });
  container.innerHTML += '<br><br>';
  words.slice(0, 6).forEach(w => {
    container.innerHTML += `<button class='english-btn' onclick="selectEnglish('${w.english}')">${w.english}</button> `;
  });
  step = 2;
}

function selectHebrew(heb) { selectedHeb = heb; }
function selectEnglish(eng) {
  const match = words.find(w => w.hebrew === selectedHeb);
  if (match && match.english === eng) {
    correctMatches++;
    document.getElementById('practice-score').textContent = `התאמות נכונות: ${correctMatches}/6`;
  }
}

function stepTwo() {
  const container = document.getElementById('practice-container');
  container.innerHTML = '<h2>שלב ב: משחק התאמות</h2>';
  correctMatches = 0;

  const hebList = words.slice(0, 6).map(w => w.hebrew);
  const engList = words.slice(0, 6).map(w => w.english);

  shuffleArray(hebList);
  shuffleArray(engList);

  const hebDiv = document.createElement('div');
  hebDiv.id = 'hebrew-column';
  const engDiv = document.createElement('div');
  engDiv.id = 'english-column';

  hebList.forEach(h => {
    const btn = document.createElement('button');
    btn.textContent = h;
    btn.onclick = () => selectHebMatch(btn);
    hebDiv.appendChild(btn);
  });

  engList.forEach(e => {
    const btn = document.createElement('button');
    btn.textContent = e;
    btn.onclick = () => selectEngMatch(btn);
    engDiv.appendChild(btn);
  });

  container.appendChild(hebDiv);
  container.appendChild(engDiv);
  container.appendChild(document.createElement('br'));

  const score = document.createElement('div');
  score.id = 'match-score';
  score.textContent = '0/6 התאמות נכונות';
  container.appendChild(score);

  step = 3;
}

let currentHebBtn = null;
let currentEngBtn = null;

function selectHebMatch(btn) {
  if (currentHebBtn) currentHebBtn.classList.remove('selected');
  currentHebBtn = btn;
  btn.classList.add('selected');
}

function selectEngMatch(btn) {
  if (!currentHebBtn) return;
  if (currentEngBtn) currentEngBtn.classList.remove('selected');
  currentEngBtn = btn;
  btn.classList.add('selected');
  checkMatch();
}

function checkMatch() {
  const heb = currentHebBtn.textContent;
  const eng = currentEngBtn.textContent;
  const match = words.find(w => w.hebrew === heb);
  if (match && match.english === eng) {
    correctMatches++;
    document.getElementById('match-score').textContent = `${correctMatches}/6 התאמות נכונות`;
    currentHebBtn.disabled = true;
    currentEngBtn.disabled = true;
    currentHebBtn.classList.remove('selected');
    currentEngBtn.classList.remove('selected');
    currentHebBtn = null;
    currentEngBtn = null;
    if (correctMatches === 6) {
      document.getElementById('match-score').textContent += " – כל ההתאמות בוצעו!";
    }
  }
}

function stepThree() {
  const container = document.getElementById('practice-container');
  container.innerHTML = '<h2>שלב ג: אמור את המילים בקול</h2>';
  container.innerHTML += `<button onclick="startVoiceCheck()">התחל בדיקת קול</button>`;
}

function startVoiceCheck() {
  if (!('webkitSpeechRecognition' in window)) { alert('אין תמיכה בזיהוי קול'); return; }
  let currentIndex = 0;
  let score = 0;

  function checkNext() {
    if (currentIndex >= 6) {
      document.getElementById('practice-score').textContent = `ציון דיבור: ${score}/6`;
      return;
    }
    const w = words[currentIndex];
    const u = new SpeechSynthesisUtterance(w.english);
    speechSynthesis.speak(u);
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onresult = (e) => {
      const spoken = e.results[0][0].transcript.toLowerCase();
      if (spoken === w.english.toLowerCase()) score++;
      currentIndex++;
      checkNext();
    };
    recognition.start();
  }
  checkNext();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

loadWords();
