// Remove the text which was entered on the Search Bar
const removeSearchText = () => {
  const searchBox = document.querySelector("#search-box");
  searchBox.value = "";
};

export default removeSearchText;
