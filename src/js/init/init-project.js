import CreateItem from "../transversal-functions/items-factory";
import {
  CreateProject,
  projectsArray,
} from "../transversal-functions/projects-factory";

// Create Default Projects and Items to give the user a better UX
const initProject = () => {
  // Initiate with localStorage if there is one
  const isLocalStoragePresent = localStorage.getItem(
    "localStorageProjectsArray",
  );
  if (isLocalStoragePresent) {
    const localStorageProjectsArray = JSON.parse(isLocalStoragePresent);
    // Empty projectsArray from everything then push all localStorageProjectsArray into it
    projectsArray.splice(0, Infinity, ...localStorageProjectsArray);
    return;
  }

  // Create Default Projects
  const projectA = CreateProject(0, "Searching for a Job");
  const projectB = CreateProject(1, "Today's Tasks");

  // Push Default Projects into the Projects Array
  projectsArray.push(projectA);
  projectsArray.push(projectB);

  // Create Items - Function Factory

  const itemA1 = CreateItem(
    0,
    0,
    "Send applications - 📫",
    "2025-01-08",
    "high",
    "Sending application to companies I would like to work at.",
    true,
    true,
  );
  const itemA2 = CreateItem(
    1,
    0,
    "Talk to the Boss - 🗣️",
    "2025-05-01",
    "low",
    "Explain to the Boss that I want to find another job.",
    false,
    false,
  );
  const itemA3 = CreateItem(
    2,
    0,
    "Improve skills - 🤹🏽",
    "2025-09-15",
    "medium",
    "Improving skills to get a wage rise.",
    false,
    false,
  );
  const itemA4 = CreateItem(
    3,
    0,
    "Organize a party - 🎉",
    "2025-12-24",
    "high",
    "Christmas at Office",
    false,
    true,
  );

  const itemB1 = CreateItem(
    0,
    1,
    "Work-Out - 💪🏽",
    "2025-02-10",
    "medium",
    "Good for health!",
    true,
    true,
  );
  const itemB2 = CreateItem(
    1,
    1,
    "Meditate - 🧘🏽",
    "2025-02-10",
    "high",
    "Good for soul!",
    true,
    false,
  );
  const itemB3 = CreateItem(
    2,
    1,
    "Work - 🖥️",
    "2025-02-10",
    "medium",
    "Good for money!",
    false,
    true,
  );
  const itemB4 = CreateItem(
    3,
    1,
    "Sleep - 💤",
    "2025-02-10",
    "low",
    "Good for skin!",
    false,
    true,
  );

  // Push Items into their Project's Array
  projectsArray[0].itemsArray.push(itemA1);
  projectsArray[0].itemsArray.push(itemA2);
  projectsArray[0].itemsArray.push(itemA3);
  projectsArray[0].itemsArray.push(itemA4);

  projectsArray[1].itemsArray.push(itemB1);
  projectsArray[1].itemsArray.push(itemB2);
  projectsArray[1].itemsArray.push(itemB3);
  projectsArray[1].itemsArray.push(itemB4);
};

export default initProject;
