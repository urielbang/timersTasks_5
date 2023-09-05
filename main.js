//1
// function printMyName() {
//   document.body.innerHTML += "uriel Bengaev";
// }

// setTimeout(printMyName, 7000);
//2
// function printHello() {
//   document.body.innerHTML = "hello!";
// }

// setTimeout(printHello, 5000);
// document.body.innerHTML = "bey!";

//3

// function printTime() {
//   var date = new Date();
//   document.body.innerHTML += `the time is:${date.getHours()}:${date.getMinutes()}`;
// }
// setTimeout(printTime, 90000);

//4
// function printILove() {
//   document.body.innerHTML += `i Lover timers`;
// }
// document.body.innerHTML += `<button id="btn">click her to stop the timer</button>`;
// var timerPrintLover = setTimeout(printILove, 10000);
// document.getElementById("btn").addEventListener("click", function () {
//   clearTimeout(timerPrintLover);
// });

//5
// document.body.innerHTML += `<h1 id="myHeading">this is h1</h1>`;
// document.getElementById("myHeading").style.color = "blue";
// function chengeColor() {
//   document.getElementById("myHeading").style.color = "red";
// }
// setTimeout(chengeColor, 3000);

//setinterval tasks

//1
// function printTimer() {
//   document.body.innerHTML += `timer`;
// }
// setInterval(printTimer, 4000);

//2
// var counter = 0;
// function printCounter() {
//   document.body.innerHTML += counter++;
// }
// setInterval(printCounter, 1000);

//3
// function printILove() {
//   document.body.innerHTML += `i love timers`;
// }
// var printLove5Secon = setInterval(printILove, 5000);
// document.body.innerHTML += `<button id="btn">cancel</button>`;
// document.getElementById("btn").addEventListener("click", function () {
//   clearInterval(printLove5Secon);
// });

//4
// function printHour() {
//   var date = new Date();
//   document.body.innerHTML = `the time is:${date.getHours()}:${date.getMinutes()}`;
// }

// setInterval(printHour, 1000);

//5
var seconds = 0;
var interval;
var inputValue = document.getElementById("userMinutes");
var minutes = 0;
t5.innerHTML =
  '<label for="timerInput">Set Timer Countdown (in minutes)</label>' +
  '<input type="number" id="timerInput">' +
  '<button id="startButton">Start Countdown</button>' +
  '<p id="timerDisplay"></p>';

document.getElementById("startButton").addEventListener("click", startTimer);

function startTimer() {
  if (t5.getElementsByTagName("input")[0].value > 0) {
    minutes = t5.getElementsByTagName("input")[0].value;
    interval = setInterval(startCountdown, 1000);
  }
}
function startCountdown() {
  if (seconds == 0 && minutes > 0) {
    minutes--;
    seconds = 59;
  }
  document.getElementById("timerDisplay").innerHTML = ` ${minutes}:${seconds}`;
  seconds--;
  if (minutes == 0) {
    document.getElementById("timerDisplay").innerHTML = ` ${0}:${0}`;
    clearInterval(interval);
  }
}
//7
// document.body.innerHTML += `<button id="btnq7">לחץ עליי</button>`;
// document.body.innerHTML += `<h3 id="myH3"></h3>`;
// var countr = 0;
// function printYouInWeb() {
//   document.getElementById(
//     "myH3"
//   ).innerHTML = `you ar in website! ${countr++} ceconds`;
// }
// document
//   .getElementById("btnq7")
//   .addEventListener("click", function intervalStart() {
//     setInterval(printYouInWeb, 1000);
//   });
//8
// document.body.innerHTML += `<h3 id="myH3"></h3>`;
// function printNAmes() {
//   var names = ["uriel", "michael", "daniel", "hananya"];
//   var rndNum = Math.floor(Math.random() * 4);
//   document.getElementById("myH3").innerText = ` ${names[rndNum]}`;
// }
// document.body.innerHTML += `<button id="btnCancel">cancel</button>`;
// var startPrintInterval = setInterval(printNAmes, 4000);
// document.getElementById("btnCancel").addEventListener("click", function () {
//   clearInterval(startPrintInterval);
// });
