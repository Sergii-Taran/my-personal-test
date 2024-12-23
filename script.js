const openModalBtn = document.querySelector(".hero-btn");
const closeModalBtn = document.querySelector(".modal-close-btn");
const modalBackdrop = document.querySelector(".backdrop");

function openModal() {
  modalBackdrop.classList.add("is-visible");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalBackdrop.classList.remove("is-visible");
  setTimeout(() => {
    modalBackdrop.style.display = "none";
    document.body.style.overflow = "";
  }, 400);

  openModalBtn.blur();
}

openModalBtn.addEventListener("click", () => {
  modalBackdrop.style.display = "flex";
  setTimeout(openModal, 10);
});

closeModalBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    modalBackdrop.classList.contains("is-visible")
  ) {
    closeModal();
  }
});
