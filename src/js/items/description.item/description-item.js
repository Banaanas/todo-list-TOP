import controllerDescriptionItem from "./description-item-controler";

// Open Item's Description when clicked on Item Description Icon

const descriptionItem = () => {
  const listDisplay = document.querySelector("#list-display");

  // Removes (if present) then adds the controller bookmarkedItem function
  // Anonymous function is not possible, because removeEventListener needs a named function
  listDisplay.addEventListener("click", controllerDescriptionItem, true);
};

export default descriptionItem;
