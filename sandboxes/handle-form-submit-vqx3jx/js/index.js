console.clear();

const form = document.querySelector('[data-js="form"]');

// 1. get all input Field Data

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();
  // form.reset(); auch möglich, aber das verwenden wir bald nicht mehr (im React)
  event.target.firstName.focus();
});

// 2. reset the form
