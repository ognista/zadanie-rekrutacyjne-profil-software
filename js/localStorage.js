export const getLocalStorage = () => {
  const localStorageData = window.localStorage.getItem("favorites");
  return localStorageData ? JSON.parse(localStorageData) : [];
};

export const updateLocalStorage = (itemData, favButton) => {
  const localStorageData = getLocalStorage();

  if (localStorageData.some((item) => item.name === itemData.name)) {
    const updatedLocalStorageData = localStorageData.filter(
      (item) => item.name !== itemData.name
    );
    window.localStorage.setItem(
      "favorites",
      JSON.stringify(updatedLocalStorageData)
    );
    favButton.innerText = "Add to fav";
  } else {
    const updatedLocalStorageData = [...localStorageData, itemData];
    window.localStorage.setItem(
      "favorites",
      JSON.stringify(updatedLocalStorageData)
    );
    favButton.innerText = "Remove from fav";
  }
};

export const isItemInLocalStorage = (itemData) =>
  getLocalStorage().some((item) => item.name === itemData.name);
