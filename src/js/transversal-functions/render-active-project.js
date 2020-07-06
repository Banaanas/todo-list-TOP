// Add Active Class when click on a Project
const toggleActiveProject = () => {
  const allDisplayedProjects = document.querySelector("#projects-list");

  allDisplayedProjects.addEventListener("click", (event) => {
    // Doesn't work when Deleting Project, because allItemsActiveClass function must work
    if (event.target.className === "delete-project-icon") {
      return;
    }

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

    // Add Active Class
    if (
      event.target.className !== "project-name-span"
      && event.target.className !== "projects-icon"
    ) {
      return;
    }

    if (event.target.className === "project-name-span") {
      event.target.parentNode.classList.replace(
        "projects-list-project-name",
        "projects-list-project-name-active",
      );
    } else if (
      event.target.parentNode.parentNode.className !== "projects-icon"
    ) {
      event.target.parentNode.classList.replace(
        "projects-list-project-name",
        "projects-list-project-name-active",
      );
    }
  });
};

export default toggleActiveProject;
