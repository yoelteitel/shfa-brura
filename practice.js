
let words = [];
let step = 1;
async function loadWords() { const res = await fetch('words.json'); words = await res.json(); }
function startPractice() { document.getElementById('practice-container').textContent = 'תרגול שלב ' + step; step++; }
loadWords();
