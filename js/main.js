import { BASE_URL } from "./constants";
import { generateTable } from "./table";

const fetchButtons = document.querySelectorAll(".fetch-button");

fetchButtons.forEach((button) => {
  button.addEventListener("click", () => fetchData(button.id));
});

const fetchData = async (buttonId) => {
  try {
    const response = await fetch(getUrl(buttonId));
    if (response.ok) {
      const data = await response.json();
      generateTable(data);
    }
  } catch (error) {
    console.log(`Error while fetching ${buttonId} ${error}`);
  }
};

const getUrl = (buttonId) => {
  switch (buttonId) {
    case "allStudents":
      return BASE_URL + "/students";
    case "Gryffindor":
      return BASE_URL + "/house/gryffindor";
    case "Slytherin":
      return BASE_URL + "/house/slytherin";
    case "Hufflepuff":
      return BASE_URL + "/house/hufflepuff";
    case "Ravenclaw":
      return BASE_URL + "/house/ravenclaw";
  }
};
