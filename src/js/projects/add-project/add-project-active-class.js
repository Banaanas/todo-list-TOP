// Add Active Class (Display) to the newly created Project
const addProjectActiveClass = () => {
  // Remove Active Class if one Project already has the active class
  const activeProject = document.querySelector(
    ".projects-list-project-name-active",
  );

  if (activeProject) {
    activeProject.classList.replace(
      "projects-list-project-name-active",
      "projects-list-project-name",
    );
  }

  // Remove Active Class from All Items List or Bookmarked Items if there is one
  const allItemsAndBookmarked = document.querySelector(
    ".all-items-and-bookmarked-active",
  );
  if (allItemsAndBookmarked) {
    allItemsAndBookmarked.classList.replace(
      "all-items-and-bookmarked-active",
      "all-items-and-bookmarked",
    );
  }

  // Add Active Class to new created Project
  const allProjectDisplayed = document.querySelectorAll(
    ".projects-list-project-name",
  );
  allProjectDisplayed[allProjectDisplayed.length - 1].classList.replace(
    "projects-list-project-name",
    "projects-list-project-name-active",
  );

  // Scroll down into Projects List to the newly created Project
  const projectsList = document.querySelector("#projects-list");
  projectsList.scrollTop = projectsList.scrollHeight;
};

export default addProjectActiveClass;
