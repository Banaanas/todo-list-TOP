import {
  allProjectsAllBookmarkedItemsArray,
  buildAllBookmarkedItemsArray,
} from "./all-bookmarked-items-array";
import bookmarkedItemsActiveClass from "./all-bookmarked-active-class";
import removeAddItemButton from "../transversal-functions/remove-add-item-button";
import removeSearchText from "../items/search-item/remove-search-text-dom";
import renderListItems from "../transversal-functions/render-list-items";
import renderListName from "../transversal-functions/render-list-name";
import reverseSortItemsFunctions from "../items/sort-items/sort-items-reverse/reverse-sort-items-functions";

// Display the list of All Bookmarked Items from all projects
const allBookmarkedItemsDisplay = () => {
  const allBookmarkedItemsIcon = document.querySelector(
    "#all-bookmarked-items-icon",
  );

  allBookmarkedItemsIcon.addEventListener("click", () => {
    buildAllBookmarkedItemsArray();
    removeAddItemButton();
    renderListName("Bookmarked Todo");
    renderListItems(allProjectsAllBookmarkedItemsArray);
    removeSearchText();
    bookmarkedItemsActiveClass();
    reverseSortItemsFunctions.removeSortItemsDropdownMenu(); // Remove Sorting Menu
    reverseSortItemsFunctions.removeAscendingDescendingDiv(); // Remove Reverse Sorting Option
  });
};

export default allBookmarkedItemsDisplay;
