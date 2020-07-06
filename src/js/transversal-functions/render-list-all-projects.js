import deleteIcon from "../../images/delete-icon.svg";
import projectsIcon from "../../images/projects-icon.svg";
import { projectsArray } from "./projects-factory";

// Display all projects from the projects array to the DOM
const renderListAllProjects = () => {
  const projectsList = document.querySelector("#projects-list");

  // Empties all the projects list HTML
  projectsList.innerHTML = "";

  // Iterates through the Projects Array
  projectsArray.forEach((item, index) => {
    // Set each project id
    projectsArray[index].id = index;

    // Add a <li> for each default project
    projectsList.insertAdjacentHTML(
      "beforeend",
      `<li class="projects-list-project-name" data-project-id="${index}">
                    <span class="project-name-and-icons">
                        <img class="projects-icon" src=${projectsIcon} alt="List Icon">
                    </span>
                    <span class="project-name-span">${projectsArray[index].name}</span>
                    <img class="delete-project-icon" src=${deleteIcon} alt="Delete Project Icon"></li>
                </li>
                <hr class="projects-list-hr">
                `,
    );
  });
};

export { projectsArray, renderListAllProjects };
