import {
  getLocalStorage,
  isItemInLocalStorage,
  updateLocalStorage,
} from "./localStorage";

import {
  ADD_TO_FAVORITES_TEXT,
  REMOVE_FROM_FAVORITES_TEXT,
  DEFAULT_IMAGE,
} from "./constants";

let numberOfColumns = 3;

const colButtons = document.querySelectorAll(".col-button");
colButtons.forEach((colButton) => {
  colButton.addEventListener("click", () => {
    numberOfColumns = +colButton.innerHTML;
    generateCards();
  });
});

const generateCards = () => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerText = "";

  cardContainer.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;

  const localStorageData = getLocalStorage();

  localStorageData.forEach((item) => {
    const card = createCard(item);

    cardContainer.appendChild(card);
  });
};

const createCard = (favItemData) => {
  const card = document.createElement("div");
  const image = document.createElement("img");
  const name = document.createElement("span");
  const favButton = document.createElement("button");

  card.classList.add("card");
  favButton.classList.add("fav-button");

  image.src = favItemData.image !== "" ? favItemData.image : DEFAULT_IMAGE;
  name.innerText = favItemData.name;
  favButton.innerText = isItemInLocalStorage(favItemData)
    ? REMOVE_FROM_FAVORITES_TEXT
    : ADD_TO_FAVORITES_TEXT;

  favButton.addEventListener("click", () => {
    updateLocalStorage(favItemData, favButton);
    generateCards();
  });

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(favButton);

  return card;
};

generateCards();
