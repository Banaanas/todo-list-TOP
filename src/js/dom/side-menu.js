// Toggle Menu Width when click on the Menu Icon
const toggleSideNav = () => {
  const sideMenuIcon = document.querySelector("#menu-icon");
  const sideMenu = document.querySelector("#side-menu");

  sideMenuIcon.addEventListener("click", () => {
    const projectNameSpan = document.querySelectorAll(".project-name-span");
    const ascendingDescendingSortContainer = document.querySelector(
      "#ascending-descending-sort-container",
    );
    const minWidth = window.matchMedia("(min-width: 800px)");
    if (sideMenu.style.width !== "25%") {
      sideMenu.style.width = "25%";
      projectNameSpan.forEach((item, index) => {
        projectNameSpan[index].style.display = "block";
      });
      if (ascendingDescendingSortContainer) {
        ascendingDescendingSortContainer.style.display = "none";
      }
    } else {
      sideMenu.style.width = "20%";

      if (!minWidth.matches) {
        projectNameSpan.forEach((item, index) => {
          projectNameSpan[index].style.display = "none";
        });
      }

      if (ascendingDescendingSortContainer) {
        ascendingDescendingSortContainer.style.display = "block";
      }
    }
  });
};

export default toggleSideNav;
