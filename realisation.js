document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-detail");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".modal .close");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add("show");
            }
        });
    });

    closeButtons.forEach((close) => {
        close.addEventListener("click", () => {
            const modal = close.closest(".modal");
            if (modal) {
                modal.classList.remove("show");
            }
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("show");
            }
        });
    });
});
