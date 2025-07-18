const words = [
  {hebrew: "שלום", english: "Hello"},
  {hebrew: "כלב", english: "Dog"},
  {hebrew: "חתול", english: "Cat"},
  {hebrew: "מים", english: "Water"},
  {hebrew: "ספר", english: "Book"},
  {hebrew: "כיסא", english: "Chair"},
  {hebrew: "שולחן", english: "Table"},
  {hebrew: "דלת", english: "Door"},
  {hebrew: "חלון", english: "Window"},
  {hebrew: "בית", english: "House"},
  {hebrew: "עץ", english: "Tree"},
  {hebrew: "שמש", english: "Sun"},
  {hebrew: "ירח", english: "Moon"},
  {hebrew: "כוכב", english: "Star"},
  {hebrew: "ים", english: "Sea"},
  {hebrew: "נהר", english: "River"},
  {hebrew: "אדמה", english: "Earth"},
  {hebrew: "שמיים", english: "Sky"},
  {hebrew: "רוח", english: "Wind"},
  {hebrew: "גשם", english: "Rain"},
  {hebrew: "שלג", english: "Snow"},
  {hebrew: "חול", english: "Sand"},
  {hebrew: "רכב", english: "Car"},
  {hebrew: "אופניים", english: "Bicycle"},
  {hebrew: "מטוס", english: "Airplane"},
  {hebrew: "אוטובוס", english: "Bus"},
  {hebrew: "רכבת", english: "Train"},
  {hebrew: "מעלית", english: "Elevator"},
  {hebrew: "כביש", english: "Road"},
  {hebrew: "גשר", english: "Bridge"},
  {hebrew: "מחשב", english: "Computer"},
  {hebrew: "טלפון", english: "Phone"},
  {hebrew: "עכבר", english: "Mouse"},
  {hebrew: "מקלדת", english: "Keyboard"},
  {hebrew: "מסך", english: "Screen"},
  {hebrew: "עט", english: "Pen"},
  {hebrew: "עיפרון", english: "Pencil"},
  {hebrew: "נייר", english: "Paper"},
  {hebrew: "מחברת", english: "Notebook"},
  {hebrew: "תיק", english: "Bag"},
  {hebrew: "בגד", english: "Clothes"},
  {hebrew: "כובע", english: "Hat"},
  {hebrew: "נעל", english: "Shoe"},
  {hebrew: "גרב", english: "Sock"},
  {hebrew: "מכנסיים", english: "Pants"},
  {hebrew: "חולצה", english: "Shirt"},
  {hebrew: "שמלה", english: "Dress"},
  {hebrew: "מעיל", english: "Coat"},
  {hebrew: "צעיף", english: "Scarf"},
  {hebrew: "שעון", english: "Watch"}
];


let currentIndex = 0;
let stage = 1;
let score = 0;
let correctAnswers = 0;
let attempts = 0;
let scoreHistory = [];

const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const feedback = document.getElementById('feedback');
const checkBtn = document.getElementById('check-btn');
const scoreDisplay = document.getElementById('score-display');
const highScoreTable = document.getElementById('high-score-table');
const summaryDisplay = document.getElementById('summary-display');

function showWord() {
  feedback.textContent = '';
  const currentWord = words[currentIndex];
  if (stage === 1) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english}`;
    playWordAudio(currentWord.english);
  } else if (stage === 2) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english[0]}____`;
  } else if (stage === 3) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english[0]}______`;
  } else if (stage === 4) {
    wordDisplay.textContent = currentWord.hebrew;
  }
  userInput.value = '';
}

function playWordAudio(word) {
  const audio = new Audio('audio/' + word.toLowerCase().replace(/ /g, '_') + '.mp3');
  audio.play().catch(() => {});
}

function updateScore(points) {
  score += points;
  scoreDisplay.textContent = "ניקוד: " + score;
  updateSummary();
}

function addScoreHistory(word, points) {
  scoreHistory.push({ word: word, points: points });
  renderHighScoreTable();
}

function renderHighScoreTable() {
  highScoreTable.innerHTML = '';
  scoreHistory.slice(-10).forEach(entry => {
    const row = document.createElement('tr');
    const cellWord = document.createElement('td');
    const cellPoints = document.createElement('td');
    cellWord.textContent = entry.word;
    cellPoints.textContent = entry.points;
    row.appendChild(cellWord);
    row.appendChild(cellPoints);
    highScoreTable.appendChild(row);
  });
}

function updateSummary() {
  const totalAttempts = attempts;
  const successRate = totalAttempts > 0 ? Math.round((correctAnswers / totalAttempts) * 100) : 0;
  summaryDisplay.textContent = `למדת ${correctAnswers} מילים נכונות מתוך ${totalAttempts} ניסיונות (${successRate}% הצלחה)`;
}

function checkWord() {
  const currentWord = words[currentIndex];
  attempts++;
  if (userInput.value.trim().toLowerCase() === currentWord.english.toLowerCase()) {
    feedback.textContent = "נכון!";
    correctAnswers++;
    updateScore(10);
    addScoreHistory(currentWord.english, 10);
    stage++;
    if (stage > 4) {
      stage = 1;
      currentIndex++;
      if (currentIndex >= words.length) {
        wordDisplay.textContent = "סיימת את כל המילים!";
        userInput.style.display = 'none';
        checkBtn.style.display = 'none';
        return;
      }
    }
    showWord();
  } else {
    feedback.textContent = "נסה שוב!";
    addScoreHistory(currentWord.english, 0);
    updateSummary();
  }
}

function startSpeechRecognition() {
  if (!('webkitSpeechRecognition' in window)) {
    alert('דפדפן זה לא תומך בזיהוי דיבור.');
    return;
  }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.start();
  recognition.onresult = function(event) {
    const spoken = event.results[0][0].transcript.toLowerCase();
    const expected = words[currentIndex].english.toLowerCase();
    attempts++;
    if (spoken.includes(expected)) {
      alert('נכון!');
      correctAnswers++;
      updateScore(10);
      addScoreHistory(expected, 10);
    } else {
      alert('שמענו: ' + spoken + ' – נסה שוב');
      addScoreHistory(expected, 0);
    }
    updateSummary();
  };
  recognition.onerror = function() {
    alert('שגיאה בזיהוי קול, נסה שוב.');
  };
}

checkBtn.addEventListener('click', checkWord);
showWord();
