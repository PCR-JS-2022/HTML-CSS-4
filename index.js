const modal = document.querySelector(".popup");
const modalBtn = document.querySelector(".modal__btn");
const closeBtn = document.querySelector(".modal__close");

// Events

document.addEventListener("DOMContentLoaded", function(event) {

  // Open
  function openModal() {
    modal.style.display = "block";
  }

  // Close
  function closeModal() {
    modal.style.display = "none";
  }

  // клик в пустом месте
  function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }

  modalBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", outsideClick);
});

