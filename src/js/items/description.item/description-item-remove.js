/// Remove the descriptionItemDiv when clicked on List Items Display
// if there is already one displayed
const descriptionItemRemove = () => {
  const descriptionItemRemove1 = (event) => {
    const itemDescription = document.querySelector(".item-details-description");
    if (itemDescription) {
      // Event Delegation
      if (
        event.target.className === "item-description-icon"
        || event.target.className === "item-details"
        || event.target.className === "item-name-and-checkbox"
        || event.target.className === "item-name"
        || event.target.className === "item-due-date"
      ) {
        return;
      }
      if (event.target.classList.contains("item-details-description")) {
        return;
      }
      itemDescription.remove();
    }
    const listDisplay = document.querySelector("#list-display");
    listDisplay.removeEventListener("click", descriptionItemRemove1);
  };

  const listDisplay = document.querySelector("#list-display");
  listDisplay.addEventListener("click", descriptionItemRemove1);
};

export default descriptionItemRemove;
