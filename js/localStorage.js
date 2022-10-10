import {
  LOCAL_STORAGE_KEY,
  ADD_TO_FAVORITES_TEXT,
  REMOVE_FROM_FAVORITES_TEXT,
} from "./constants";

export const getLocalStorage = () => {
  const localStorageData = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  return localStorageData ? JSON.parse(localStorageData) : [];
};

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

export const isItemInLocalStorage = (itemData) =>
  getLocalStorage().some((item) => item.name === itemData.name);
