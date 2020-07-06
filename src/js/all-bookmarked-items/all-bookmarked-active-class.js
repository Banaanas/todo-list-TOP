// // Add Active Class when click on All Items List
const bookmarkedItemsActiveClass = () => {
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

  // Remove Active Class from All Items List if there is one
  const allBookmarkedItems = document.querySelector(
    ".all-items-and-bookmarked-active",
  );
  if (allBookmarkedItems) {
    allBookmarkedItems.classList.replace(
      "all-items-and-bookmarked-active",
      "all-items-and-bookmarked",
    );
  }

  // Add Active Class to All Projects List
  const allItemsAndBookmarked = document.querySelectorAll(
    ".all-items-and-bookmarked",
  );
  allItemsAndBookmarked[1].classList.replace(
    "all-items-and-bookmarked",
    "all-items-and-bookmarked-active",
  );
};

export default bookmarkedItemsActiveClass;
