const img = document.querySelector("#image1");

img.addEventListener("mouseenter",handleRedBorder);

function handleRedBorder(){
    img.classList.add("redborder")
}

img.addEventListener("mouseleave",removeRedBorder);

function removeRedBorder(){
    img.classList.remove("redborder")
}