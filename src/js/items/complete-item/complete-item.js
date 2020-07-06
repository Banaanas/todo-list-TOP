import completeItemController from "./complete-item-controller";

// Set Item as Completed when click on the radio button

const completeItem = () => {
  const listDisplay = document.querySelector("#list-display");

  // Removes (if present) then adds the controller completeItemController function
  // Anonymous function is not possible, because removeEventListener needs a named function
  listDisplay.removeEventListener("click", completeItemController);

  listDisplay.addEventListener("click", completeItemController);
};

export default completeItem;
