import { isItemInLocalStorage, updateLocalStorage } from "./localStorage";
import {
  ADD_TO_FAVORITES_TEXT,
  REMOVE_FROM_FAVORITES_TEXT,
  DEFAULT_IMAGE,
} from "./constants";

const modal = document.getElementById("modal");

const modalExit = document.querySelectorAll(".modal-exit");

modalExit.forEach((element) => {
  element.addEventListener("click", () => modal.classList.remove("open"));
});

export const showModal = (itemData) => {
  const modalBody = document.getElementById("modal-body");

  modalBody.innerHTML = "";

  const image = document.createElement("img");
  const name = document.createElement("span");
  const favButton = document.createElement("button");

  image.src = itemData.image !== "" ? itemData.image : DEFAULT_IMAGE;
  image.className = "modal-image";
  favButton.classList.add("fav-button");
  name.innerHTML = itemData.name;

  favButton.innerText = isItemInLocalStorage(itemData)
    ? REMOVE_FROM_FAVORITES_TEXT
    : ADD_TO_FAVORITES_TEXT;

  favButton.addEventListener("click", () =>
    updateLocalStorage(itemData, favButton)
  );

  modalBody.appendChild(image);
  modalBody.appendChild(name);
  modalBody.appendChild(favButton);

  modal.classList.add("open");
};
