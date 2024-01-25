console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');
let isLightMode = true;

darkModeButton.addEventListener("click", () => {
  switchToDarkMode();
  console.log("Selected dark mode");
});

lightModeButton.addEventListener("click", () => {
  switchToLightMode();
  console.log("Selected light mode");
});

toggleButton.addEventListener("click", () => {
  if (isLightMode == true) {
    switchToDarkMode();
  } else {
    switchToLightMode();
  }
});

function switchToDarkMode() {
  bodyElement.classList.add("dark");
  isLightMode = false;
}

function switchToLightMode() {
  bodyElement.classList.remove("dark");
  isLightMode = true;
}
