const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeshop = document.querySelector('.coffeshop')
const buttonFireplace = document.querySelector('.fireplace')
const timer = document.getElementsByTagName('span')[1]
const body = document.getElementsByTagName('body')[0]
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

/*-------------------- DARK MODE -----------------*/

const buttonLightMode = document.querySelector('.light-mode-button')
buttonLightMode.addEventListener('click', () => {
  buttonLightMode.classList.add('hide')
  body.classList.add('darkmode')
  timer.classList.add('darkmode')
  minutesDisplay.classList.add('darkmode')
  secondsDisplay.classList.add('darkmode')
  buttonPlay.classList.add('darkmode')
  buttonPause.classList.add('darkmode')
  buttonStop.classList.add('darkmode')
  buttonIncrease.classList.add('darkmode')
  buttonDecrease.classList.add('darkmode')
  buttonForest.classList.add('darkmode')
  buttonRain.classList.add('darkmode')
  buttonCoffeshop.classList.add('darkmode')
  buttonFireplace.classList.add('darkmode')
  buttonDarkMode.classList.remove('hide')
})
const buttonDarkMode = document.querySelector('.dark-mode-button')
buttonDarkMode.addEventListener('click', () => {
  buttonDarkMode.classList.add('hide')
  timer.classList.remove('darkmode')
  minutesDisplay.classList.remove('darkmode')
  secondsDisplay.classList.remove('darkmode')
  buttonLightMode.classList.remove('hide')
  body.classList.remove('darkmode')
  buttonPlay.classList.remove('darkmode')
  buttonPause.classList.remove('darkmode')
  buttonStop.classList.remove('darkmode')
  buttonIncrease.classList.remove('darkmode')
  buttonDecrease.classList.remove('darkmode')
  buttonForest.classList.remove('darkmode')
  buttonRain.classList.remove('darkmode')
  buttonCoffeshop.classList.remove('darkmode')
  buttonFireplace.classList.remove('darkmode')
})

/*-------------------- EVENT LISTENERS -----------------*/

buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  countdown()
})

buttonPause.addEventListener('click', () => {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})

buttonForest.addEventListener('click', () => {
  buttonForest.classList.toggle('bg-button-selected')
  buttonRain.classList.remove('bg-button-selected')
  buttonCoffeshop.classList.remove('bg-button-selected')
  buttonFireplace.classList.remove('bg-button-selected')
  forestAudio.play()
  coffeshopAudio.pause()
  fireplaceAudio.pause()
  rainAudio.pause()
  forestAudio.loop = true
})
buttonRain.addEventListener('click', () => {
  buttonRain.classList.toggle('bg-button-selected')
  buttonForest.classList.remove('bg-button-selected')
  buttonCoffeshop.classList.remove('bg-button-selected')
  buttonFireplace.classList.remove('bg-button-selected')
  rainAudio.play()
  coffeshopAudio.pause()
  fireplaceAudio.pause()
  forestAudio.pause()
  rainAudio.loop = true
})
buttonCoffeshop.addEventListener('click', () => {
  buttonCoffeshop.classList.toggle('bg-button-selected')
  buttonRain.classList.remove('bg-button-selected')
  buttonForest.classList.remove('bg-button-selected')
  buttonFireplace.classList.remove('bg-button-selected')
  coffeshopAudio.play()
  rainAudio.pause()
  fireplaceAudio.pause()
  forestAudio.pause()
  coffeshopAudio.loop = true
})
buttonFireplace.addEventListener('click', () => {
  buttonFireplace.classList.toggle('bg-button-selected')
  buttonRain.classList.remove('bg-button-selected')
  buttonForest.classList.remove('bg-button-selected')
  buttonCoffeshop.classList.remove('bg-button-selected')
  fireplaceAudio.play()
  rainAudio.pause()
  coffeshopAudio.pause()
  forestAudio.pause()
  fireplaceAudio.loop = true
})

/*-------------------- MAIN FUNCTIONS -----------------*/

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function countdown() {
  timerTimeOut = setTimeout(() => {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    if (minutes <= 0 && seconds <= 0) {
      resetControls()
      return
    }
    if (seconds <= 0) {
      seconds = 60
      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))
    countdown()
  }, 1000)
}

function increaseMinutes() {
  buttonIncrease.addEventListener('click', () => {
    minutesIncreased = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutesIncreased + 5).padStart(2, '0')
  })
}
function decreaseMinutes() {
  buttonDecrease.addEventListener('click', () => {
    minutesDecreased = Number(minutesDisplay.textContent)
    if (minutesDecreased <= 0) {
      return
    }
    minutesDisplay.textContent = String(minutesDecreased - 5).padStart(2, '0')
  })
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function pauseTimer() {
  buttonPause.addEventListener('click', () => {
    clearTimeout(timerTimeOut)
  })
}
function resetTimer() {
  buttonStop.addEventListener('click', () => {
    resetControls()
    clearTimeout(timerTimeOut)
    updateTimerDisplay(minutes, 0)
  })
}

pauseTimer()
resetTimer()
increaseMinutes()
decreaseMinutes()

/*-------------------- SOUNDS -----------------*/

const forestAudio = new Audio(
  'https://github.com/cadusousa-97/relax-sounds/blob/main/forest.wav?raw=true'
)
const rainAudio = new Audio(
  'https://github.com/cadusousa-97/relax-sounds/blob/main/rain.wav?raw=true'
)
const fireplaceAudio = new Audio(
  'https://github.com/cadusousa-97/relax-sounds/blob/main/fireplace.wav?raw=true'
)
const coffeshopAudio = new Audio(
  'https://github.com/cadusousa-97/relax-sounds/blob/main/coffeshop.wav?raw=true'
)
