// Display the name of the Displayed List
const renderListName = (listName) => {
  // Get list Items Display
  const listDisplayName = document.querySelector("#list-display-name");
  // Remove everything from List Display DOM
  listDisplayName.innerHTML = "";

  // Insert Project's name to the DOM - <h1>
  listDisplayName.insertAdjacentHTML("beforeend", `${listName}`);
};

export default renderListName;
