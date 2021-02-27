const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "We Love Programming Yo!!  Let me tell you how much we love it.  It pays the bills.  It is cool.  The future is full of it.  I personally love the shit.. "
let idx = 1
let speed = 300 / speedEl.value


writeText()

function writeText() {
  textEl.innerText = text.slice(0, idx)

  idx++

  if(idx > text.length) {
    idx = 1
  }

  setTimeout(writeText, speed)
}



speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)