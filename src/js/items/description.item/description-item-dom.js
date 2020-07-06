import elementClosest from "element-closest";
import { projectsArray } from "../../transversal-functions/projects-factory";

/* NPM Library - To get Element.closest() works with IE */
elementClosest(window); // Initialize Library

// Set the Item's Description to the DOM
const descriptionItemDOM = (eventDescription) => {
  // Get Project ID, Item ID from data-attribute and Item clicked on
  // from selecting closest .item-details
  const projectID = eventDescription.target.closest(".item-details").dataset
    .projectId;
  const itemID = eventDescription.target.closest(".item-details").dataset
    .itemId;
  const describedItem = eventDescription.target.closest(".item-details");

  // Set description text
  const descriptionText = projectsArray[projectID].itemsArray[itemID].description;

  if (descriptionText === "") {
    // If there is no description
    describedItem.insertAdjacentHTML(
      "afterend",
      `<div class="item-details-description-container">
                    <div class="item-details-description" data-item-id="${itemID}">No description found. You can add one by using the <strong>Modify Function</strong>.</div>
                  </div>`,
    );
  } else {
    // If there is a description
    describedItem.insertAdjacentHTML(
      "afterend",
      `<div class="item-details-description-container">
                    <div class="item-details-description" data-item-id="${itemID}">${descriptionText}</div>
                 <div/>`,
    );
  }
};

export default descriptionItemDOM;
