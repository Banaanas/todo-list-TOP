import reverseSortItemsFunctions from "./sort-items-reverse/reverse-sort-items-functions";
import renderSortedItemsList from "./render-sorted-items-list";

// Organize the Sort Items And Reverse Function
const sortItemsAndReverseSortItems = () => {
  const typesOfSorting = document.querySelectorAll(".sorting-types");

  typesOfSorting.forEach((item) => {
    item.addEventListener("click", () => {
      const sortingTypes = item.textContent;

      // Render the Sorted Items List and also Add Event Listener to
      // Chevron Icon to get the reverse displayed list
      renderSortedItemsList();
      // Remove the AscendingDescending Div if there is already one
      reverseSortItemsFunctions.removeAscendingDescendingDiv();
      // Display the "Sort by Name DueDate  Creation Date" span
      reverseSortItemsFunctions.setReverseSortingDiv(sortingTypes);
      // Toggle Ascending / Descending Sort Icon / Chevron when clicked on
      reverseSortItemsFunctions.setToggleChevron();
    });
  });
};

export default sortItemsAndReverseSortItems;
