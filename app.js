
const words = ["apple", "book", "cat", "dog", "egg", "fish", "grape", "hat", "ice", "jam", "apple", "book", "cat", "dog", "egg", "fish", "grape", "hat", "ice", "jam", "apple", "book", "cat", "dog", "egg", "fish", "grape", "hat", "ice", "jam", "apple", "book", "cat", "dog", "egg", "fish", "grape", "hat", "ice", "jam", "apple", "book", "cat", "dog", "egg", "fish", "grape", "hat", "ice", "jam", "apple", "book", "cat", "dog", "egg", "fish", "grape", "hat", "ice", "jam", "apple", "book", "cat", "dog", "egg", "fish", "grape", "hat", "ice", "jam", "apple", "book", "cat", "dog", "egg", "fish", "grape", "hat", "ice", "jam", "apple", "book", "cat", "dog", "egg", "fish", "grape", "hat", "ice", "jam", "apple", "book", "cat", "dog", "egg", "fish", "grape", "hat", "ice", "jam"];
let currentStage = 1;

function showStage(stage) {
  currentStage = stage;
  const area = document.getElementById("wordArea");
  const msg = document.getElementById("message");
  area.innerHTML = "";
  msg.innerHTML = "";

  words.forEach((word, index) => {
    let display = "";
    if (stage === 1) {
      display = word;
    } else if (stage === 2) {
      display = word.slice(0, -1) + "_";
    } else if (stage === 3) {
      display = word[0] + "_".repeat(word.length - 1);
    } else {
      display = "_".repeat(word.length);
    }

    const div = document.createElement("div");
    div.textContent = (index + 1) + ". " + display;
    area.appendChild(div);
  });

  if (stage === 3 || stage === 4) {
    if (words.length >= 100) {
      msg.innerHTML = "🔁 הגיע הזמן לחזרה או ניסיון!";
    }
  }
}
