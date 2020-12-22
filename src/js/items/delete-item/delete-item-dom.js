// Delete Items from List Items Display
const deleteItemDOM = (eventDeleteButton) => {
  const projectID =
    eventDeleteButton.target.parentNode.parentNode.parentNode.dataset.projectId;

  // Remove the List Item Details (<li>) from the Displayed List
  eventDeleteButton.target.parentNode.parentNode.parentNode.remove();

  /* Each Items Details <li> has a 'data-attribute = itemID' which must be updated
  when it's removed from the DOM. Because the Delete Function can also be used from
  the "All Items List" and the "All Bookmarked List", it was mandatory to first querySelectorAll
  same Item Details <li> from the EXACT SAME PROJECT ("All Items List" and "All Bookmarked List"
  merge Items from all Projects ) */

  // Select all List Item Details (<li>) from the EXACT SAME PROJECT
  const allItemDetailsDiv = document.querySelectorAll(
    `[data-project-id="${projectID}"]`,
  );

  // Using Rest Parameter to destructure the obtained allItemDetailsDiv NodeList
  // and exclude the first element. Because First Element from allItemDetailsDiv
  // will always be a Project List <li> (on the side Menu) as they contain
  // the same data-attribute than Items Details <li>

  const [, ...restElements] = allItemDetailsDiv;
  restElements.forEach((item, index) => {
    item.dataset.itemId = index;
  });
};

export default deleteItemDOM;
