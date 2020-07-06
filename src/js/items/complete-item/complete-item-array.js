import { projectsArray } from "../../transversal-functions/projects-factory";
import setLocalStorage from "../../transversal-functions/local-storage";

// Change / Toggle the clicked on Item's bookmark property

const completeItemArray = (IDProject, IDItem) => {
  if (projectsArray[IDProject].itemsArray[IDItem].complete === true) {
    projectsArray[IDProject].itemsArray[IDItem].complete = false;
  } else if (projectsArray[IDProject].itemsArray[IDItem].complete === false) {
    projectsArray[IDProject].itemsArray[IDItem].complete = true;
  }

  setLocalStorage(projectsArray);
};

export default completeItemArray;
