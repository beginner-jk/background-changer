const button = document.querySelector("button");
const randomHexColor = document.querySelector("span");
const body = document.querySelector("body")

function hexGenerator() {
    const hexNumbers = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
];

let result = "#";

for (var i = 0; i < 6; i += 1) {
    const randomIndex = Math.floor(Math.random() * hexNumbers.length);
    result += hexNumbers[randomIndex];
}

return result;
}

function handlerColorChange(event) {
    event.preventDefault();
    randomHexColor.innerText = hexGenerator();
    body.style.backgroundColor = hexGenerator();
}

button.addEventListener("click", handlerColorChange);