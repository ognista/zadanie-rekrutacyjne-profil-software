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
      console.log(data);
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
      console.log(data);
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
      console.log(data);
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
      console.log(data);
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
      console.log(data);
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

const HEADERS = [
  { name: "Name", key: "name", isSortable: true },
  { name: "Date of birth", key: "dateOfBirth", isSortable: true },
  { name: "House", key: "house", isSortable: true },
  { name: "Wizard", key: "wizard", isSortable: false },
  { name: "Ancestry", key: "ancestry", isSortable: false },
  { name: "Is student", key: "hogwartsStudent", isSortable: false },
  { name: "Is staff", key: "hogwartsStaff", isSortable: false },
];

const generateTable = (tableData) => {
  const tableArea = document.getElementById("tableArea");
  const table = document.createElement("table");
  const filledThead = createTableHeader();
  const filledTbody = createTableBody(tableData);

  table.appendChild(filledThead);
  table.appendChild(filledTbody);
  tableArea.innerHTML = "";
  tableArea.appendChild(table);
};

const createTableHeader = () => {
  const thead = document.createElement("thead");

  HEADERS.forEach((element) => {
    const th = document.createElement("th");

    th.appendChild(document.createTextNode(element.name));

    thead.appendChild(th);
  });

  return thead;
};

const createTableBody = (tableData) => {
  const tbody = document.createElement("tbody");

  tableData.forEach((item) => {
    const filledTr = createTableRow(item);

    tbody.appendChild(filledTr);
  });

  return tbody;
};

const createTableRow = (itemData) => {
  const tr = document.createElement("tr");

  HEADERS.forEach((element) => {
    const filledTd = createTableCell(itemData[element.key]);

    tr.appendChild(filledTd);
  });

  return tr;
};

const createTableCell = (value) => {
  const td = document.createElement("td");

  td.appendChild(document.createTextNode(value));
  td.title = value;

  return td;
};
