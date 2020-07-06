// Import flatpickr and flatpickr CSS
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/light.css";

// Set the Add Item Modal
const addItemModal = () => {
  const addItemModalDOM = document.querySelector("#add-item-modal");
  const closeAddItemModal = document.querySelector("#close-item-modal");
  const openAddItemModal = document.querySelector(
    "#open-add-item-modal-button",
  );

  openAddItemModal.addEventListener("click", () => {
    // Open the modal box
    addItemModalDOM.style.display = "block";

    // Sets flatpickr for the dueDate input
    const getItemDueDateFlatpickr = document.querySelector("#item-date-input");
    // Chosen date must be >= today
    flatpickr(getItemDueDateFlatpickr, {
      minDate: "today",
    });

    // Close the modal box when clicked on X
    closeAddItemModal.addEventListener("click", () => {
      addItemModalDOM.style.display = "none";

      const getItemName = document.querySelector("#item-name-input");
      const getItemDueDate = document.querySelector("#item-date-input");
      const getItemDescription = document.querySelector(
        "#item-description-input",
      );

      // Reset input fields
      getItemName.value = "";
      getItemDueDate.value = "";
      getItemDescription.value = "";

      // Uncheck the priority (for Add Item Modal to have an unchecked priority option)
      // Identify the radio button of the Item's Priority
      const getItemPriority = document.querySelector(
        "input[type=radio]:checked",
      );

      if (getItemPriority) {
        getItemPriority.checked = false;
      }
    });
  });
};

export default addItemModal;
