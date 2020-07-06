import { projectsArray } from "../../transversal-functions/projects-factory";
import setLocalStorage from "../../transversal-functions/local-storage";

// Delete Project from the Projects Array
const deleteProjectFromArray = (eventDeleteButton) => {
  // Select all data-id from all projects
  const allProjectsNames = document.querySelectorAll(
    ".projects-list-project-name",
  );

  // Update all data-id after one project was removed
  allProjectsNames.forEach((item, index) => {
    allProjectsNames[index].dataset.projectId = index;
  });

  // Delete the object from Projects Array
  projectsArray.splice(
    eventDeleteButton.target.parentNode.dataset.projectId,
    1,
  );

  // Update each project ID after one has been deleted inside projectsArray
  projectsArray.forEach((item, index) => {
    projectsArray[index].id = index;
  });

  // Update each project ID inside each Project's List Items Array
  projectsArray.forEach((item, index) => {
    const newProjectID = index;
    item.itemsArray.forEach((el) => {
      el.projectID = newProjectID;
    });
  });

  setLocalStorage(projectsArray);
};

export default deleteProjectFromArray;
