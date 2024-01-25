console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData(name) {
  const response = await fetch(url);
  const data = await response.json();

  /*const allNames = data.results.map((person) => {
    return { name: person.name };
  });
  console.log(allNames);
  //console.log(data.results[2].eye_color);
  /*const dataParagraph = document.createElement("p");
  dataParagraph.textContent = data.results[2].eye_color && allNames;
  document.body.append(dataParagraph);
}*/

  const person = data.results.find((person) => {
    return person.name.includes(name);
  });
  console.log(person.eye_color);
}

fetchData("Luke");
fetchData("R2-D2");
