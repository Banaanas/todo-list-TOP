import bookmarkItemArray from "./bookmarked-items-array";
import bookmarkItemDOM from "./bookmarked-items-dom";

// Manage the bookmarkItem function
// Anonymous function is not possible, because removeEventListener needs a named function

const controllerBookmarkItem = (event) => {
  if (event.target.className !== "item-bookmark-icon") {
    return;
  }

  // Get Project ID and Item ID from data-attribute
  const projectID =
    event.target.parentNode.parentNode.parentNode.dataset.projectId;
  const itemID = event.target.parentNode.parentNode.parentNode.dataset.itemId;

  bookmarkItemArray(projectID, itemID);
  bookmarkItemDOM(event, projectID, itemID);
};

export default controllerBookmarkItem;
