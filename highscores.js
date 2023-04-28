var list = JSON.parse(localStorage.getItem("scores")) || [];

var scoreList = document.getElementById("score-list");

for (i = 0; i < list.length; i++) {
  var newLi = document.createElement("li");
  newLi.textContent = list[i].name + " - " + list[i].score;

  scoreList.append(newLi);
}
