import allItemsActiveClass from "../../transversal-functions/render-all-items-list-active";
import deleteProjectDOM from "./delete-project-dom";
import deleteProjectFromArray from "./delete-project-array";
import removeAddItemButton from "../../transversal-functions/remove-add-item-button";
import renderListItems from "../../transversal-functions/render-list-items";
import renderListName from "../../transversal-functions/render-list-name";
import reverseSortItemsFunctions from "../../items/sort-items/sort-items-reverse/reverse-sort-items-functions";
import {
  allProjectsAllItemsArray,
  buildAllItemsArray,
} from "../../all-items/all-items-array";

// Delete Project from the Projects List
const deleteProject = () => {
  const projectListDiv = document.querySelector("#projects-list");

  // Add Delete function to all delete buttons
  projectListDiv.addEventListener("click", (event) => {
    if (event.target.className !== "delete-project-icon") {
      return;
    }

    deleteProjectDOM(event);
    deleteProjectFromArray(event);

    buildAllItemsArray();
    renderListName("All Todo");
    renderListItems(allProjectsAllItemsArray);
    removeAddItemButton();

    reverseSortItemsFunctions.removeSortItemsDropdownMenu(); // Remove Sorting Menu
    reverseSortItemsFunctions.removeAscendingDescendingDiv(); // Remove Reverse Sorting Option
    allItemsActiveClass();
  });
};

export default deleteProject;
