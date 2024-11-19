const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const text = document.querySelector("#text");

green.addEventListener("click", handleColorGreen);

function handleColorGreen () {
    text.style.color = "green"
}

red.addEventListener("click", handleColorRed);

function handleColorRed () {
    text.style.color = "red"
}

blue.addEventListener("click", handleColorBlue);

function handleColorBlue () {
    text.style.color = "blue"
}