// script.js
// ローカルストレージからデータを読み込むか、初期データを設定する
const wordsData = JSON.parse(localStorage.getItem("wordsData")) || [
  { word: "apple", meaning: "りんご", incorrect: false },
  { word: "banana", meaning: "バナナ", incorrect: true },
];
localStorage.setItem("wordsData", JSON.stringify(wordsData));

function loadWords() {
  const wordListElement = document.getElementById("wordList");
  wordListElement.innerHTML = "";
  const words = JSON.parse(localStorage.getItem("wordsData"));
  words.forEach((word, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${word.word}</td>
      <td>${word.meaning}</td>
      <td><input type="checkbox" ${
        word.incorrect ? "checked" : ""
      } onchange="toggleIncorrect(${index})"></td>
    `;
    wordListElement.appendChild(row);
  });
}

function toggleIncorrect(index) {
  const words = JSON.parse(localStorage.getItem("wordsData"));
  words[index].incorrect = !words[index].incorrect;
  localStorage.setItem("wordsData", JSON.stringify(words));
  loadWords();
}

window.onload = loadWords;
