/**
 * @jest-environment jsdom
 */
import { convertStringToDate } from "../sorting";

test("convertStringToDate should return 01.01.1000r. for empty string", () => {
  expect(convertStringToDate("")).toStrictEqual(new Date(1, 0, 1));
});

test("convertStringToDate should properly parse date in format dd-mm-yyyy", () => {
  const date = "01-10-2020";
  expect(convertStringToDate(date)).toStrictEqual(new Date(2020, 9, 1)); // 01/10/2020
});
