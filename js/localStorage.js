import {
  LOCAL_STORAGE_KEY,
  ADD_TO_FAVORITES_TEXT,
  REMOVE_FROM_FAVORITES_TEXT,
} from "./constants";

/**
 * Function which returns contents of local storage or empty array if none found
 *
 * @returns {any|Array<any>}
 */
export const getLocalStorage = () => {
  const localStorageData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  return localStorageData ? JSON.parse(localStorageData) : [];
};
/**
 * Function which updates local storage and sets proper text in button
 *
 * @param itemData {{patronus: string, hogwartsStudent: boolean, image: string, ancestry: string, gender: string, alive: boolean, hairColour: string, dateOfBirth: string, house: string, hogwartsStaff: boolean, alternate_names: Array<any>, actor: string, alternate_actors: Array<any>, species: string, wand: {core: string, length: number, wood: string}, name: string, wizard: boolean, eyeColour: string, yearOfBirth: number}}
 * @param favButton {HTMLButtonElement}
 */
export const updateLocalStorage = (itemData, favButton) => {
  const localStorageData = getLocalStorage();

  if (localStorageData.some((item) => item.name === itemData.name)) {
    const updatedLocalStorageData = localStorageData.filter(
      (item) => item.name !== itemData.name
    );
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(updatedLocalStorageData)
    );
    favButton.innerText = ADD_TO_FAVORITES_TEXT;
  } else {
    const updatedLocalStorageData = [...localStorageData, itemData];
    window.localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(updatedLocalStorageData)
    );
    favButton.innerText = REMOVE_FROM_FAVORITES_TEXT;
  }
};
/**
 * Function that checks if certain item is in local storage
 *
 * @param itemData {{patronus: string, hogwartsStudent: boolean, image: string, ancestry: string, gender: string, alive: boolean, hairColour: string, dateOfBirth: string, house: string, hogwartsStaff: boolean, alternate_names: Array<any>, actor: string, alternate_actors: Array<any>, species: string, wand: {core: string, length: number, wood: string}, name: string, wizard: boolean, eyeColour: string, yearOfBirth: number}}
 * @returns {boolean}
 */
export const isItemInLocalStorage = (itemData) =>
  getLocalStorage().some((item) => item.name === itemData.name);
