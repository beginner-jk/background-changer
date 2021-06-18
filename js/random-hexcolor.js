const button = document.querySelector("button");
const randomHexColor = document.querySelector("span");
const body = document.querySelector("body")

const arrNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrAlphabet = ["A", "B", "C", "D", "E", "F"];

function ProduceRandomColor() {
    let randomNumber = JSON.stringify(arrNumber[Math.floor(Math.random()*arrNumber.length)])+
    JSON.stringify(arrNumber[Math.floor(Math.random()*arrNumber.length)])+
    JSON.stringify(arrNumber[Math.floor(Math.random()*arrNumber.length)])+
    JSON.stringify(arrNumber[Math.floor(Math.random()*arrNumber.length)])

    let randomAlphabet = arrAlphabet[Math.floor(Math.random()*arrAlphabet.length)]+
    arrAlphabet[Math.floor(Math.random()*arrAlphabet.length)];

    return "#"+randomNumber+randomAlphabet;
}

function handlerColorChange(event) {
    event.preventDefault();
    randomHexColor.innerText = ProduceRandomColor();
    body.style.backgroundColor = ProduceRandomColor();
}

button.addEventListener("click", handlerColorChange);