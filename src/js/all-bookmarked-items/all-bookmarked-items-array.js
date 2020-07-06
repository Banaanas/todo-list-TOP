import { projectsArray } from "../transversal-functions/projects-factory";

// Build an array with all Bookmarked Items from all Projects

// eslint-disable-next-line import/no-mutable-exports
let allProjectsAllBookmarkedItemsArray;

const buildAllBookmarkedItemsArray = () => {
  allProjectsAllBookmarkedItemsArray = [];

  // Iterates trough each project
  projectsArray.forEach((element) => {
    // Iterates trough each item of each project and pushes each item into allProjectsAllItemsArray
    element.itemsArray.forEach((item) => {
      if (item.bookmark === true) {
        allProjectsAllBookmarkedItemsArray.push(item);
      }
    });
  });
};

export { buildAllBookmarkedItemsArray, allProjectsAllBookmarkedItemsArray };
