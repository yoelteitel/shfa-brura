const words = [{"hebrew": "ספר", "english": "book"}, {"hebrew": "ערב", "english": "evening"}, {"hebrew": "אוכל", "english": "food"}, {"hebrew": "שלום", "english": "hello"}, {"hebrew": "אור", "english": "light"}, {"hebrew": "בוקר", "english": "morning"}, {"hebrew": "לא", "english": "no"}, {"hebrew": "תודה", "english": "thanks"}, {"hebrew": "מים", "english": "water"}, {"hebrew": "כן", "english": "yes"}];
let currentIndex = 0;
let stage = 1;
const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const feedback = document.getElementById('feedback');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');

function updateProgress() {
  const percent = Math.floor((currentIndex / words.length) * 100);
  progressBar.style.width = percent + "%";
  progressText.textContent = `${currentIndex} מתוך ${words.length} מילים (${percent}%)`;
}

function showWord() {
  feedback.textContent = '';
  const currentWord = words[currentIndex];
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
  const expected = currentWord.english.toLowerCase();
  const input = userInput.value.trim().toLowerCase();

  // שלב א
  if (stage === 1) {
    if (input === expected) {
      feedback.textContent = "נכון! 😊";
      setTimeout(nextStage, 800);
    } else if (input && input !== expected.slice(0, input.length)) {
      feedback.textContent = "נסה שוב!";
    } else {
      feedback.textContent = "";
    }
  } 
  // שלב ב
  else if (stage === 2) {
    const missing = expected.slice(-2);
    if (input === missing) {
      feedback.textContent = "נכון! 😊";
      setTimeout(nextStage, 800);
    } else if (input && input !== missing.slice(0, input.length)) {
      feedback.textContent = "נסה שוב!";
    } else {
      feedback.textContent = "";
    }
  } 
  // שלב ג
  else if (stage === 3) {
    const missing = expected.slice(1);
    if (input === missing) {
      feedback.textContent = "נכון! 😊";
      setTimeout(nextStage, 800);
    } else if (input && input !== missing.slice(0, input.length)) {
      feedback.textContent = "נסה שוב!";
    } else {
      feedback.textContent = "";
    }
  } 
  // שלב ד
  else if (stage === 4) {
    if (input === expected) {
      feedback.textContent = "נכון! 😊";
      setTimeout(nextStage, 800);
    } else if (input && input !== expected.slice(0, input.length)) {
      feedback.textContent = "נסה שוב!";
    } else {
      feedback.textContent = "";
    }
  }
}

function nextStage() {
  stage++;
  if (stage > 4) {
    stage = 1;
    currentIndex++;
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

showWord();
