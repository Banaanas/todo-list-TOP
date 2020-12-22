import addItemModal from "../../items/add-item/add-item-modal";
import { projectsArray } from "../../transversal-functions/projects-factory";
import removeSearchText from "../../items/search-item/remove-search-text-dom";
import renderAddItemButton from "../../transversal-functions/render-add-item-button";
import renderListItems from "../../transversal-functions/render-list-items";
import renderListName from "../../transversal-functions/render-list-name";
import renderSortItemsMenu from "../../items/sort-items/render-sort-items-menu";
import reverseSortItemsFunctions from "../../items/sort-items/sort-items-reverse/reverse-sort-items-functions";
import sortListItems from "../../items/sort-items/sort-list-items";

// Organize the Display Project Functionality
const displayProjectListController = (event) => {
  if (
    event.target.className !== "project-name-span" &&
    event.target.className !== "projects-icon"
  ) {
    return;
  }

  let projectID;
  if (event.target.className === "project-name-span") {
    projectID = event.target.parentElement.dataset.projectId;
  } else if (event.target.className === "projects-icon") {
    projectID = event.target.parentElement.parentElement.dataset.projectId;
  }

  const projectName = projectsArray[projectID].name;
  const listItemsProjectArray = projectsArray[projectID].itemsArray;

  renderListName(projectName);
  renderListItems(listItemsProjectArray);

  renderAddItemButton(projectID);
  renderSortItemsMenu();

  removeSearchText();
  addItemModal();

  sortListItems();
  reverseSortItemsFunctions.removeAscendingDescendingDiv();
};

export default displayProjectListController;
