import "./styles/add-item-modal.css";
import "./styles/add-project-modal.css";
import "./styles/index.css";
import "./styles/items-list.css";
import "./styles/normalize.css";
import "./styles/side-menu.css";
import addItem from "./js/items/add-item/add-item";
import { addProject } from "./js/projects/add-project/add-project";
import addProjectModal from "./js/projects/add-project/add-project-modal";
import allBookmarkedItemsDisplay from "./js/all-bookmarked-items/all-bookmarked-items";
import allItemsDisplay from "./js/all-items/all-items";
import deleteItem from "./js/items/delete-item/delete-item";
import deleteProject from "./js/projects/delete-project/delete-project";
import descriptionItemRemove from "./js/items/description.item/description-item-remove";
import displayProjectList from "./js/projects/display-project/display-project";
import initPage from "./js/init/init";
import modifyItemModal from "./js/items/modify-item/modify-item-modal";
import nameProjectMediaQuery from "./js/transversal-functions/name-project-media-query";
import searchItem from "./js/items/search-item/search-item";
import toggleActiveProject from "./js/transversal-functions/render-active-project";
import toggleSideNav from "./js/dom/side-menu";
import { storeTargetsObject } from "./js/items/modify-item/store-targets-object";

addProjectModal();
addProject();
deleteProject();
displayProjectList();

addItem();
deleteItem();
modifyItemModal();

allItemsDisplay();
allBookmarkedItemsDisplay();
toggleActiveProject();
toggleSideNav();
searchItem();

descriptionItemRemove();
initPage();
nameProjectMediaQuery();

storeTargetsObject();
