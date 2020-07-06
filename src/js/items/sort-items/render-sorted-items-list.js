import { projectsArray } from "../../transversal-functions/projects-factory";
import sortItemsFunction from "./sort-items-function";

// Add Event Listener to Name, Due Date and Creation Date divs in the dropdown menu
// Then call sortItemsFunction
const renderSortedItemsList = () => {
  const sortItemsDropDownContent = document.querySelector(
    "#sort-items-dropdown-content",
  );

  sortItemsDropDownContent.addEventListener("click", (event) => {
    const projectID = document.querySelector("#open-add-item-modal-button")
      .dataset.projectReference;
    const listItemsProjectArray = projectsArray[projectID].itemsArray;
    const sortingType = event.target.id;

    // Sort Items List (by Name, Due Date, Creation Date)
    sortItemsFunction(listItemsProjectArray, sortingType);

    // Hide sortItemsDropdownContent
    const sortItemsDropdownContent = document.querySelector(
      "#sort-items-dropdown-content",
    );
    sortItemsDropdownContent.style.display = "none";
  });
};

export default renderSortedItemsList;
