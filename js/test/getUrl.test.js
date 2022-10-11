/**
 * @jest-environment jsdom
 */
import { getUrl } from "../main";

test("should return url for all students", () => {
  expect(getUrl("allStudents")).toBe(
    "https://hp-api.herokuapp.com/api/characters/students"
  );
});

test("should return url for Gryffindor", () => {
  expect(getUrl("Gryffindor")).toBe(
    "https://hp-api.herokuapp.com/api/characters/house/gryffindor"
  );
});

test("should return url for Slytherin", () => {
  expect(getUrl("Slytherin")).toBe(
    "https://hp-api.herokuapp.com/api/characters/house/slytherin"
  );
});

test("should return url for Hufflepuff", () => {
  expect(getUrl("Hufflepuff")).toBe(
    "https://hp-api.herokuapp.com/api/characters/house/hufflepuff"
  );
});

test("should return url for Ravenclaw", () => {
  expect(getUrl("Ravenclaw")).toBe(
    "https://hp-api.herokuapp.com/api/characters/house/ravenclaw"
  );
});
