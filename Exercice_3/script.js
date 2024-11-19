const green = document.querySelector("#green");
const red = document.querySelector("#red");
const blue = document.querySelector("#blue");
const text = document.querySelector("#text");

green.addEventListener("click", handleColorGreen);

function handleColorGreen () {
    text.classList.toggle("colorgreen")
}

red.addEventListener("click", handleColorRed);

function handleColorRed () {
    text.classList.toggle("colorred")
}

blue.addEventListener("click", handleColorBlue);

function handleColorBlue () {
    text.classList.toggle("colorblue")
}