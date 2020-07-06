import addItemController from "./add-item-controller";

// Set the Add Item Function
const addItem = () => {
  const addItemForm = document.querySelector("#item-modal-form");
  addItemForm.removeEventListener("submit", addItemController);
  addItemForm.addEventListener("submit", addItemController);
};

export default addItem;
