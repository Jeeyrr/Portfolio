document.getElementById('about-me-btn').addEventListener('click', function() {
    var aboutMeSection = document.getElementById('about-me-section');
    if (aboutMeSection.style.display === 'none' || aboutMeSection.style.display === '') {
        aboutMeSection.style.display = 'block';
    } else {
        aboutMeSection.style.display = 'none';
    }
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
