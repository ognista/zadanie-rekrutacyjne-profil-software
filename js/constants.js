/**
 * Array of headers used in table generation
 *
 * @type {Array<{name: string, isSortable: boolean, key: string}>}
 */
export const HEADERS = [
  { name: "Name", key: "name", isSortable: true },
  { name: "Date of birth", key: "dateOfBirth", isSortable: true },
  { name: "House", key: "house", isSortable: true },
  { name: "Wizard", key: "wizard", isSortable: false },
  { name: "Ancestry", key: "ancestry", isSortable: false },
  { name: "Is student", key: "hogwartsStudent", isSortable: false },
  { name: "Is staff", key: "hogwartsStaff", isSortable: false },
];
/**
 * Key used to access local storage
 *
 * @type {string}
 */
export const LOCAL_STORAGE_KEY = "favorites";

export const ADD_TO_FAVORITES_TEXT = "Add to fav";
export const REMOVE_FROM_FAVORITES_TEXT = "Remove from fav";

/**
 * Url of default image used when none found
 *
 * @type {string}
 */
export const DEFAULT_IMAGE =
  "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png";

/**
 * Base url for fetching data
 *
 * @type {string}
 */
export const BASE_URL = "https://hp-api.herokuapp.com/api/characters";
