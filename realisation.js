document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-detail");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".modal .close");

    // Gestion des modales
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

    // Gestion des filtres de réalisation
    const filtreButtons = document.querySelectorAll(".filtre");
    const cards = document.querySelectorAll(".realisation-card");

    filtreButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filtre = button.getAttribute("data-filtre");

            cards.forEach(card => {
                if (card.classList.contains(filtre)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
// Ajout d'une classe "active" au bouton cliqué
filtreButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Retire la classe active de tous les boutons
        filtreButtons.forEach(btn => btn.classList.remove("active"));
        // Ajoute la classe active au bouton cliqué
        button.classList.add("active");
    });
});
function openModal() {
    document.getElementById('legalModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('legalModal').style.display = 'none';
}

// Ferme la modal si on clique en dehors
window.onclick = function(event) {
    const modal = document.getElementById('legalModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
