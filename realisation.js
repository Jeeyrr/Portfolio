// realisation.js
document.addEventListener("DOMContentLoaded", () => {
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

            filtreButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});

function openModal() {
    document.getElementById('legalModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('legalModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('legalModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
