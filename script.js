// script.js
// ローカルストレージからデータを読み込むか、初期データを設定する
const wordsData = JSON.parse(localStorage.getItem("wordsData")) || [
  { word: "badly", meaning: "悪く", incorrect: true },
  { word: "abroad", meaning: "海外へ", incorrect: true },
  { word: "generally", meaning: "一般的に", incorrect: true },
  { word: "afterward", meaning: "後で", incorrect: true },
  { word: "partly", meaning: "一部分は", incorrect: true },
  { word: "aside", meaning: "脇へ", incorrect: true },
  { word: "certainly", meaning: "確かに", incorrect: true },
  { word: "upstairs", meaning: "上の階へ", incorrect: true },
  { word: "exactly", meaning: "正確に", incorrect: true },
  { word: "former", meaning: "（時間的に）前の", incorrect: true },
  { word: "personal", meaning: "個人の", incorrect: true },
  { word: "be likely to do", meaning: "～しそうだ", incorrect: true },
  { word: "plain", meaning: "分かりやすい", incorrect: true },
  { word: "final", meaning: "最後の", incorrect: true },
  { word: "false", meaning: "事実と異なる", incorrect: true },
  { word: "private", meaning: "個人的な", incorrect: true },
  { word: "bright", meaning: "輝く", incorrect: true },
  { word: "mild", meaning: "（効力などが）ゆるやかな", incorrect: true },
  {
    word: "brilliant",
    meaning: "（才能・考えなどが）すばらしい",
    incorrect: true,
  },
  { word: "smooth", meaning: "（表面が）なめらかな", incorrect: true },
  { word: "least", meaning: "最も少ない", incorrect: true },
  { word: "serious", meaning: "真剣な", incorrect: true },
  { word: "common", meaning: "普通の", incorrect: true },
  { word: "proper", meaning: "適切な", incorrect: true },
  { word: "firm", meaning: "（物が）硬い", incorrect: true },
  { word: "public", meaning: "公の", incorrect: true },
  { word: "broad", meaning: "（幅が）広い", incorrect: true },
  { word: "social", meaning: "社会の", incorrect: true },
  { word: "one's own", meaning: "自分自身の", incorrect: true },
  { word: "modern", meaning: "現代の", incorrect: true },
  { word: "total", meaning: "総計の", incorrect: true },
  { word: "brave", meaning: "勇敢な", incorrect: true },
  { word: "double", meaning: "2倍の", incorrect: true },
  { word: "lovely", meaning: "すばらしい", incorrect: true },
  { word: "crowded", meaning: "混雑した", incorrect: true },
  { word: "central", meaning: "中心の", incorrect: true },
  { word: "single", meaning: "たった1つの", incorrect: true },
  { word: "human", meaning: "人の", incorrect: true },
  { word: "purpose", meaning: "目的", incorrect: true },
  { word: "nervous", meaning: "不安な", incorrect: true },
  { word: "audience", meaning: "聴衆", incorrect: true },
  { word: "reasonable", meaning: "合理的な", incorrect: true },
  { word: "stair", meaning: "階段(≠star)", incorrect: true },
  { word: "track", meaning: "小道", incorrect: true },
  { word: "crowd", meaning: "群衆", incorrect: true },
  { word: "profit", meaning: "利益", incorrect: true },
  { word: "couple", meaning: "2人連れ", incorrect: true },
  { word: "row", meaning: "（横に並んだ）列", incorrect: true },
  { word: "message", meaning: "伝言", incorrect: true },
  { word: "produce", meaning: "～を生産する", incorrect: true },
  { word: "approach", meaning: "～に近づく", incorrect: true },
  { word: "luck", meaning: "運", incorrect: true },
  { word: "cost", meaning: "費用", incorrect: true },
  { word: "slide", meaning: "（表面上を）滑る", incorrect: true },
  { word: "spread", meaning: "広がる", incorrect: true },
  { word: "disappear", meaning: "（視界から）消える", incorrect: true },
  { word: "mention", meaning: "～に言及する", incorrect: true },
  { word: "propose", meaning: "～を提案する", incorrect: true },
  { word: "advice", meaning: "助言", incorrect: true },
  { word: "control", meaning: "～を管理する", incorrect: true },
  { word: "examine", meaning: "～を検査する", incorrect: true },
  { word: "contain", meaning: "～を含む", incorrect: true },
  { word: "cause", meaning: "～を引き起こす", incorrect: true },
  { word: "rush", meaning: "急いで行く", incorrect: true },
  { word: "serve", meaning: "（飲食物）を出す", incorrect: true },
  { word: "exist", meaning: "存在する", incorrect: true },
  { word: "burn", meaning: "燃える", incorrect: true },
  { word: "careful", meaning: "注意深い", incorrect: true },
  { word: "youth", meaning: "青春時代", incorrect: true },
  { word: "trick", meaning: "芸", incorrect: true },
  { word: "act", meaning: "行動する", incorrect: true },
  { word: "take", meaning: "～を連れていく", incorrect: true },
  { word: "call", meaning: "～を(･･･と)呼ぶ", incorrect: true },
  { word: "sound", meaning: "(～に)聞こえる", incorrect: true },
  { word: "lose", meaning: "～を失う", incorrect: true },
  { word: "chance", meaning: "見込み", incorrect: true },
  { word: "hold", meaning: "～を握る", incorrect: true },
  { word: "simple", meaning: "簡単な", incorrect: true },
  { word: "lift", meaning: "～を持ち上げる", incorrect: true },
  { word: "fix", meaning: "～を修理する", incorrect: true },
  { word: "wonder", meaning: "～かと疑問に思う", incorrect: true },
  { word: "immediately", meaning: "すぐに", incorrect: true },
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
