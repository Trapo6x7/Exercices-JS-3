const afficher = document.querySelector("#afficher");
const masquer = document.querySelector("#masquer");
const text = document.querySelector("#text");

afficher.addEventListener("click", handleAfficherTexte);
masquer.addEventListener("click", handleMasquerTexte);

function handleAfficherTexte() {
  text.style.display = "block";
}

function handleMasquerTexte() {
  text.style.display = "none";
}