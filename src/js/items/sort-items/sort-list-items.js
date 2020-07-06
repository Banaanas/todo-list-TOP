import renderSortItemsMenu from "./render-sort-items-menu";
import toggleSortItemsMenu from "./toggle-sort-items-menu";
import sortItemsAndReverseSortItems from "./sort-items-and-reverse-sort-items";

// Set the sorting Items option(s)
const sortListItems = () => {
  renderSortItemsMenu(); // Add the sortItemsDropdownMenu
  toggleSortItemsMenu(); // Toggle sortItemsDropdownContent display (None - Flex)
  const body = document.querySelector("body");
  const sortItemsDropdownContent = document.querySelector(
    "#sort-items-dropdown-content",
  );

  // When sortItemsDropdownContent opened, whatever click outside
  // of it would "close" sortItemsDropdownContent again
  body.addEventListener("click", (event) => {
    if (
      sortItemsDropdownContent.style.display === "flex"
      && event.target.id !== "sort-items-project-icon"
    ) {
      sortItemsDropdownContent.style.display = "none";
    }
  });

  sortItemsAndReverseSortItems(); // Sets all the sorting items and reverse sorting items functions
};

export default sortListItems;
