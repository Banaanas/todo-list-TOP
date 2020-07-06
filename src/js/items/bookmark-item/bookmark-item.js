import controllerBookmarkItem from "./bookmarked-item-controller";

// Add Bookmark option to each Item
const bookmarkItem = () => {
  const listDisplay = document.querySelector("#list-display");

  // Remove (if present) then add the controller bookmarkedItem function
  // Anonymous function is not possible, because removeEventListener needs a named function
  listDisplay.removeEventListener("click", controllerBookmarkItem);

  listDisplay.addEventListener("click", controllerBookmarkItem);
};

export default bookmarkItem;
