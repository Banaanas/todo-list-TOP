import {
  allProjectsAllItemsArray,
  buildAllItemsArray,
} from "./all-items-array";
import removeAddItemButton from "../transversal-functions/remove-add-item-button";
import renderListItems from "../transversal-functions/render-list-items";
import renderListName from "../transversal-functions/render-list-name";
import removeSearchText from "../items/search-item/remove-search-text-dom";
import reverseSortItemsFunctions from "../items/sort-items/sort-items-reverse/reverse-sort-items-functions";
import allItemsActiveClass from "../transversal-functions/render-all-items-list-active";

// Display the list of all Items from all Projects
const allItemsDisplay = () => {
  const allItemsIcon = document.querySelector("#all-items-icon");

  allItemsIcon.addEventListener("click", () => {
    removeAddItemButton();
    removeSearchText();
    renderListName("All Todo");
    buildAllItemsArray();
    renderListItems(allProjectsAllItemsArray);
    allItemsActiveClass();

    reverseSortItemsFunctions.removeSortItemsDropdownMenu(); // Remove Sorting Menu
    reverseSortItemsFunctions.removeAscendingDescendingDiv(); // Remove Reverse Sorting Option
  });
};
export default allItemsDisplay;
