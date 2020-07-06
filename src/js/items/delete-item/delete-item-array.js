import { projectsArray } from "../../transversal-functions/projects-factory";
import setLocalStorage from "../../transversal-functions/local-storage";

// Delete Item from Project's Items Array
const deleteItemArray = (eventDeleteButton) => {
  const projectID = eventDeleteButton.target.parentNode.parentNode.parentNode.dataset.projectId;
  const itemID = eventDeleteButton.target.parentNode.parentNode.parentNode.dataset.itemId;

  // Delete the Item's object from the Projects Array
  projectsArray[projectID].itemsArray.splice(itemID, 1);

  // Update each Project's Item ID after one has been deleted
  projectsArray[projectID].itemsArray.forEach((item, index) => {
    projectsArray[projectID].itemsArray[index].itemID = index;
  });

  setLocalStorage(projectsArray);
};

export default deleteItemArray;
