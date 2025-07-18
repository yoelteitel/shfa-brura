const words = [
  {hebrew: "שלום", english: "hello"},
  {hebrew: "כלב", english: "dog"},
  {hebrew: "מים", english: "water"},
  {hebrew: "תודה", english: "thank you"},
  {hebrew: "כן", english: "yes"},
  {hebrew: "לא", english: "no"},
  {hebrew: "אוכל", english: "food"},
  {hebrew: "חבר", english: "friend"},
  {hebrew: "בית", english: "house"},
  {hebrew: "חתול", english: "cat"},
  {hebrew: "ספר", english: "book"},
  {hebrew: "דלת", english: "door"},
  {hebrew: "אור", english: "light"},
  {hebrew: "חושך", english: "dark"},
  {hebrew: "שמיים", english: "sky"},
  {hebrew: "עץ", english: "tree"},
  {hebrew: "אדמה", english: "earth"},
  {hebrew: "שמש", english: "sun"},
  {hebrew: "ירח", english: "moon"},
  {hebrew: "כוכב", english: "star"},
  {hebrew: "ים", english: "sea"},
  {hebrew: "נהר", english: "river"},
  {hebrew: "הר", english: "mountain"},
  {hebrew: "אבן", english: "stone"},
  {hebrew: "זהב", english: "gold"},
  {hebrew: "כסף", english: "silver"},
  {hebrew: "אש", english: "fire"},
  {hebrew: "רוח", english: "wind"},
  {hebrew: "גשם", english: "rain"},
  {hebrew: "שלג", english: "snow"},
  {hebrew: "אוויר", english: "air"},
  {hebrew: "בריאות", english: "health"},
  {hebrew: "משפחה", english: "family"},
  {hebrew: "ילד", english: "child"},
  {hebrew: "ילדה", english: "girl"},
  {hebrew: "איש", english: "man"},
  {hebrew: "אישה", english: "woman"},
  {hebrew: "לב", english: "heart"},
  {hebrew: "יד", english: "hand"},
  {hebrew: "רגל", english: "leg"},
  {hebrew: "ראש", english: "head"},
  {hebrew: "עין", english: "eye"},
  {hebrew: "פה", english: "mouth"},
  {hebrew: "שן", english: "tooth"},
  {hebrew: "אף", english: "nose"},
  {hebrew: "אוזן", english: "ear"},
  {hebrew: "צבע", english: "color"},
  {hebrew: "אדום", english: "red"},
  {hebrew: "כחול", english: "blue"},
  {hebrew: "ירוק", english: "green"},
  {hebrew: "צהוב", english: "yellow"},
  {hebrew: "לבן", english: "white"},
  {hebrew: "שחור", english: "black"},
  {hebrew: "אפור", english: "gray"},
  {hebrew: "חום", english: "brown"},
  {hebrew: "ורוד", english: "pink"},
  {hebrew: "סגול", english: "purple"},
  {hebrew: "כתום", english: "orange"},
  {hebrew: "בוקר", english: "morning"},
  {hebrew: "צהריים", english: "noon"},
  {hebrew: "ערב", english: "evening"},
  {hebrew: "לילה", english: "night"},
  {hebrew: "יום", english: "day"},
  {hebrew: "שבוע", english: "week"},
  {hebrew: "חודש", english: "month"},
  {hebrew: "שנה", english: "year"},
  {hebrew: "אתמול", english: "yesterday"},
  {hebrew: "היום", english: "today"},
  {hebrew: "מחר", english: "tomorrow"},
  {hebrew: "שעון", english: "clock"},
  {hebrew: "דקה", english: "minute"},
  {hebrew: "שעה", english: "hour"},
  {hebrew: "זמן", english: "time"},
  {hebrew: "חיים", english: "life"},
  {hebrew: "מוות", english: "death"},
  {hebrew: "אהבה", english: "love"},
  {hebrew: "שנאה", english: "hate"},
  {hebrew: "אמת", english: "truth"},
  {hebrew: "שקר", english: "lie"},
  {hebrew: "חכמה", english: "wisdom"},
  {hebrew: "טוב", english: "good"},
  {hebrew: "רע", english: "bad"},
  {hebrew: "חם", english: "hot"},
  {hebrew: "קר", english: "cold"},
  {hebrew: "מהיר", english: "fast"},
  {hebrew: "איטי", english: "slow"},
  {hebrew: "גדול", english: "big"},
  {hebrew: "קטן", english: "small"},
  {hebrew: "יפה", english: "beautiful"},
  {hebrew: "מכוער", english: "ugly"},
  {hebrew: "חזק", english: "strong"},
  {hebrew: "חלש", english: "weak"},
  {hebrew: "חדש", english: "new"},
  {hebrew: "ישן", english: "old"},
  {hebrew: "עשיר", english: "rich"},
  {hebrew: "עני", english: "poor"},
  {hebrew: "קל", english: "easy"},
  {hebrew: "קשה", english: "hard"},
  {hebrew: "קרוב", english: "near"},
  {hebrew: "רחוק", english: "far"}
];


let currentIndex = 0;
let stage = 1;

const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const feedback = document.getElementById('feedback');
const checkBtn = document.getElementById('check-btn');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');

function updateProgress() {
  const percent = Math.floor((currentIndex / words.length) * 100);
  progressBar.style.width = percent + "%";
  progressText.textContent = `${currentIndex} מתוך ${words.length} מילים (${percent}%)`;
}

function playWordAudio(word) {
  const filename = word.toLowerCase().replace(/ /g, '_') + '.mp3';
  const audio = new Audio('audio/' + filename);
  audio.play().catch(() => {});
}

function showWord() {
  feedback.textContent = '';
  const currentWord = words[currentIndex];
  if (stage === 1) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english}`;
    // הפעל אוטומטית אודיו אם קיים
    if (currentIndex < 10) {
      playWordAudio(currentWord.english);
    }
  } else if (stage === 2) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english[0]}____`;
  } else if (stage === 3) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english[0]}______`;
  } else if (stage === 4) {
    wordDisplay.textContent = currentWord.hebrew;
  }
  userInput.value = '';
  updateProgress();
}

function checkWord() {
  const currentWord = words[currentIndex];
  if (userInput.value.trim().toLowerCase() === currentWord.english.toLowerCase()) {
    feedback.textContent = "נכון!";
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
  }
}

function skipWord() {
  currentIndex++;
  if (currentIndex >= words.length) {
    wordDisplay.textContent = "סיימת את כל המילים!";
    userInput.style.display = 'none';
    checkBtn.style.display = 'none';
    return;
  }
  stage = 1;
  showWord();
}

// בניית רשימת המילים בסיידבר עם כפתור האזנה
const wordList = document.getElementById('word-list');
words.forEach((w, i) => {
  const li = document.createElement('li');
  li.innerHTML = `${i + 1}. ${w.hebrew} – ${w.english} <button onclick="playWordAudio('${w.english}')">🔊</button>`;
  li.style.cursor = 'pointer';
  li.addEventListener('click', () => { currentIndex = i; stage = 1; showWord(); });
  wordList.appendChild(li);
});

checkBtn.addEventListener('click', checkWord);
showWord();

// קפיצה למילה לפי פרמטר URL
const urlParams = new URLSearchParams(window.location.search);
const startWord = urlParams.get('word');
if (startWord !== null) {
  const index = parseInt(startWord);
  if (!isNaN(index) && index >= 0 && index < words.length) {
    currentIndex = index;
  }
}
showWord();
