// "All Items List" and "All Bookmarked List" must not have any openAddItemModalButton
// Removes openAddItemModalButton from those lists
const removeAddItemButton = () => {
  const addItemButtonModal = document.querySelector(
    "#open-add-item-modal-button",
  );

  // If there is already one addItemButtonModal, then removes it
  if (addItemButtonModal) {
    addItemButtonModal.remove();
  }
};

export default removeAddItemButton;
