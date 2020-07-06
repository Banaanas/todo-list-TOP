import deleteItemArray from "./delete-item-array";
import deleteItemDOM from "./delete-item-dom";

// Add a Delete Item Function
const deleteItem = () => {
  const listDisplay = document.querySelector("#list-display");

  // Add Delete function to all delete buttons
  listDisplay.addEventListener("click", (event) => {
    if (event.target.className !== "item-delete-icon") {
      return;
    }

    deleteItemArray(event);
    deleteItemDOM(event);
  });
};

export default deleteItem;
