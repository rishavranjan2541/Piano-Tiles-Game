
const squares = document.querySelectorAll('.square')
const blue = document.querySelector('.blue')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let hitPosition2a
let hitPosition2b
let currentTime = 60
let currentTime2 = 60
let timerId = null
let round1 = false
let countDownb = 0
let timerId2
// let happnSquare = []

alert("Press OK to start, and refresh the page to restart")
function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('blue')
  })
  
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('blue')


  hitPosition = randomSquare.id
//   console.log(randomSquare);
}

function randomSquare2() {
  squares.forEach(square => {
    square.classList.remove('blue')
  })
  
  let randomSquarea= squares[Math.floor(Math.random() * 9)]
  randomSquarea.classList.add('blue')
  let randomSquareb = squares[Math.floor(Math.random() * 9)]
  randomSquareb.classList.add('blue')


  hitPosition2a = randomSquarea.id
  hitPosition2b = randomSquareb.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition || square.id ==hitPosition2a || square.id==hitPosition2b) {
      result++
      score.textContent = result
      hitPosition = null
      hitPosition2a = null
      hitPosition2b = null
      // happnSquare.push(square.id)
    }
    else {
      clearInterval(countDownTimerId)
      clearInterval(timerId)
      alert("GAME OVER!,with Score"+result)
      if (round1 == true) {
      //  alert(countDownb)
       clearInterval(countDownb)
       clearInterval(timerId2)
       alert('Your final score is'+ result)
      }
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 1000)
}

function moveMole2() {
  timerId2 = setInterval(randomSquare2, 1500)
}



moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0) {
    round1 = true
    // alert(round1)
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('Round 1 OVER!')
  }
  if (currentTime == 0) {
    alert("Round 2 Starts")
    moveMole2()
    // moveMole2()
    // timerId2 = setInterval(randomSquare,1500)
    
    let countDownTimerId2 = setInterval(countDown2, 1000)
    countDownb = countDownTimerId2
    function countDown2() {
      currentTime2--
      timeLeft.textContent = currentTime2
      
      if (currentTime2 == 0) {
        clearInterval(countDownTimerId2)
        clearInterval(timerId2)
        alert('GAME OVER! Your final score is ' + result)
      }
    }
    
  }
  
  
}

let countDownTimerId = setInterval(countDown, 1000)

