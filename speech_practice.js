
let words = [];
let stage = 1;
let currentIndex = 0;
let selectedHeb = null;
let selectedEng = null;

async function loadWords() {
  const res = await fetch('words.json');
  words = await res.json();
  showStageA();
}

function nextStage() {
  if (stage === 1) {
    stage = 2;
    showStageB();
  } else if (stage === 2) {
    stage = 3;
    showStageC();
    document.getElementById('next-step').style.display = 'none';
  }
}

function showStageA() {
  const container = document.getElementById('stage-container');
  container.innerHTML = '<h2>שלב א: למד את המילים</h2>';
  let table = '<table style="margin:auto; border-collapse:collapse;">';
  table += '<tr><th>עברית</th><th>אנגלית</th><th>שמיעה</th></tr>';
  words.forEach(w => {
    table += `<tr><td>${w.hebrew}</td><td>${w.english}</td><td><button onclick="playWord('${w.english}')">🔊</button></td></tr>`;
  });
  table += '</table>';
  container.innerHTML += table;
}

function showStageB() {
  const container = document.getElementById('stage-container');
  container.innerHTML = '<h2>שלב ב: חבר את המילים</h2>';
  const hebrew = words.map(w => w.hebrew);
  const english = words.map(w => w.english);
  shuffle(hebrew);
  shuffle(english);

  container.innerHTML += '<div class="match-game">';
  container.innerHTML += '<div><h3>עברית</h3>' + hebrew.map(h => `<div class="word" onclick="selectWord(this, 'hebrew')">${h}</div>`).join('') + '</div>';
  container.innerHTML += '<div><h3>אנגלית</h3>' + english.map(e => `<div class="word" onclick="selectWord(this, 'english')">${e}</div>`).join('') + '</div>';
  container.innerHTML += '</div>';
}

function selectWord(el, lang) {
  if (lang === 'hebrew') selectedHeb = el.innerText;
  else selectedEng = el.innerText;

  if (selectedHeb && selectedEng) {
    const pair = words.find(w => w.hebrew === selectedHeb && w.english === selectedEng);
    if (pair) {
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
  currentIndex = 0;
  askNextWord();
}

function askNextWord() {
  if (currentIndex >= words.length) {
    document.getElementById('stage-container').innerHTML = '<h2>סיימת את שלב הדיבור!</h2>';
    return;
  }
  const container = document.getElementById('stage-container');
  container.innerHTML = `<h2>שלב ג: אמור את המילה באנגלית</h2><p>${words[currentIndex].hebrew}</p><button onclick="checkVoice()">אמור מילה</button>`;
}

function playWord(word) {
  const u = new SpeechSynthesisUtterance(word);
  u.lang = 'en-US';
  speechSynthesis.speak(u);
}

function checkVoice() {
  const feedback = document.getElementById('feedback');
  if (!('webkitSpeechRecognition' in window)) {
    feedback.textContent = 'הדפדפן לא תומך בזיהוי קול.';
    return;
  }
  feedback.textContent = 'מקשיב...';
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.onresult = (e) => {
    const spoken = e.results[0][0].transcript.toLowerCase();
    if (spoken === words[currentIndex].english.toLowerCase()) {
      feedback.textContent = 'נאמר נכון! 🎉';
      currentIndex++;
      setTimeout(askNextWord, 1000);
    } else {
      feedback.textContent = `אמרת: ${spoken} – נסה שוב`;
    }
  };
  recognition.start();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

loadWords();
