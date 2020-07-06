import displayProjectListController from "./display-project-controller";

// Display Project Items List when clicked on Project's Name
const displayProjectList = () => {
  const projectListDiv = document.querySelector("#projects-list");

  // Add Event Listener to all Project Names spans
  projectListDiv.removeEventListener("click", displayProjectListController);
  projectListDiv.addEventListener("click", displayProjectListController, false);
};

export default displayProjectList;
