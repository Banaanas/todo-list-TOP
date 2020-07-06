// Add Project Modal
const addProjectModal = () => {
  const addProjectButton = document.querySelector("#add-project-container");
  const addProjectModalDOM = document.querySelector("#add-project-modal");
  const closeProjectModal = document.querySelector("#close-project-modal");

  // Open the modal box
  addProjectButton.addEventListener("click", () => {
    addProjectModalDOM.style.display = "block";
  });

  // Close the modal box when clicked on X
  closeProjectModal.addEventListener("click", () => {
    addProjectModalDOM.style.display = "none";
  });
};

export default addProjectModal;
