// Delete Project from Projects List DOM
const deleteProjectDOM = (eventDeleteButton) => {
  // Remove the <hr> first
  eventDeleteButton.target.parentElement.nextSibling.nextSibling.remove();
  // Remove the Project DOM
  eventDeleteButton.target.parentElement.remove();
};

export default deleteProjectDOM;
