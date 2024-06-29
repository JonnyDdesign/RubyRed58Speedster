// Get modal element
var modal = document.getElementById("imageModal");

// Get modal image and caption
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

// Get all images in the gallery
var images = document.querySelectorAll('.photoGallery img');

// Add click event listener to each image
images.forEach(function(img) {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Get the close button
var closeBtn = document.getElementsByClassName("close")[0];

// Add click event listener to the close button
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Scroll and reveal effect
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight) {
                element.classList.add('revealed');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on page load in case elements are already in view
});