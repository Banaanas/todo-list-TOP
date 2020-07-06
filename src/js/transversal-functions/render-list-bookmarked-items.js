import bookmarkTrueIcon from "../../images/bookmark-true.svg";

// Render the bookmarkTrueIcon for each List's Bookmarked Item
const renderListBookmarkedItems = (listArray) => {
  const allItemsDOM = document.querySelectorAll(".item-details");

  listArray.forEach((item, index) => {
    if (item.bookmark === true) {
      allItemsDOM[
        index
      ].childNodes[5].childNodes[3].childNodes[0].src = bookmarkTrueIcon;
    }
  });
};

export default renderListBookmarkedItems;
