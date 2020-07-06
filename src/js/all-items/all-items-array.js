import { projectsArray } from "../transversal-functions/projects-factory";

// Build an array with all Items from all Projects

// eslint-disable-next-line import/no-mutable-exports
let allProjectsAllItemsArray;

const buildAllItemsArray = () => {
  allProjectsAllItemsArray = [];

  // Iterates trough each project
  projectsArray.forEach((item) => {
    // Iterates trough each item of each project and pushes each item into allProjectsAllItemsArray
    item.itemsArray.forEach((iteM) => {
      allProjectsAllItemsArray.push(iteM);
    });
  });
};

export { buildAllItemsArray, allProjectsAllItemsArray };
