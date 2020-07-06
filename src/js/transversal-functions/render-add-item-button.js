// Add an Ad Item Button when display one project List
// Each Add Item Button contains a data-attribute with the Project's ID
// Data-attribute will be used to identify into which project an Item will be add
const renderAddItemButton = (IDProject) => {
  const openAddItemModalButton = document.querySelector(
    "#open-add-item-modal-button",
  );

  // If there is already one openAddItemModalButton, then removes it
  if (openAddItemModalButton) {
    openAddItemModalButton.remove();
  }

  // Create the sortAndAddButtonsContainer
  const listDisplay = document.querySelector("#list-display");
  const sortAndAddButtonsContainer = document.createElement("div");
  sortAndAddButtonsContainer.setAttribute(
    "id",
    "sort-and-add-buttons-container",
  );
  listDisplay.prepend(sortAndAddButtonsContainer);

  // Add one openAddItemModalButton with project's ID as data-attribute
  // Data-attribute will be used to identify into which project an item will be add
  sortAndAddButtonsContainer.insertAdjacentHTML(
    "afterbegin",
    `<button id="open-add-item-modal-button" value="Add Item" data-project-reference="${IDProject}">ADD TODO</button>`,
  );
};

export default renderAddItemButton;
