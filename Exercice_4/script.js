const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const button = document.querySelector("#button");

button.addEventListener("click", handleCheckPassword);

function handleCheckPassword(){
    if (password.value === confirmPassword.value){
        password.style.border = "green 3px solid"
        confirmPassword.style.border = "green 3px solid"
    } else if (password.value != confirmPassword.value){
        password.style.border = "red 3px solid"
        confirmPassword.style.border = "red 3px solid"
    }
}