const modal = document.querySelector(".popup");
const modalBtn = document.querySelector(".modal__btn");
const closeBtn = document.querySelector(".modal__close");

// Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

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