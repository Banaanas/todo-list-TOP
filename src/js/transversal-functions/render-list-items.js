import bookmarkFalseIcon from "../../images/bookmark-false.svg";
import completedItemIcon from "../../images/completed-icon.svg";
import deleteIcon from "../../images/delete-icon.svg";
import descriptionIcon from "../../images/description-icon.svg";
import modifyIcon from "../../images/modify-icon.svg";
import uncompletedHighPriorityItemIcon from "../../images/uncompleted-high-priority-icon.svg";
import uncompletedLowPriorityItemIcon from "../../images/uncompleted-low-priority-icon.svg";
import uncompletedMediumPriorityItemIcon from "../../images/uncompleted-medium-priority-icon.svg";
import bookmarkItem from "../items/bookmark-item/bookmark-item";
import completeItem from "../items/complete-item/complete-item";
import descriptionItem from "../items/description.item/description-item";
import renderListBookmarkedItems from "./render-list-bookmarked-items";

// Display the list of all the array's items (All Items, Bookmarked Items, each Project)
const renderListItems = (listArray) => {
  const listAllProjectItems = document.querySelector("#list-all-project-items");
  listAllProjectItems.innerHTML = "";

  listArray.forEach((item, index) => {
    let uncompletedIconPriority;

    // Set green, orange or red priority input icon
    if (item.priority === "low") {
      uncompletedIconPriority = uncompletedLowPriorityItemIcon;
    } else if (item.priority === "medium") {
      uncompletedIconPriority = uncompletedMediumPriorityItemIcon;
    } else if (item.priority === "high") {
      uncompletedIconPriority = uncompletedHighPriorityItemIcon;
    }

    // If Item is complete:true, replace priority input icon by Completed Icon
    if (item.complete === true) {
      uncompletedIconPriority = completedItemIcon;
    }

    // Insert all Project's Items to the DOM
    listAllProjectItems.insertAdjacentHTML(
      "beforeend",
      ` <li class="item-details" data-item-id=${item.itemID} data-project-id=${item.projectID}>
                    <span class ="item-name-and-checkbox">
                        <label class="unchecked-item" for="completed-item-${index}" > 
                            <img class="unchecked-priority-icon" src=${uncompletedIconPriority}>
                        </label>
                        <input id="completed-item-${index}" class="completed-checkbox" type="checkbox" name="item-name">
                        <span class="item-name" >${item.name}</span>
                    </span>
                    <span class="item-due-date">${item.dueDate}</span>
                    <span class="item-actions">
                        <span class="item-description"><img class="item-description-icon" src=${descriptionIcon} data-item-id="${item.itemID}"></span>
                        <span class="item-bookmark"><img class="item-bookmark-icon" src=${bookmarkFalseIcon}></span>
                        <span class="item-modify"><img class="item-modify-icon" src=${modifyIcon} alt="Modify Icon"></span>
                        <span class="item-delete"><img class="item-delete-icon" src=${deleteIcon} alt="Delete Icon"></span>
                    </span>
              </li>`,
    );
  });

  renderListBookmarkedItems(listArray); // Add a bookmarkTRUEIcon for each bookmarked icon
  bookmarkItem(); // Set the Bookmark option
  descriptionItem(); // Set the Description / Info functionality
  completeItem(); // Set the Complete option
};

export default renderListItems;
