import ascendingSortIcon from "../../../../images/ascending-sort-icon.svg";
import descendingSortIcon from "../../../../images/descending-sort-icon.svg";
import renderListItems from "../../../transversal-functions/render-list-items";

// Object with all reverse sorting functions
const reverseSortItemsFunctions = {
  // Add Event Listener to the Chevron Icon - Display Reverse Sorted List -
  reverseDisplayedList(arraySorted) {
    const ascendingDescendingIcon = document.querySelector(
      "#ascending-descending-icons",
    );

    ascendingDescendingIcon.addEventListener("click", (event) => {
      if (event.target.dataset.iconType === "descending-sort-icon") {
        arraySorted.reverse();
      } else if (event.target.dataset.iconType === "ascending-sort-icon") {
        arraySorted.reverse();
      }
      // Render the reverse displayed list
      renderListItems(arraySorted);
    });
  },

  // Toggle Ascending / Descending Sort Icon / Chevron when clicked on
  setToggleChevron() {
    const ascendingDescendingIcon = document.querySelector(
      "#ascending-descending-icons",
    );

    ascendingDescendingIcon.addEventListener("click", (event) => {
      if (event.target.dataset.iconType === "ascending-sort-icon") {
        ascendingDescendingIcon.src = descendingSortIcon;
        ascendingDescendingIcon.dataset.iconType = "descending-sort-icon";
      } else if (event.target.dataset.iconType === "descending-sort-icon") {
        ascendingDescendingIcon.src = ascendingSortIcon;
        ascendingDescendingIcon.dataset.iconType = "ascending-sort-icon";
      }
    });
  },

  // Display the "Sort by Name DueDate  Creation Date" span
  setReverseSortingDiv(name) {
    // Add Ascending / Descending Sort Div
    const sortAndAddButtonsContainer = document.querySelector(
      "#sort-items-dropdown-menu",
    );

    sortAndAddButtonsContainer.insertAdjacentHTML(
      "beforebegin",
      `<div id="ascending-descending-sort-container">
                <span >Sort by <span id="sort-kind-span">${name}</span></span>
                <span>
                    <img src="${ascendingSortIcon}" id="ascending-descending-icons" data-icon-type="ascending-sort-icon">
                </span>
              <div>`,
    );
  },

  // Remove AscendingDescending Div if there is already one
  removeAscendingDescendingDiv() {
    const ascendingDescendingSortContainer = document.querySelector(
      "#ascending-descending-sort-container",
    );

    if (ascendingDescendingSortContainer) {
      ascendingDescendingSortContainer.remove();
    }
  },

  // Remove sortItemsDropDownMenu Div if there is already one
  removeSortItemsDropdownMenu() {
    const sortItemsDropDownMenu = document.querySelector(
      "#sort-items-dropdown-menu",
    );
    // If there is already one sortItemsDropdownMenu, then removes it
    if (sortItemsDropDownMenu) {
      sortItemsDropDownMenu.remove();
    }
  },
};

export default reverseSortItemsFunctions;
