import { renderElement } from "./utils.js";

console.clear();
console.log("hi");
const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  const r2D2EyeColor = data.results.find((person) => {
    return person.name.includes("R2-D2").eye_color;
  });
  console.log(data.results[2].eye_color);
  const allNames = data.results.map((person) => {
    return person.name;
  });
  console.log(allNames);
}

fetchData();
