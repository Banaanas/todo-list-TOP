import { projectsArray } from "../../transversal-functions/projects-factory";
import { targetsObject } from "./store-targets-object";
import setLocalStorage from "../../transversal-functions/local-storage";

const modifyItemArray = () => {
  const modifiedProjectID = targetsObject.projectID;
  const modifiedItemID = targetsObject.itemID;
  const modifiedItem = projectsArray[modifiedProjectID].itemsArray[modifiedItemID];
  const getItemName = document.querySelector("#item-name-input");
  const getItemNameValue = document.querySelector("#item-name-input").value;
  const getItemDueDate = document.querySelector("#item-date-input");
  const getItemPriority = document.querySelector("input[type=radio]:checked");
  const getItemDescription = document.querySelector("#item-description-input");

  // If Item's Name is an empty string, display an alert message
  if (getItemNameValue.length < 1) {
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

    if (getItemNameValue.length < 1) {
      alertMessageText = document.createTextNode(
        "Please, choose a Name for your Item.",
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

  // Modify Item's name, priority and description
  modifiedItem.name = getItemName.value;
  modifiedItem.dueDate = getItemDueDate.value;
  modifiedItem.description = getItemDescription.value;
  modifiedItem.priority = getItemPriority.value;

  setLocalStorage(projectsArray);
};

export default modifyItemArray;
