
let words = [];
let currentGroup = parseInt(localStorage.getItem('speechGroup')) || 1;
let groupWords = [];
let stage = 1;
let currentIndex = 0;

async function loadWords() {
  const res = await fetch('words.json');
  words = await res.json();
  groupWords = words.slice((currentGroup-1)*10, currentGroup*10);
  showStageA();
}

function nextStage() {
  if (stage === 1) {
    stage = 2;
    showStageB();
  } else if (stage === 2) {
    stage = 3;
    showStageC();
  }
}

function showStageA() {
  const container = document.getElementById('stage-container');
  container.innerHTML = '<h2>שלב א: למד את המילים</h2>';
  groupWords.forEach(w => {
    container.innerHTML += `<p>${w.hebrew} – ${w.english} <button onclick="playWord('${w.english}')">🔊</button></p>`;
  });
}

function showStageB() {
  const container = document.getElementById('stage-container');
  container.innerHTML = '<h2>שלב ב: חבר את המילים</h2>';
  const hebrew = groupWords.map(w => w.hebrew);
  const english = groupWords.map(w => w.english);
  shuffle(hebrew);
  shuffle(english);

  container.innerHTML += '<div class="match-game">';
  container.innerHTML += '<div><h3>עברית</h3>' + hebrew.map(h => `<div class="word" onclick="selectWord(this, 'hebrew')">${h}</div>`).join('') + '</div>';
  container.innerHTML += '<div><h3>אנגלית</h3>' + english.map(e => `<div class="word" onclick="selectWord(this, 'english')">${e}</div>`).join('') + '</div>';
  container.innerHTML += '</div>';
}

let selectedHeb = null;
let selectedEng = null;
function selectWord(el, lang) {
  if (lang === 'hebrew') selectedHeb = el.innerText;
  else selectedEng = el.innerText;

  if (selectedHeb && selectedEng) {
    const pair = groupWords.find(w => w.hebrew === selectedHeb && w.english === selectedEng);
    if (pair) {
      document.querySelectorAll('.word').forEach(word => {
        if (word.innerText === selectedHeb || word.innerText === selectedEng) {
          word.style.backgroundColor = '#90ee90';
          word.onclick = null;
        }
      });
      document.getElementById('feedback').innerText = 'נכון!';
    } else {
      document.getElementById('feedback').innerText = 'לא נכון, נסה שוב';
    }
    selectedHeb = null;
    selectedEng = null;
  }
}

function showStageC() {
  currentIndex = 0;
  askNextWord();
}

function askNextWord() {
  if (currentIndex >= groupWords.length) {
    document.getElementById('stage-container').innerHTML = '<h2>סיימת את שלב הדיבור!</h2>';
    return;
  }
  const container = document.getElementById('stage-container');
  container.innerHTML = `<h2>שלב ג: אמור את המילה באנגלית</h2><p>${groupWords[currentIndex].hebrew}</p><button onclick="checkVoice()">אמור מילה</button>`;
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
    if (spoken === groupWords[currentIndex].english.toLowerCase()) {
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
