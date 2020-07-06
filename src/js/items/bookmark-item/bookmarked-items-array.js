import { projectsArray } from "../../transversal-functions/projects-factory";
import setLocalStorage from "../../transversal-functions/local-storage";

// Change / Toggle the clicked on Item's bookmark property --> True / False

const bookmarkItemArray = (IDProject, IDItem) => {
  if (
    projectsArray[IDProject].itemsArray[IDItem].bookmark === false
    || projectsArray[IDProject].itemsArray[IDItem].bookmark === undefined
  ) {
    projectsArray[IDProject].itemsArray[IDItem].bookmark = true;
  } else {
    projectsArray[IDProject].itemsArray[IDItem].bookmark = false;
  }

  setLocalStorage(projectsArray);
};

export default bookmarkItemArray;
