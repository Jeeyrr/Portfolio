document.addEventListener("DOMContentLoaded", () => {
    const sortDateBtn = document.getElementById("sort-date");
    const sortNoteBtn = document.getElementById("sort-note");
    const cardsContainer = document.querySelector(".realisation-container");
    const cards = Array.from(cardsContainer.querySelectorAll(".realisation-card"));
    const buttons = document.querySelectorAll(".btn-detail");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".modal .close");

    let isDateAsc = true;
    let isNoteAsc = true;

    sortDateBtn.addEventListener("click", () => {
        cards.sort((a, b) => {
            const dateA = extractDate(a.querySelector("p").textContent);
            const dateB = extractDate(b.querySelector("p").textContent);
            return isDateAsc ? dateA - dateB : dateB - dateA;
        });
        isDateAsc = !isDateAsc;
        updateCards();
    });

    sortNoteBtn.addEventListener("click", () => {
        cards.sort((a, b) => {
            const noteA = extractNote(a.querySelector("p").textContent);
            const noteB = extractNote(b.querySelector("p").textContent);
            return isNoteAsc ? noteA - noteB : noteB - noteA;
        });
        isNoteAsc = !isNoteAsc;
        updateCards();
    });

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


    function extractDate(text) {
        const match = text.match(/Date\s:\s(\d{2}\/\d{2}\/\d{4})/);
        if (match) {
            const [day, month, year] = match[1].split("/").map(Number);
            return new Date(year, month - 1, day);
        }
        return new Date();
    }

    function extractNote(text) {
        const match = text.match(/Note\s:\s(\d+)/);
        return match ? parseInt(match[1]) : 0;
    }

    function updateCards() {
        cards.forEach(card => cardsContainer.appendChild(card));
    }
});
