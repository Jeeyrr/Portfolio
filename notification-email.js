//ouvrir le lightbox avec l'image cliquée
function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  }
  
  //fermer le lightbox
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  
  // Fermer si on clique en dehors de l'image
  window.addEventListener("click", function (e) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    if (e.target === lightbox && e.target !== img) {
      closeLightbox();
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
