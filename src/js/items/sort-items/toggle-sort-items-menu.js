// Toggle sortItemsDropdownContent display (None - Flex)
const toggleSortItemsMenu = () => {
  const sortItemsProjectButton = document.querySelector(
    "#sort-items-project-icon",
  );

  // Opens and closes the dropdown menu when clicked on Sort Items Icon
  sortItemsProjectButton.addEventListener("click", () => {
    const sortItemsDropdownContent = document.querySelector(
      "#sort-items-dropdown-content",
    );

    if (sortItemsDropdownContent.style.display !== "flex") {
      sortItemsDropdownContent.style.display = "flex";

      // Close the sortItemsDropdownContent after it opened and whenever click
      // on the body (except"sort-items-project-icon")
      const body = document.querySelector("body");
      body.addEventListener("click", (event) => {
        if (event.target.id === "sort-items-project-icon") {
          return;
        }
        sortItemsDropdownContent.style.display = "none";
      });
    } else if (sortItemsDropdownContent.style.display === "flex") {
      sortItemsDropdownContent.style.display = "none";
    }
  });
};

export default toggleSortItemsMenu;
