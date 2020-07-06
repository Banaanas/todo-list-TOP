import sortItemsIcon from "../../../images/sort-list-icon.svg";
import reverseSortItemsFunctions from "./sort-items-reverse/reverse-sort-items-functions";

// Add the sortItemsDropdownMenu
const renderSortItemsMenu = () => {
  const addItemButtonModal = document.querySelector(
    "#open-add-item-modal-button",
  );

  // If there is already one sortItemsDropdownMenu, then removes it
  reverseSortItemsFunctions.removeSortItemsDropdownMenu();

  // Add the sortItemsDropdownMenu adjacently to the addItemButtonModal
  addItemButtonModal.insertAdjacentHTML(
    "afterend",
    `<div id="sort-items-dropdown-menu">
                <img src="${sortItemsIcon}" id="sort-items-project-icon"/>
                <div id="sort-items-dropdown-content">
                    <div class="sorting-types" id="name-sort">Name</div>
                    <div class="sorting-types" id="due-date-sort">Due Date</div>
                    <div class="sorting-types" id="creation-date-sort">Creation Date</div>
                </div>    
              <div>`,
  );
};

export default renderSortItemsMenu;
