import flatpickr from "flatpickr";
import modifyItem from "./modify-item";
import { projectsArray } from "../../transversal-functions/projects-factory";

// Set the Add Item Modal
const modifyItemModal = () => {
  const listDisplay = document.querySelector("#list-display");
  listDisplay.addEventListener("click", (event) => {
    const closeModifyItemModal = document.querySelector("#close-item-modal");
    const modifyItemModalButton = document.querySelector("#add-item-button");
    const modifyItemModalTitle = document.querySelector("#item-modal-title");
    const modifyItemModalContainer = document.querySelector("#add-item-modal");
    const listDisplayName = document.querySelector("#list-display-name");

    if (event.target.className !== "item-modify-icon") {
      return;
    }
    // Add "modify-function" class to the displayed Name's List
    // addItemController() is disabled when listDisplayName contains this class
    listDisplayName.classList.add("modify-function");

    // Open the modal box
    modifyItemModalContainer.style.display = "block";

    // Change Modal Title and addItemModalButton innerHTML
    modifyItemModalTitle.innerHTML = "MODIFY TODO";
    modifyItemModalButton.innerHTML = "Confirm";

    // Get Project ID and Item ID from data-attribute
    const projectID =
      event.target.parentNode.parentNode.parentNode.dataset.projectId;
    const itemID = event.target.parentNode.parentNode.parentNode.dataset.itemId;

    // Select item's inputs
    const getItemName = document.querySelector("#item-name-input");
    const getItemDueDate = document.querySelector("#item-date-input");
    const getItemDescription = document.querySelector(
      "#item-description-input",
    );

    // Sets flatpickr for the dueDate input
    // Chosen date must be >= today
    flatpickr(getItemDueDate, {
      minDate: "today",
    });

    // Display all the values of the Item clicked ID into the Modify Modal
    getItemName.value = projectsArray[projectID].itemsArray[itemID].name;
    getItemDueDate.value = projectsArray[projectID].itemsArray[itemID].dueDate;
    getItemDescription.value =
      projectsArray[projectID].itemsArray[itemID].description;

    // Check the radio button of the Item's Priority
    const itemPriority = projectsArray[projectID].itemsArray[itemID].priority;
    let checkedPriority;

    if (itemPriority === "high") {
      checkedPriority = document.querySelector("#high-priority");
      checkedPriority.checked = true;
    } else if (itemPriority === "medium") {
      checkedPriority = document.querySelector("#medium-priority");
      checkedPriority.checked = true;
    } else if (itemPriority === "low") {
      checkedPriority = document.querySelector("#low-priority");
      checkedPriority.checked = true;
    }

    // Close the modal box when clicked on X
    closeModifyItemModal.addEventListener("click", () => {
      // Close the Modal
      modifyItemModalContainer.style.display = "none";

      // Remove EventListener
      // eslint-disable-next-line no-use-before-define
      modifyItemForm.removeEventListener("submit", modifyItem);

      // Change Modal Title and addItemModalButton innerHTML back to Add Item Modal
      modifyItemModalTitle.innerHTML = "NEW TODO";
      modifyItemModalButton.innerHTML = "Add";
      getItemName.value = "";
      getItemDescription.value = "";

      // Uncheck the priority (for Add Item Modal to have an unchecked priority option)
      checkedPriority.checked = false;

      // Remove "modify-function" class to reactivates the Add Item Function
      // addItemController() is disabled when listDisplayName contains this class
      listDisplayName.classList.remove("modify-function");
    });

    // Add Event Listener to Modify Item Submit Button
    let modifyItemForm = document.querySelector("#item-modal-form");
    modifyItemForm.addEventListener("submit", modifyItem);
  });
};

export default modifyItemModal;
