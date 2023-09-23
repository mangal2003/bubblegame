var hitValue = 0;
var time = 60;
var scoreUpdate = 0;
var wrongHits = 0;

function updateScore() {
  scoreUpdate += 10;
  document.querySelector("#num3").textContent = scoreUpdate;
}
function decreaseScore() {
  scoreUpdate -= 2;
  document.querySelector("#num3").textContent = scoreUpdate;
}

function timer() {
  var kabTak = setInterval(() => {
    time--;
    if (time >= 0) {
      document.querySelector("#num2").textContent = time;
    } else {
      clearInterval();
      document.querySelector(
        "#playgroundBtm"
      ).innerHTML = `<h1 id="center"> GAME OVER <br> Your Score is : ${scoreUpdate} <br> Wrong Hits : ${wrongHits} <br> Refresh to Restart</h1> `;
      document.querySelector("#playgroundBtm").style.backgroundColor =
        "rgb(203, 93, 93)";
      document.querySelector("#playgroundBtm").style.display = "block";
    }
  }, 1000);
}

function gethit() {
  hitValue = Math.floor(Math.random() * 10);
  document.querySelector("#num1").innerHTML = hitValue;
}

function generateBubbles() {
  let bubbles = "";
  for (let i = 0; i < 160; i++) {
    bubbles += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#playgroundBtm").innerHTML = bubbles;
}

function check() {
  document
    .querySelector("#playgroundBtm")
    .addEventListener("click", function(detail) {
      let clickedBubble = Number(detail.target.textContent);
      if (clickedBubble === hitValue) {
        generateBubbles();
        updateScore();
        gethit();
        document.querySelector("#playgroundBtm").style.backgroundColor =
          "lightgreen";
        generateBubbles();
        setTimeout(() => {
          document.querySelector("#playgroundBtm").style.backgroundColor =
            "transparent";
        }, 100);
      } else {
        document.querySelector("#playgroundBtm").style.backgroundColor = "red";
        generateBubbles();
        decreaseScore();
        wrongHits++;
        setTimeout(() => {
          document.querySelector("#playgroundBtm").style.backgroundColor =
            "transparent";
        }, 100);
      }
    });
}

function start() {
  gethit();
  generateBubbles();
  timer();
  check();
  document.querySelector("#start").style.display = "none";
  document.querySelector("#start").style.zIndex = "-2";
}

function rules() {
  document.querySelector("#start").style.display = "block";
  document.querySelector("#start").style.backgroundColor = "white";
  document.querySelector("#start").style.padding = "40px";
  document.querySelector("#start").style.lineHeight = "40px";
  document.querySelector(
    "#start"
  ).innerHTML = `<button id="back" onclick="back()">BACK</button><br> <h1>RULES </h1> <br><h2>1. You get random numbers on bubbles from 0 to 9.</h2> <h2>2. Hit the Bubble having the same number as the HIT shows in the top bar.</h2><h2>3. On hitting the correct bubble your score is increased by '10' points.</h2><h2>4. On wrong hit the bubbles and the HIT will change and score is decreased by '2' points.</h2>`;
}

function back() {
  document.querySelector("#start").innerHTML = `<div id="btns">
  <button id="startgame" onclick="start()">START</button>
  <button id="rules" onclick="rules()">RULES</button>
  <button id="themes" onclick="themes()">THEMES</button>
  </div>`;
  document.querySelector("#start").style.backgroundColor = "#222";
}

function themes() {
  document.querySelector("#start").innerHTML = `<div id="changeTheme">
        <button id="back" onclick="back()">BACK</button><br><br><br>
        <h1>Themes</h1> <br>
        <button class="alltheme" id="green" onclick="greenland()"> GREENLAND</button>
        <button class="alltheme" id="indian" onclick="indian()"> INDIA</button>
        <button class="alltheme" id="volcano" onclick="volcano()"> VOLCANO</button>
        <button class="alltheme" id="hacker" onclick="hacker()"> HACKER</button>
    </div>`;
  document.querySelector("#start").style.backgroundColor = "#222";
}

function greenland() {
  document.querySelector("#main").style.color = "rgb(228, 98, 81)";
  document.querySelector("#main").style.backgroundColor = "rgb(153, 199, 153)";
  document.querySelector("#playgroundTop").style.backgroundColor =
    "rgb(60, 113, 60)";
}

function indian() {
  document.querySelector("#main").style.color = "blue";
  document.querySelector("#main").style.background =
    "linear-gradient(rgb(255, 166, 0), #fff, rgb(11, 192, 11))";
  document.querySelector("#playgroundTop").style.background =
    "linear-gradient(rgba(255, 166, 0, 0.84), #ffffff, rgba(11, 192, 11, 0.76))";
  document.querySelector(".bubble").style.color = "blue";
}

function volcano() {
  document.querySelector("#main").style.color = "rgb(144, 55, 55)";
  document.querySelector("#main").style.backgroundColor = "rgb(144, 55, 55)";
  document.querySelector("#main").style.background =
    "linear-gradient(to right bottom, yellow, orange, red)";
  document.querySelector("#playgroundTop").style.background =
    "linear-gradient(to right bottom, yellow, orange, red)";
}

function hacker() {
  document.querySelector("#main").style.backgroundColor = "rgb(0, 0, 0)";
  document.querySelector("#main").style.color = "rgb(0, 255, 34)";
  document.querySelector("#playgroundTop").style.backgroundColor =
    "rgb(38, 40, 38)";
  document.querySelector("#playgroundTop").style.color = "rgb(0, 255, 0)";
  document.querySelector(".bubble").style.color = "rgb(0, 255, 0)";
}
