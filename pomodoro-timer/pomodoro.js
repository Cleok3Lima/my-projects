let countdown = 0 // variable to set/clear intervals
let seconds = 1500 // seconds left on the clock
let workTime = 25
let breakTime = 5
let isBreak = true
let isPaused = true
let sessionNum = 1
let sessionI = 0
let secondsTotal = seconds
let progressBarWidth = 0

const status = document.querySelector("#status")
const timerDisplay = document.querySelector(".timerDisplay")
const startBtn = document.querySelector(".startBtn")
const pauseBtn = document.querySelector(".pauseBtn")
const resetBtn = document.querySelector(".resetBtn")
const workMin = document.querySelector(".setWorkMin")
const breakMin = document.querySelector(".setBreakMin")
const progressBar = document.querySelector(".progressBarFill")

const alarm = document.createElement("audio") // A bell sound will play when the timer reaches 0
alarm.setAttribute(
  "src",
  "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
)

function startSession() {
  clearInterval(countdown)
  isPaused = !isPaused
  if (!isPaused) {
    countdown = setInterval(timer, 1000)
  }
}

/* EVENT LISTENERS FOR START AND RESET BUTTONS */
startBtn.addEventListener("click", () => {
  startSession()
})

resetBtn.addEventListener("click", () => {
  clearInterval(countdown)
  seconds = workTime * 60
  secondsTotal = seconds
  progressBarWidth = 0
  countdown = 0
  sessionNum = 1
  isPaused = true
  isBreak = true
  progressBar.style.width = 0
})

/* TIMER - HANDLES COUNTDOWN */
function timer() {
  seconds--
  updateProgressBar()
  if (seconds < 0) {
    sessionI++
    clearInterval(countdown)
    alarm.currentTime = 0
    alarm.play()
    seconds = (isBreak ? breakTime : workTime) * 60
    isBreak = !isBreak
    isPaused = !isPaused
  }
  if (sessionI === 2) {
    sessionI = 0
    sessionNum++
  }
}

/* UPDATE WORK AND BREAK TIMES */
let increment = 1

let incrementFunctions = {
  "#work-plus": function () {
    workTime = Math.min(workTime + increment, 60)
  },
  "#work-minus": function () {
    workTime = Math.max(workTime - increment, 1)
  },
  "#break-plus": function () {
    breakTime = Math.min(breakTime + increment, 60)
  },
  "#break-minus": function () {
    breakTime = Math.max(breakTime - increment, 1)
  },
}

for (var key in incrementFunctions) {
  if (incrementFunctions.hasOwnProperty(key)) {
    document.querySelector(key).onclick = incrementFunctions[key]
  }
}

/* UPDATE HTML CONTENT */
function countdownDisplay() {
  let minutes = Math.floor(seconds / 60)
  let remainderSeconds = seconds % 60
  timerDisplay.textContent = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`
}

function updateProgressBar() {
  progressBarWidth = 100 - (100 * seconds) / secondsTotal
  progressBar.style.width = progressBarWidth + "%"
  if (progressBarWidth > 100) {
    progressBar.style.width = "0%"
  }
  if (progressBarWidth >= 100) {
    secondsTotal = (isBreak ? breakTime : workTime) * 60
    //clearInterval(countdown);
  }
}

function buttonDisplay() {
  if (isPaused && countdown === 0) {
    startBtn.textContent = "START"
  } else if (isPaused && countdown !== 0) {
    startBtn.textContent = "Continue"
  } else {
    startBtn.textContent = "Pause"
  }
}

function updateHTML() {
  countdownDisplay()
  buttonDisplay()
  isBreak
    ? (status.textContent = "Session " + sessionNum + ": " + "Keep Working")
    : (status.textContent = "Break " + sessionNum + ": " + "Take a Break!")
  workMin.textContent = workTime
  breakMin.textContent = breakTime
}

window.setInterval(updateHTML, 100)

document.onclick = updateHTML
