import completeItemArray from "./complete-item-array";
import completeItemDOM from "./complete-item-dom";

// Set Item.complete as True/False
const completeItemController = (event) => {
  const eventComplete = event;
  if (event.target.className !== "completed-checkbox") {
    return;
  }

  // Get Project ID and Item ID from data-attribute
  const projectID = event.target.parentNode.parentNode.dataset.projectId;
  const itemID = event.target.parentNode.parentNode.dataset.itemId;

  completeItemArray(projectID, itemID);
  completeItemDOM(projectID, itemID, eventComplete);
};

export default completeItemController;
