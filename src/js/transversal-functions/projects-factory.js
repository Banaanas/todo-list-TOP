// Projects List Array
const projectsArray = [];

// Function Factory - Create Project
function CreateProject(id, name) {
  const itemsArray = [];
  return {
    id,
    name,
    itemsArray,
  };
}

export { CreateProject, projectsArray };
