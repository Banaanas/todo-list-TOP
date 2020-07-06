import modifyItemArray from "./modify-item-array";
import modifyItemDOM from "./modify-item-dom";

// Set the Modify Item Function
const modifyItem = (event) => {
  const modifyItemForm = document.querySelector("#item-modal-form");
  const modifyItemModal = document.querySelector("#add-item-modal");
  const listDisplayName = document.querySelector("#list-display-name");
  const modifyItemModalTitle = document.querySelector("#item-modal-title");
  const modifyItemModalButton = document.querySelector("#add-item-button");
  const getItemName = document.querySelector("#item-name-input");
  const getItemDescription = document.querySelector("#item-description-input");
  const getItemNameValue = document.querySelector("#item-name-input").value;
  event.preventDefault(); // Submit Button
  modifyItemArray();

  // If Item's Name is an empty string, Return
  if (getItemNameValue.length < 1) {
    return;
  }
  modifyItemDOM();

  // Change Modal Title and addItemModalButton innerHTML back to Add Item Modal
  modifyItemModalTitle.innerHTML = "NEW TODO";
  modifyItemModalButton.innerHTML = "ADD";
  getItemName.value = "";
  getItemDescription.value = "";

  // Uncheck the priority (for Add Item Modal to have an unchecked priority option)
  // Identify the radio button of the Item's Priority
  const itemPriority = document.querySelector("input[type=radio]:checked");
  itemPriority.checked = false;

  // Remove "modify-function" class to reactivates the Add Item Function
  // addItemController() is disabled when listDisplayName contains this class
  listDisplayName.classList.remove("modify-function");

  // Close the modal box
  modifyItemModal.style.display = "none";

  // Remove EventListener
  modifyItemForm.removeEventListener("submit", modifyItem);
};

export default modifyItem;
