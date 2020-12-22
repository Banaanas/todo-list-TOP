import bookmarkFalseIcon from "../../../images/bookmark-false.svg";
import bookmarkTrueIcon from "../../../images/bookmark-true.svg";
import { projectsArray } from "../../transversal-functions/projects-factory";

// Toggle Item's Bookmark Icon (from Item's object property - item.bookmark)
const bookmarkItemDOM = (eventDeleteButton, IDProject, IDItem) => {
  if (
    projectsArray[IDProject].itemsArray[IDItem].bookmark === false ||
    projectsArray[IDProject].itemsArray[IDItem].bookmark === undefined
  ) {
    eventDeleteButton.target.src = bookmarkFalseIcon;
  } else {
    eventDeleteButton.target.src = bookmarkTrueIcon;
  }
};

export default bookmarkItemDOM;
