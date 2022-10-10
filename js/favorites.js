import {
  getLocalStorage,
  isItemInLocalStorage,
  updateLocalStorage,
} from "./localStorage";

const generateCards = () => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerText = "";

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

  image.src = favItemData.image;
  name.innerText = favItemData.name;
  favButton.innerText = isItemInLocalStorage(favItemData)
    ? "Remove from fav"
    : "Add to fav";

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
