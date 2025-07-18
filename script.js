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
  {hebrew: "שעון", english: "Watch"},
  {hebrew: "אוכל", english: "Food"},
  {hebrew: "לחם", english: "Bread"},
  {hebrew: "חמאה", english: "Butter"},
  {hebrew: "חלב", english: "Milk"},
  {hebrew: "בשר", english: "Meat"},
  {hebrew: "דג", english: "Fish"},
  {hebrew: "ביצה", english: "Egg"},
  {hebrew: "פירות", english: "Fruits"},
  {hebrew: "ירקות", english: "Vegetables"},
  {hebrew: "תפוח", english: "Apple"},
  {hebrew: "בננה", english: "Banana"},
  {hebrew: "ענב", english: "Grape"},
  {hebrew: "אגס", english: "Pear"},
  {hebrew: "תפוז", english: "Orange"},
  {hebrew: "מלון", english: "Melon"},
  {hebrew: "עוגה", english: "Cake"},
  {hebrew: "סוכר", english: "Sugar"},
  {hebrew: "מלח", english: "Salt"},
  {hebrew: "פלפל", english: "Pepper"},
  {hebrew: "דבש", english: "Honey"},
  {hebrew: "שוקולד", english: "Chocolate"},
  {hebrew: "גלידה", english: "Ice Cream"},
  {hebrew: "עוגייה", english: "Cookie"},
  {hebrew: "קפה", english: "Coffee"},
  {hebrew: "תה", english: "Tea"},
  {hebrew: "חדר", english: "Room"},
  {hebrew: "סלון", english: "Living Room"},
  {hebrew: "מטבח", english: "Kitchen"},
  {hebrew: "חדר שינה", english: "Bedroom"},
  {hebrew: "שירותים", english: "Bathroom"},
  {hebrew: "מיטה", english: "Bed"},
  {hebrew: "כסא", english: "Chair"},
  {hebrew: "שולחן כתיבה", english: "Desk"},
  {hebrew: "ספה", english: "Sofa"},
  {hebrew: "מנורה", english: "Lamp"},
  {hebrew: "טלוויזיה", english: "Television"},
  {hebrew: "רדיו", english: "Radio"},
  {hebrew: "שעון קיר", english: "Wall Clock"},
  {hebrew: "מראה", english: "Mirror"},
  {hebrew: "שטיח", english: "Carpet"},
  {hebrew: "עיר", english: "City"},
  {hebrew: "כפר", english: "Village"},
  {hebrew: "רחוב", english: "Street"},
  {hebrew: "חנות", english: "Shop"},
  {hebrew: "שוק", english: "Market"},
  {hebrew: "ספריה", english: "Library"},
  {hebrew: "בית ספר", english: "School"},
  {hebrew: "אוניברסיטה", english: "University"},
  {hebrew: "חצר", english: "Yard"},
  {hebrew: "פארק", english: "Park"}
];


let currentIndex = 0;
let stage = 1;

const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const feedback = document.getElementById('feedback');
const checkBtn = document.getElementById('check-btn');

function showWord() {
  feedback.textContent = '';
  const currentWord = words[currentIndex];
  if (stage === 1) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english}`;
  } else if (stage === 2) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english[0]}____`;
  } else if (stage === 3) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english[0]}______`;
  } else if (stage === 4) {
    wordDisplay.textContent = currentWord.hebrew;
  }
  userInput.value = '';
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

checkBtn.addEventListener('click', checkWord);
showWord();
