import addItemModal from "../../items/add-item/add-item-modal";
import addProjectToArray from "./add-project-array";
import addProjectToDom from "./add-project-dom";
import { projectsArray } from "../../transversal-functions/projects-factory";
import removeSearchText from "../../items/search-item/remove-search-text-dom";
import renderAddItemButton from "../../transversal-functions/render-add-item-button";
import renderListItems from "../../transversal-functions/render-list-items";
import renderListName from "../../transversal-functions/render-list-name";
import reverseSortItemsFunctions from "../../items/sort-items/sort-items-reverse/reverse-sort-items-functions";
import sortListItems from "../../items/sort-items/sort-list-items";

// Add New Project to the Projects List
const addProject = () => {
  const projectModalForm = document.querySelector("#project-modal-form");

  projectModalForm.addEventListener("submit", (event) => {
    event.preventDefault();

    addProjectToArray();
    addProjectToDom();

    renderListName(projectsArray[projectsArray.length - 1].name);
    renderListItems(projectsArray[projectsArray.length - 1].itemsArray);
    renderAddItemButton(projectsArray[projectsArray.length - 1].id);
    removeSearchText();
    addItemModal();

    sortListItems();
    reverseSortItemsFunctions.removeAscendingDescendingDiv();
  });
};

export { projectsArray, addProject };
