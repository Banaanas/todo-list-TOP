import {
  buildAllItemsArray,
  allProjectsAllItemsArray,
} from "../../all-items/all-items-array";
import renderListName from "../../transversal-functions/render-list-name";
import renderListItems from "../../transversal-functions/render-list-items";

// Display the list of all Items corresponding to the Search
const searchItem = () => {
  const searchBox = document.querySelector("#search-box");

  searchBox.addEventListener("keyup", () => {
    let searchBoxValue = document.querySelector("#search-box").value;
    searchBoxValue = searchBoxValue.toLowerCase();

    // Sets the array of the letters entered as a Search
    const searchBoxItemsArray = [];

    // Build Array of all projects items and render the Search Results List Name
    buildAllItemsArray();

    /* Render "Search Results" if there is an input
      Render "All Todoo" if there is no input after DEL key
      has been used and No Search has been done */
    if (searchBoxValue === "") {
      renderListName("All Todo");
    } else {
      renderListName("Search Results");
    }

    // Pushes all items corresponding to the search into the searchBoxItemsArray
    allProjectsAllItemsArray.forEach((item) => {
      if (item.name.toLowerCase().includes(searchBoxValue)) {
        searchBoxItemsArray.push(item);
      }
    });

    // Display the Searched Items Result
    renderListItems(searchBoxItemsArray);

    // If there is no result
    if (searchBoxItemsArray.length === 0 && searchBoxValue.length > 0) {
      renderListName("No Results");
    }
  });
};

export default searchItem;
