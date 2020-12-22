import renderListItems from "../../transversal-functions/render-list-items";
import reverseSortItemsFunctions from "./sort-items-reverse/reverse-sort-items-functions";

// Sort Items List (by name, due date, creation date)

const sortItemsFunction = (listArray, typeOfSorting) => {
  let sortedArray = [];
  sortedArray = listArray.slice();

  if (typeOfSorting === "name-sort") {
    sortedArray = sortedArray.sort((a, b) =>
      a.name.localeCompare(
        b.name,
        "fr",
        { numeric: true },
        { ignorePunctuation: true },
      ),
    );
  } else if (typeOfSorting === "due-date-sort") {
    sortedArray = sortedArray.sort(
      (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
    );
  } else if (typeOfSorting === "creation-date-sort") {
    sortedArray = sortedArray.sort((a, b) =>
      a.name.localeCompare(
        b.name,
        "fr",
        { numeric: true },
        { ignorePunctuation: true },
      ),
    );
    sortedArray.sort((a, b) => a.itemID - b.itemID);
  }

  // Render the sorted items list
  renderListItems(sortedArray);
  // Add Event Listener to the Chevron Icon --> Display Reverse Sorted List
  reverseSortItemsFunctions.reverseDisplayedList(sortedArray);
};

export default sortItemsFunction;
