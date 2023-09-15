var timer = 60;
var score = 0;
var hitrn = 0;

function incScore() {
  score += 10;
  document.querySelector('#scoreval').textContent = score;
}

function newHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector('#hitval').textContent = hitrn;
}

function makebubble() {
  var clutter = '';
  for (var i = 1; i < 160; i++) {
    var ran = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${ran}</div>`;
  }
  document.querySelector('#pbtn').innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector('#setTime').textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector('#pbtn').innerHTML = `<h2>GAME OVER</h2>`;
    }
  }, 1000);
}

document.querySelector('#pbtn').addEventListener('click', function (details) {
  var clickednum = Number(details.target.textContent);
  if (clickednum === hitrn) {
    incScore();
    makebubble();
    newHit();
  }
});
runTimer();
makebubble();
newHit();
