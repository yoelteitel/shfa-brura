
let words = [];
let currentIndex = 0;
let stage = 1;

function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

async function loadWords() {
  const response = await fetch('words.json');
  words = await response.json();
  const startWord = parseInt(getParam('word'));
  currentIndex = isNaN(startWord) ? 0 : startWord;
  showWord();
}

const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const feedback = document.getElementById('feedback');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');

function updateProgress() {
  const percent = Math.floor((currentIndex / words.length) * 100);
  progressBar.style.width = percent + "%";
  progressText.textContent = `מילה ${currentIndex + 1} מתוך ${words.length} (${percent}%)`;
}

function showWord() {
  feedback.textContent = '';
  const currentWord = words[currentIndex];
  if (!currentWord) return;
  if (stage === 1) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english}`;
  } else if (stage === 2) {
    const base = currentWord.english;
    const partial = base.slice(0, -2) + "__";
    wordDisplay.textContent = `${currentWord.hebrew} – ${partial}`;
  } else if (stage === 3) {
    const base = currentWord.english;
    const partial = base.slice(0, 1) + "_".repeat(base.length - 1);
    wordDisplay.textContent = `${currentWord.hebrew} – ${partial}`;
  } else if (stage === 4) {
    wordDisplay.textContent = currentWord.hebrew;
  }
  userInput.value = '';
  updateProgress();
}

function checkInput() {
  const currentWord = words[currentIndex];
  if (!currentWord) return;
  const expected = currentWord.english.toLowerCase();
  const input = userInput.value.trim().toLowerCase();

  if (input === expected) {
    feedback.textContent = "נכון! 😊";
    setTimeout(nextStage, 800);
  } else if (input && input !== expected.slice(0, input.length)) {
    feedback.textContent = "נסה שוב!";
  } else {
    feedback.textContent = "";
  }
}

function nextStage() {
  stage++;
  if (stage > 4) {
    stage = 1;
    currentIndex++;
    if (currentIndex % 10 === 0 && currentIndex < words.length) {
      window.location.href = 'review.html?start=' + (currentIndex - 10);
      return;
    }
    if (currentIndex === 100) {
      window.location.href = 'review_20.html?start=80';
      return;
    }
    if (currentIndex >= words.length) {
      wordDisplay.textContent = "סיימת את כל המילים!";
      userInput.style.display = 'none';
      return;
    }
  }
  showWord();
}

function prevStage() {
  stage--;
  if (stage < 1) stage = 1;
  showWord();
}

function skipWord() {
  currentIndex++;
  if (currentIndex >= words.length) {
    wordDisplay.textContent = "סיימת את כל המילים!";
    userInput.style.display = 'none';
    return;
  }
  stage = 1;
  showWord();
}

userInput.addEventListener('input', checkInput);
userInput.addEventListener('copy', (e) => e.preventDefault());
userInput.addEventListener('paste', (e) => e.preventDefault());

loadWords();
