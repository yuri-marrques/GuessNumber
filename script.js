//var

const btnReset = document.querySelector('#btnReset')
const btnTry = document.querySelector('#btnTry')

const screen1 =document.querySelector('.screen1')
const screen2 =document.querySelector('.screen2')

let randomNumber = Math.round(Math.random()*10)
let attempts = 1

//events

btnTry.addEventListener('click', handleTryClick)

btnReset.addEventListener('click', handleResetClick)

document.addEventListener('keydown', pressEnter)

//funtion
function handleTryClick(event) {
    event.preventDefault() // nao faca o padrao

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || (!Number(inputNumber.value) && Number(inputNumber.value)!=0)) {
        alert("Please insert a number between 0 and 10!")
        
        attempts = 0
    }
    
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        screen2.querySelector("span").innerText = attempts
    }

    inputNumber.value = ""
    attempts++
}

function handleResetClick() {
    toggleScreen()
    attempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnter(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}
