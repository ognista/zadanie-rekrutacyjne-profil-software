import { generateTable } from "./table";

const allStudentsButton = document.getElementById("allStudents");
const GryffindorButton = document.getElementById("Gryffindor");
const SlytherinButton = document.getElementById("Slytherin");
const HufflepuffButton = document.getElementById("Hufflepuff");
const RavenclawButton = document.getElementById("Ravenclaw");

const allStudentsFunc = async () => {
  try {
    const response = await fetch(
      "https://hp-api.herokuapp.com/api/characters/students"
    );
    if (response.ok) {
      const data = await response.json();
      generateTable(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const GryffindorFunc = async () => {
  try {
    const response = await fetch(
      "https://hp-api.herokuapp.com/api/characters/house/gryffindor"
    );
    if (response.ok) {
      const data = await response.json();
      generateTable(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const SlytherinFunc = async () => {
  try {
    const response = await fetch(
      "https://hp-api.herokuapp.com/api/characters/house/slytherin"
    );
    if (response.ok) {
      const data = await response.json();
      generateTable(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const HufflepuffFunc = async () => {
  try {
    const response = await fetch(
      "https://hp-api.herokuapp.com/api/characters/house/hufflepuff"
    );
    if (response.ok) {
      const data = await response.json();
      generateTable(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const RavenclawFunc = async () => {
  try {
    const response = await fetch(
      "https://hp-api.herokuapp.com/api/characters/house/ravenclaw"
    );
    if (response.ok) {
      const data = await response.json();
      generateTable(data);
    }
  } catch (error) {
    console.log(error);
  }
};

allStudentsButton.addEventListener("click", allStudentsFunc);
GryffindorButton.addEventListener("click", GryffindorFunc);
SlytherinButton.addEventListener("click", SlytherinFunc);
HufflepuffButton.addEventListener("click", HufflepuffFunc);
RavenclawButton.addEventListener("click", RavenclawFunc);
