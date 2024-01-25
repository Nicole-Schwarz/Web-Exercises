/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the 
second input field

2. On button click: The value of the first input field is copied in 
uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");
const buttonUppercase = document.querySelector("[data-js=button__uppercase]");
const buttonSwitch = document.querySelector("[data-js=button__switch]");

button.addEventListener("click", () => {
  secondInput.value = firstInput.value;
});

buttonUppercase.addEventListener("click", () => {
  let firstInputUppercase = firstInput.value;
  secondInput.value = firstInputUppercase.toUpperCase();
});

buttonSwitch.addEventListener("click", () => {
  const firstInputCopy = firstInput.value;
  const secondInputCopy = secondInput.value;
  firstInput.value = secondInputCopy;
  secondInput.value = firstInputCopy;
});
