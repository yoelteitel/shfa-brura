
function startLearning() {
  const area = document.getElementById('learning-area');
  area.innerHTML = "";
  let i = 0;
  function showNextWord() {
    if (i >= words.length) {
      area.innerHTML += "<p>סיימת את 100 המילים!</p>";
      return;
    }
    area.innerHTML = "<h3>מילה #" + (i + 1) + ":</h3><p>" + words[i] + "</p>";
    i++;
  }
  showNextWord();
  const nextButton = document.createElement('button');
  nextButton.innerText = "הבא";
  nextButton.onclick = showNextWord;
  area.appendChild(nextButton);
}
