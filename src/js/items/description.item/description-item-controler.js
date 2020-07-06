import elementClosest from "element-closest";
import descriptionItemDOM from "./description-item-dom";
import descriptionItemRemove from "./description-item-remove";

/* NPM Library - To get Element.closest() works with IE */
elementClosest(window); // Initialize Library

// Anonymous function is not possible, because removeEventListener needs a named function
// That's why this controller function has been added

const controllerDescriptionItem = (event) => {
  const eventDescription = event;
  // Event Delegation
  if (
    event.target.className !== "item-description-icon"
    && event.target.className !== "item-details"
    && event.target.className !== "item-name-and-checkbox"
    && event.target.className !== "item-name"
    && event.target.className !== "item-due-date"
  ) {
    return;
  }
  /// Check if there is already one descriptionDisplayed displayed and if descriptionDisplayed
  // and descriptionIconClicked are related to the same item Object
  const descriptionDisplayed = document.querySelector(".item-details-description");
  const clickedItemID = event.target.closest(".item-details").dataset // Select closest .item-details
    .itemId;

  if (
    descriptionDisplayed
    && descriptionDisplayed.dataset.itemId === clickedItemID
  ) {
    /// Remove the descriptionItemDiv if there is already one displayed for the same item
    descriptionDisplayed.remove();
    return;
  }
  if (descriptionDisplayed) {
    /// Remove the descriptionItemDiv if there is already one displayed BUT for a different item
    /// Then continue with the function
    descriptionDisplayed.remove();
  }

  descriptionItemDOM(eventDescription);
  descriptionItemRemove();
};

export default controllerDescriptionItem;
