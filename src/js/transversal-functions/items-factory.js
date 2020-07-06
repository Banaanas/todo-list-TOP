// Function Factory - Creates Item
function CreateItem(
  itemID,
  projectID,
  name,
  dueDate,
  priority,
  description,
  complete,
  bookmark,
) {
  return {
    itemID,
    projectID,
    name,
    dueDate,
    priority,
    description,
    complete,
    bookmark,
  };
}

export default CreateItem;
