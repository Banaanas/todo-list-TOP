// This function has been separated from the modifyItemModal function in order
// to avoid circular dependencies.
// 1 - modifyItemModal -> modifyItem -> modifyItemArray / modifyItemDOM
// 2 - modifyItem (which includes modifyItemArray / modifyItemDOM) --> modifyItemModal
// because targets object was also export from modifyItemModal to modifyItemArray / modifyItemDOM

const targetsObject = {};

const storeTargetsObject = () => {
  const listDisplay = document.querySelector("#list-display");
  listDisplay.addEventListener("click", (event) => {
    if (event.target.className !== "item-modify-icon") {
      return;
    }
    // Get Project ID and Item ID from data-attribute
    const projectID =
      event.target.parentNode.parentNode.parentNode.dataset.projectId;
    const itemID = event.target.parentNode.parentNode.parentNode.dataset.itemId;

    // eslint-disable-next-line max-len
    const modifiedNameDOM =
      event.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[5];
    // eslint-disable-next-line max-len
    const modifiedDateDOM =
      event.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[0];
    // eslint-disable-next-line max-len
    const modifiedPriorityDOM =
      event.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[1]
        .childNodes[1];

    // Store all the DOM links relative to the event in order to modify-item-dom in targetsObject
    targetsObject.projectID = projectID;
    targetsObject.itemID = itemID;
    targetsObject.modifiedNameDOM = modifiedNameDOM;
    targetsObject.modifiedDueDateDOM = modifiedDateDOM;
    targetsObject.modifiedPriorityDOM = modifiedPriorityDOM;
  });
};

export { storeTargetsObject, targetsObject };
