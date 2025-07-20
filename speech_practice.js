
let words = [];
let practiceList = [];
let stage = 1;
let currentIndex = 0;
let selectedHeb = null;
let selectedEng = null;

async function loadWords() {
  const res = await fetch('words.json');
  words = await res.json();
  const count = parseInt(localStorage.getItem('practiceCount')) || 4;
  practiceList = words.slice(0, count);
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
  let table = '<table class="word-table"><tr><th>עברית</th><th>אנגלית</th><th>שמיעה</th></tr>';
  practiceList.forEach(w => {
    table += `<tr><td>${w.hebrew}</td><td>${w.english}</td><td><button onclick="playWord('${w.english}')">🔊</button></td></tr>`;
  });
  table += '</table>';
  container.innerHTML += table;
}

function showStageB() {
  const container = document.getElementById('stage-container');
  container.innerHTML = '<h2>שלב ב: חבר את המילים</h2>';
  const hebrew = [...practiceList.map(w => w.hebrew)];
  const english = [...practiceList.map(w => w.english)];
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
    const pair = practiceList.find(w => w.hebrew === selectedHeb && w.english === selectedEng);
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
  if (currentIndex >= practiceList.length) {
    document.getElementById('stage-container').innerHTML = '<h2>סיימת את שלב הדיבור!</h2>';
    return;
  }
  const container = document.getElementById('stage-container');
  container.innerHTML = `<h2>שלב ג: אמור את המילה באנגלית</h2><p>${practiceList[currentIndex].hebrew}</p><button onclick="checkVoice()">אמור מילה</button>`;
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
    if (spoken === practiceList[currentIndex].english.toLowerCase()) {
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
