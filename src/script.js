document.querySelectorAll("[data-dialog-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-dialog-target");
      const dialog = document.querySelector(`[data-dialog="${target}"]`);
      const backdrop = document.querySelector(`[data-dialog-backdrop="${target}"]`);
      if (dialog && backdrop) {
        dialog.classList.remove("opacity-0", "pointer-events-none");
        backdrop.classList.remove("opacity-0", "pointer-events-none");
      }
    });
  });
  
  document.querySelectorAll("[data-dialog-close]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = button.closest("[data-dialog]");
      const backdrop = document.querySelector(`[data-dialog-backdrop="${dialog.getAttribute("data-dialog")}"]`);
      if (dialog && backdrop) {
        dialog.classList.add("opacity-0", "pointer-events-none");
        backdrop.classList.add("opacity-0", "pointer-events-none");
      }
    });
  });
  