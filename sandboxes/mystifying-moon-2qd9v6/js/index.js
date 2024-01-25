console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results[0].name);

  const r2D2 = data.results.find((person) => {
    return person.name === "R2-D2";
  });
  console.log(r2D2.eye_color);
}

fetchData();

async function fetchDataGender(name) {
  const response = await fetch(url);
  const data = await response.json();

  const person = data.results.find((person) => {
    return person.name === name;
  });
  if (person.gender === "male") {
    console.log("Hi sir");
  } else if (person.gender === "female") {
    console.log("Hi madame");
  } else {
    console.log("Hi robot");
  }
}
fetchDataGender("Darth Vader");
