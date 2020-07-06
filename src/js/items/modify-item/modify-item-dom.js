import { projectsArray } from "../../transversal-functions/projects-factory";
import { targetsObject } from "./store-targets-object";
import completedItemIcon from "../../../images/completed-icon.svg";
import uncompletedLowPriorityItemIcon from "../../../images/uncompleted-low-priority-icon.svg";
import uncompletedMediumPriorityItemIcon from "../../../images/uncompleted-medium-priority-icon.svg";
import uncompletedHighPriorityItemIcon from "../../../images/uncompleted-high-priority-icon.svg";

// Change DOM for the Modified Item only
const modifyItemDOM = () => {
  const modifiedProjectID = targetsObject.projectID;
  const modifiedItemID = targetsObject.itemID;
  const modifiedItem = projectsArray[modifiedProjectID].itemsArray[modifiedItemID];
  const {
    modifiedNameDOM,
    modifiedDueDateDOM,
    modifiedPriorityDOM,
  } = targetsObject;
  // Modify Name and Due Date's Item DOM
  modifiedNameDOM.innerHTML = modifiedItem.name;
  modifiedDueDateDOM.textContent = modifiedItem.dueDate;

  // Modify Priority's Item's DOM / Icon
  if (modifiedItem.priority === "low") {
    modifiedPriorityDOM.src = uncompletedLowPriorityItemIcon;
  } else if (modifiedItem.priority === "medium") {
    modifiedPriorityDOM.src = uncompletedMediumPriorityItemIcon;
  } else if (modifiedItem.priority === "high") {
    modifiedPriorityDOM.src = uncompletedHighPriorityItemIcon;
  }

  // If item is complete:true, replace priority input icon by completed icon
  if (modifiedItem.complete === true) {
    modifiedPriorityDOM.src = completedItemIcon;
  }
};

export default modifyItemDOM;
