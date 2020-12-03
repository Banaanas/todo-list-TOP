import CreateItem from "../../transversal-functions/items-factory";

// Adds the new Item to the Project's Items Array
const addItemToArray = (IDProject, itemsArray) => {
  const addItemModal = document.querySelector("#add-item-modal");
  const getItemName = document.querySelector("#item-name-input");
  const getItemNameValue = document.querySelector("#item-name-input").value;
  const getItemDueDate = document.querySelector("#item-date-input");
  const getItemPriority = document.querySelector("input[type=radio]:checked");
  const getItemDescription = document.querySelector("#item-description-input");

  /*
     ALERT MESSAGE
     If Item's Name is an empty string or if no date and priority or have been set
     */
  if (
    getItemNameValue.length < 1 ||
    getItemPriority === null ||
    getItemDueDate.value === ""
  ) {
    const itemModalContainer = document.querySelector(
      "#item-modal-content-container",
    );

    // Remove precedent Alert Message Project if there is one
    const precedentAlertMessageItem = document.querySelector(
      "#alert-message-item",
    );
    if (precedentAlertMessageItem !== null) {
      precedentAlertMessageItem.remove();
    }

    // Create Alert Message Project and append it to the DOM
    const alertMessageItem = document.createElement("div");
    alertMessageItem.setAttribute("id", "alert-message-item");

    let alertMessageText;

    if (
      getItemNameValue.length < 1 &&
      getItemPriority === null &&
      getItemDueDate.value === ""
    ) {
      alertMessageText = document.createTextNode(
        "Please, choose a Name, a Date and a Priority for your Item.",
      );
    } else if (getItemNameValue.length < 1 && getItemPriority === null) {
      alertMessageText = document.createTextNode(
        "Please, choose a Name and a Priority for your Item.",
      );
    } else if (getItemNameValue.length < 1 && getItemDueDate.value === "") {
      alertMessageText = document.createTextNode(
        "Please, choose a Name and a Date for your Item.",
      );
    } else if (getItemPriority === null && getItemDueDate.value === "") {
      alertMessageText = document.createTextNode(
        "Please, choose a Date and a Priority for your Item.",
      );
    } else if (getItemNameValue.length < 1) {
      alertMessageText = document.createTextNode(
        "Please, choose a Name for your Item.",
      );
    } else if (getItemPriority === null) {
      alertMessageText = document.createTextNode(
        "Please, choose a Priority for your Item.",
      );
    } else if (getItemDueDate.value === "") {
      alertMessageText = document.createTextNode(
        "Please, choose a Date for your Item.",
      );
    }

    alertMessageItem.appendChild(alertMessageText);
    itemModalContainer.appendChild(alertMessageItem);
    // Remove Alert Div Message after 2 seconds
    setTimeout(() => {
      alertMessageItem.remove();
    }, 2000);

    return;
  }

  // Creates new Item
  const itemCreated = CreateItem();

  // Sets Item's name, priority and description
  itemCreated.name = getItemName.value;
  itemCreated.dueDate = getItemDueDate.value;
  itemCreated.priority = getItemPriority.value;
  itemCreated.description = getItemDescription.value;
  itemCreated.complete = false;

  // Pushes new Item to Project's Items Array
  itemsArray.push(itemCreated);
  itemsArray.forEach((item, index) => {
    // Sets Item's ID for each Project's Items array
    item.itemID = index;
    // Sets Item's project ID for each Project's Items array
    item.projectID = IDProject;
  });

  // Close the modal box
  addItemModal.style.display = "none";

  // Reset input fields
  getItemName.value = "";
  getItemDueDate.value = "";
  getItemDescription.value = "";

  // Uncheck the priority (for Add Item Modal to have an unchecked priority option)
  // Identify the radio button of the Item's Priority
  const itemPriority = document.querySelector("input[type=radio]:checked");
  itemPriority.checked = false;
};

export default addItemToArray;
