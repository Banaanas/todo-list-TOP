import { projectsArray } from "../../transversal-functions/projects-factory";
import addItemToArray from "./add-item-array";
import renderListItems from "../../transversal-functions/render-list-items";
import setLocalStorage from "../../transversal-functions/local-storage";

const addItemController = (event) => {
  event.preventDefault();

  const addItemButton = document.querySelector("#add-item-button");
  const addItemModalTitle = document.querySelector("#item-modal-title");
  const listDisplayName = document.querySelector("#list-display-name");

  // Disable AddItem Functions when the modal open is Modify Modal and not add Item Modal
  // (they share the same HTML structure)
  if (listDisplayName.classList.contains("modify-function")) {
    return;
  }

  // Change Modal Title and addItemModalButton innerHTML if already modified with Modify Modal
  addItemModalTitle.innerHTML = "NEW TODO";
  addItemButton.innerHTML = "Add";

  const projectID = document.querySelector("#open-add-item-modal-button")
    .dataset.projectReference;
  const newItemsListArray = projectsArray[projectID].itemsArray;

  addItemToArray(projectID, newItemsListArray);
  renderListItems(newItemsListArray);

  setLocalStorage(projectsArray);

  // Scroll down into Items List to the newly created Item
  const displayList = document.querySelector("#list-display");
  displayList.scrollTop = displayList.scrollHeight;
};

export default addItemController;
