const bodyRef = document.querySelector("body");
const titleRef = document.querySelector("#page-title");
const buttonRef = document.querySelector("#mode-selector");
const footerRef = document.querySelector("footer");

const darkModeClass = "dark-mode";

function changeMode() {
  changeClasses();
  changeTexts();
}

function changeClasses() {
  bodyRef.classList.toggle(darkModeClass);
  titleRef.classList.toggle(darkModeClass);
  buttonRef.classList.toggle(darkModeClass);
  footerRef.classList.toggle(darkModeClass);
}

function changeTexts() {
  if (bodyRef.classList.contains(darkModeClass)) {
    titleRef.innerHTML = "Dark Mode ON";
    buttonRef.innerHTML = "Light Mode";
  } else {
    titleRef.innerHTML = "Light Mode ON";
    buttonRef.innerHTML = "Dark Mode";
  }
}

buttonRef.addEventListener("click", changeMode);
