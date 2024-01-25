console.clear();

const userElement = document.querySelector(".user");
const errorElement = document.querySelector(".error");

async function getUser(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // response.ok == false;
      throw new Error(response.status); //Anfrage wird gestellt, darauf wird geantwort - status, z.B. 404 - page not found
    }
    const json = await response.json(); // da sind die Daten drin
    return json.data;
  } catch (error) {
    errorElement.innerHTML = "Sorry, can't find data!";
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      errorElement.textContent = "";
      const user = await getUser(event.target.dataset.url);
      userElement.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
      `;
    } catch {
      errorElement.textContent = "Sorry, page cannot be loaded.";
      userElement.innerHTML = ``;
    }
  })
);
