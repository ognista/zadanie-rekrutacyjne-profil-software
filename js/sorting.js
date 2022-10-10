import { generateTable } from "./table";

const convertStringToDate = (stringDate) => {
  // workaround to handle empty dates
  if (stringDate === "") {
    return new Date(1, 0, 1);
  }

  const split = stringDate.split("-");
  return new Date(+split[2], split[1] - 1, split[0]);
};

export const sortDataBy = (key, type, tableData) => {
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
