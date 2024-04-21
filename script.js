import * as validation from "./validation.js";

const email = document.querySelector("#email");
const warningText = document.querySelector("#warning");
const subscribe = document.querySelector("#subscribe");
const cardOne = document.querySelector(".cardOne");
const cardTwo = document.querySelector(".cardTwo");
const reset = document.querySelector("#reset");

function reseting() {
  location.reload();
}

function testyfy(params) {
  const a = validation.isValidemailFunction();
  if (a === false) {
    warningText.classList.remove("text-white");
    warningText.classList.add("text-Tomato");
    email.classList.add("bg-Tomato");
  } else {
    warningText.classList.remove("text-Tomato");
    warningText.classList.add("text-white");
    email.classList.remove("bg-Tomato");
    cardOne.classList.add("sm:hidden", "max-sm:hidden");
    cardTwo.classList.remove("hidden");
  }
}
subscribe.addEventListener("click", testyfy);
reset.addEventListener("click", reseting);
