import {
  CreateProject,
  projectsArray,
} from "../../transversal-functions/projects-factory";
import setLocalStorage from "../../transversal-functions/local-storage";

// Add new Project to Projects Array
const addProjectToArray = () => {
  const addProjectModal = document.querySelector("#add-project-modal");
  const projectNameInputValue = document.querySelector("#project-name-input")
    .value;

  // Check if Project's Name has already been given
  let nameAlreadyExists = false;
  if (projectsArray.some((item) => item.name === projectNameInputValue)) {
    nameAlreadyExists = true;
  }

  // If Project's Name is an empty string or if Project's Name has already been given
  if (projectNameInputValue.length < 1 || nameAlreadyExists) {
    const projectModalContainer = document.querySelector(
      "#project-modal-content-container",
    );
    const projectModalForm = document.querySelector("#project-modal-form");

    // Removes precedent Alert Message Item if there is one
    const precedentAlertMessageProject = document.querySelector(
      "#alert-message-project",
    );
    if (precedentAlertMessageProject !== null) {
      precedentAlertMessageProject.remove();
    }

    // Create Alert Message Item and append it to the DOM
    const alertMessageProject = document.createElement("div");
    alertMessageProject.setAttribute("id", "alert-message-project");

    let alertMessageText;
    if (projectNameInputValue.length < 1) {
      alertMessageText = document.createTextNode(
        "Please, choose a name for your Project.",
      );
    } else if (nameAlreadyExists) {
      alertMessageText = document.createTextNode(
        "This name already exists. Please, choose another one for your project.",
      );
    }

    alertMessageProject.appendChild(alertMessageText);
    projectModalContainer.insertBefore(alertMessageProject, projectModalForm);

    // Remove Alert Item Message after 2 seconds
    setTimeout(() => {
      alertMessageProject.remove();
    }, 2000);

    return false;
  }

  // Creates new Project object
  const newProject = CreateProject(undefined, projectNameInputValue);

  // Add new Project to Projects Array
  projectsArray.push(newProject);

  // Close the Add Project Modal
  addProjectModal.style.display = "none"; // Close the modal box

  // Empty name input from Project Modal Name's input
  const projectNameInput = document.querySelector("#project-name-input");
  projectNameInput.value = "";

  setLocalStorage(projectsArray);
  return true;
};

export default addProjectToArray;
