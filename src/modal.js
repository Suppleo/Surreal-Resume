let modalOverlay, modalContent, modalBody, modalClose;

export function initModal() {
  modalOverlay = document.getElementById("modal-overlay");
  modalContent = document.getElementById("modal-content");
  modalBody = document.getElementById("modal-body");
  modalClose = document.getElementById("modal-close");

  if (!modalOverlay || !modalContent || !modalBody || !modalClose) {
    console.error("Modal elements not found in DOM");
    return;
  }

  // Always ensure modal is hidden on startup
  modalOverlay.classList.add("modal-hidden");
  modalOverlay.classList.remove("modal-visible");

  // Close modal on close button click
  modalClose.addEventListener("click", hideModal);
  // Close modal on overlay click (but not when clicking inside modal content)
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      hideModal();
    }
  });

  console.log("Modal system initialized successfully");
}

export function showModal(contentHTML) {
  if (!modalOverlay || !modalBody) {
    console.error("Modal elements not available. Re-initializing...");
    initModal();
    if (!modalOverlay || !modalBody) {
      console.error("Modal elements still not found. Cannot show modal.");
      return;
    }
  }

  console.log("Showing modal with content:", contentHTML);
  modalBody.innerHTML = contentHTML;
  modalOverlay.classList.remove("modal-hidden");
  modalOverlay.classList.add("modal-visible");
}

export function hideModal() {
  if (!modalOverlay || !modalBody) return;
  modalOverlay.classList.add("modal-hidden");
  modalOverlay.classList.remove("modal-visible");
  modalBody.innerHTML = "";
}
