import {
  allProjectsAllItemsArray,
  buildAllItemsArray,
} from "../all-items/all-items-array";
import initProject from "./init-project";
import removeAddItemButton from "../transversal-functions/remove-add-item-button";
import renderListItems from "../transversal-functions/render-list-items";
import renderListName from "../transversal-functions/render-list-name";
import { renderListAllProjects } from "../transversal-functions/render-list-all-projects";

// Sets the Initial Loading Page
const initPage = () => {
  initProject();
  renderListAllProjects();
  buildAllItemsArray();
  renderListName("All Todo");
  renderListItems(allProjectsAllItemsArray);
  removeAddItemButton();

  // Add Active Class to All Projects List
  const allItemsAndBookmarked = document.querySelectorAll(
    ".all-items-and-bookmarked",
  );
  allItemsAndBookmarked[0].classList.replace(
    "all-items-and-bookmarked",
    "all-items-and-bookmarked-active",
  );
};

export default initPage;
