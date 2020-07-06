import completedItemIcon from "../../../images/completed-icon.svg";
import uncompletedLowPriorityItemIcon from "../../../images/uncompleted-low-priority-icon.svg";
import uncompletedMediumPriorityItemIcon from "../../../images/uncompleted-medium-priority-icon.svg";
import uncompletedHighPriorityItemIcon from "../../../images/uncompleted-high-priority-icon.svg";
import { projectsArray } from "../../transversal-functions/projects-factory";

// Toggle Item's Unchecked / Incomplete Icons (from Item's object property)
const completeItemDOM = (IDProject, IDItem, event) => {
  const uncompletedIconPriority = event.target.parentNode.childNodes[1].childNodes[1];
  const itemPriority = projectsArray[IDProject].itemsArray[IDItem].priority;
  const itemCompleted = projectsArray[IDProject].itemsArray[IDItem].complete;

  // Set unchecked Item Icon
  if (itemCompleted === false) {
    // Set green, orange or red priority input icon
    if (itemPriority === "low") {
      uncompletedIconPriority.src = uncompletedLowPriorityItemIcon;
    } else if (itemPriority === "medium") {
      uncompletedIconPriority.src = uncompletedMediumPriorityItemIcon;
    } else if (itemPriority === "high") {
      uncompletedIconPriority.src = uncompletedHighPriorityItemIcon;
    }
    // Set completedIcon
  } else if (itemCompleted === true) {
    uncompletedIconPriority.src = completedItemIcon;
  }
};

export default completeItemDOM;
