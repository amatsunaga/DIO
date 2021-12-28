let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = currentNumberWrapper.innerHTML

let subtrair = document.getElementById('subtrair')
let adicionar = document.getElementById('adicionar')

function numColor() {
  let num = Number(currentNumber)
  if (num < 0) {
    currentNumberWrapper.classList.add('negative') ||
      currentNumberWrapper.classList.replace('neutral', 'negative')
  } else if (num > 0) {
    currentNumberWrapper.classList.add('positive') ||
      currentNumberWrapper.classList.replace('neutral', 'positive')
  } else {
    currentNumberWrapper.classList.replace('negative', 'neutral') ||
      currentNumberWrapper.classList.replace('positive', 'neutral')
  }
}

function popup(value) {
  setTimeout(function () {
    alert(`Você atingiu o valor ${value}.`), 2000
  })
}

function removeActive() {
  if (currentNumber == 4) {
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber
    adicionar.classList.remove('active')
    popup('máximo')
  } else if (currentNumber == -4) {
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber
    subtrair.classList.remove('active')
    popup('mínimo')
  }
}

function increment() {
  if (currentNumber == -5) {
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber
    subtrair.classList.add('active')
  } else if (currentNumber < 4) {
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber
    numColor()
  } else removeActive()
}

function decrement() {
  if (currentNumber == 5) {
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber
    adicionar.classList.add('active')
  } else if (currentNumber > -4) {
    currentNumber--
    currentNumberWrapper.innerHTML = currentNumber
    numColor()
  } else removeActive()
}

subtrair.addEventListener('click', decrement)
adicionar.addEventListener('click', increment)
