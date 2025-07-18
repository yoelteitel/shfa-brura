const words = [{"hebrew": "תפוח", "english": "apple"}, {"hebrew": "בננה", "english": "banana"}, {"hebrew": "מיטה", "english": "bed"}, {"hebrew": "מיטה זוגית", "english": "bedroom"}, {"hebrew": "אופניים", "english": "bicycle"}, {"hebrew": "סירה", "english": "boat"}, {"hebrew": "בקבוק", "english": "bottle"}, {"hebrew": "קופסה", "english": "box"}, {"hebrew": "גשר", "english": "bridge"}, {"hebrew": "עוגת שוקולד", "english": "brownie"}, {"hebrew": "עוגה", "english": "cake"}, {"hebrew": "מצלמה", "english": "camera"}, {"hebrew": "מכונית", "english": "car"}, {"hebrew": "כיסא", "english": "chair"}, {"hebrew": "שוקולד", "english": "chocolate"}, {"hebrew": "עיר", "english": "city"}, {"hebrew": "שעון", "english": "clock"}, {"hebrew": "בגד", "english": "clothes"}, {"hebrew": "ענן", "english": "cloud"}, {"hebrew": "מחשב", "english": "computer"}, {"hebrew": "עוגיות", "english": "cookies"}, {"hebrew": "רופא", "english": "doctor"}, {"hebrew": "דלת", "english": "door"}, {"hebrew": "שמלה", "english": "dress"}, {"hebrew": "ברווז", "english": "duck"}, {"hebrew": "אוזן", "english": "ear"}, {"hebrew": "ביצה", "english": "egg"}, {"hebrew": "דג", "english": "fish"}, {"hebrew": "פרח", "english": "flower"}, {"hebrew": "מזלג", "english": "fork"}, {"hebrew": "מקרר", "english": "fridge"}, {"hebrew": "פרי", "english": "fruit"}, {"hebrew": "גינה", "english": "garden"}, {"hebrew": "ענבים", "english": "grapes"}, {"hebrew": "דשא", "english": "grass"}, {"hebrew": "שיער", "english": "hair"}, {"hebrew": "יד", "english": "hand"}, {"hebrew": "כובע", "english": "hat"}, {"hebrew": "סוס", "english": "horse"}, {"hebrew": "קרח", "english": "ice"}, {"hebrew": "מיץ", "english": "juice"}, {"hebrew": "מפתח", "english": "key"}, {"hebrew": "מטבח", "english": "kitchen"}, {"hebrew": "רגל", "english": "leg"}, {"hebrew": "לימון", "english": "lemon"}, {"hebrew": "אור", "english": "light"}, {"hebrew": "שפתיים", "english": "lips"}, {"hebrew": "מנעול", "english": "lock"}, {"hebrew": "מפה", "english": "map"}, {"hebrew": "חלב", "english": "milk"}, {"hebrew": "מראה", "english": "mirror"}, {"hebrew": "עכבר", "english": "mouse"}, {"hebrew": "מוזיקה", "english": "music"}, {"hebrew": "עיתון", "english": "newspaper"}, {"hebrew": "מחברת", "english": "notebook"}, {"hebrew": "אחות", "english": "nurse"}, {"hebrew": "תפוז", "english": "orange"}, {"hebrew": "תנור", "english": "oven"}, {"hebrew": "מכנסיים", "english": "pants"}, {"hebrew": "עט", "english": "pen"}, {"hebrew": "עיפרון", "english": "pencil"}, {"hebrew": "פלפל", "english": "pepper"}, {"hebrew": "טלפון", "english": "phone"}, {"hebrew": "פסנתר", "english": "piano"}, {"hebrew": "תמונה", "english": "picture"}, {"hebrew": "מטוס", "english": "plane"}, {"hebrew": "צמח", "english": "plant"}, {"hebrew": "מלכה", "english": "queen"}, {"hebrew": "ארנב", "english": "rabbit"}, {"hebrew": "חדר", "english": "room"}, {"hebrew": "סלט", "english": "salad"}, {"hebrew": "מלח", "english": "salt"}, {"hebrew": "חול", "english": "sand"}, {"hebrew": "חולצה", "english": "shirt"}, {"hebrew": "נעליים", "english": "shoes"}, {"hebrew": "חנות", "english": "shop"}, {"hebrew": "שלט", "english": "sign"}, {"hebrew": "שלג", "english": "snow"}, {"hebrew": "ספה", "english": "sofa"}, {"hebrew": "כף", "english": "spoon"}, {"hebrew": "כוכב", "english": "star"}, {"hebrew": "סוכר", "english": "sugar"}, {"hebrew": "שמש", "english": "sun"}, {"hebrew": "חולצה ארוכה", "english": "sweater"}, {"hebrew": "שולחן", "english": "table"}, {"hebrew": "טלוויזיה", "english": "television"}, {"hebrew": "כרטיס", "english": "ticket"}, {"hebrew": "שן", "english": "tooth"}, {"hebrew": "מגבת", "english": "towel"}, {"hebrew": "רכבת", "english": "train"}, {"hebrew": "עץ", "english": "tree"}, {"hebrew": "מטריה", "english": "umbrella"}, {"hebrew": "כינור", "english": "violin"}, {"hebrew": "קיר", "english": "wall"}, {"hebrew": "מים", "english": "water"}, {"hebrew": "חלון", "english": "window"}, {"hebrew": "כף עץ", "english": "wooden spoon"}, {"hebrew": "חצר", "english": "yard"}, {"hebrew": "חוט", "english": "yarn"}, {"hebrew": "חיות", "english": "zoo"}];
let currentIndex = 0;
let stage = 1;
let reviewMode = false;  // מצב חזרה
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

    // בדיקה אם יש חזרה כל 10 מילים
    if (!reviewMode && currentIndex % 10 === 0) {
      reviewMode = true;
      currentIndex = currentIndex - 10;  // חוזרים לתחילת ה-10 מילים האחרונות
      alert("זמן חזרה! חזור על 10 המילים האחרונות.");
    } else if (reviewMode && (currentIndex % 10 === 0)) {
      // סיום חזרה
      reviewMode = false;
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

showWord();
