import { HEADERS } from "./constants";
import { sortDataBy } from "./sorting";
import { showModal } from "./modal";

export const generateTable = (tableData) => {
  const tableArea = document.getElementById("table-area");
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

      ascSortButton.classList.add("arrow", "up");
      descSortButton.classList.add("arrow", "down");

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
