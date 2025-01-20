document.getElementById('about-me-btn').addEventListener('click', function() {
    var aboutMeSection = document.getElementById('about-me-section');
    if (aboutMeSection.style.display === 'none' || aboutMeSection.style.display === '') {
        aboutMeSection.style.display = 'block';
    } else {
        aboutMeSection.style.display = 'none';
    }
});