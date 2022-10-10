import { isItemInLocalStorage, updateLocalStorage } from "./localStorage";

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

const convertStringToDate = (stringDate) => {
  // workaround to handle empty dates
  if (stringDate === "") {
    return new Date(1, 0, 1);
  }

  const split = stringDate.split("-");
  return new Date(+split[2], split[1] - 1, split[0]);
};

const sortDataBy = (key, type, tableData) => {
  if (type === "asc") {
    if (key === "dateOfBirth") {
      tableData.sort(
        (item1, item2) =>
          convertStringToDate(item1[key]) - convertStringToDate(item2[key])
      );
    } else {
      tableData.sort((item1, item2) => item1[key].localeCompare(item2[key]));
    }
    generateTable(tableData);
  } else if (type === "desc") {
    if (key === "dateOfBirth") {
      tableData.sort(
        (item1, item2) =>
          convertStringToDate(item2[key]) - convertStringToDate(item1[key])
      );
    } else {
      tableData.sort((item1, item2) => item2[key].localeCompare(item1[key]));
    }
    generateTable(tableData);
  }
};

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
  const filledThead = createTableHeader(tableData);
  const filledTbody = createTableBody(tableData);

  table.appendChild(filledThead);
  table.appendChild(filledTbody);
  tableArea.innerHTML = "";
  tableArea.appendChild(table);
};

const createTableHeader = (tableData) => {
  const thead = document.createElement("thead");

  HEADERS.forEach((element) => {
    const th = document.createElement("th");

    th.appendChild(document.createTextNode(element.name));

    if (element.isSortable) {
      const ascSortButton = document.createElement("button");
      const descSortButton = document.createElement("button");

      ascSortButton.addEventListener("click", () =>
        sortDataBy(element.key, "asc", tableData)
      );

      descSortButton.addEventListener("click", () =>
        sortDataBy(element.key, "desc", tableData)
      );

      th.appendChild(ascSortButton);
      th.appendChild(descSortButton);
    }

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

  tr.addEventListener("click", () => showModal(itemData));

  return tr;
};

const createTableCell = (value) => {
  const td = document.createElement("td");

  td.appendChild(document.createTextNode(value));
  td.title = value;

  return td;
};

const modal = document.getElementById("modal");

const modalExit = document.querySelectorAll(".modal-exit");

modalExit.forEach((element) => {
  element.addEventListener("click", () => modal.classList.remove("open"));
});

const showModal = (itemData) => {
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = "";

  const image = document.createElement("img");
  const name = document.createElement("span");
  const favButton = document.createElement("button");

  image.src = itemData.image;
  image.className = "modal-image";
  name.innerHTML = itemData.name;

  favButton.innerText = isItemInLocalStorage(itemData)
    ? "Remove from fav"
    : "Add to fav";

  favButton.addEventListener("click", () =>
    updateLocalStorage(itemData, favButton)
  );

  modalBody.appendChild(image);
  modalBody.appendChild(name);
  modalBody.appendChild(favButton);

  modal.classList.add("open");
};
