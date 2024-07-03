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

// Scroll and reveal effect for the images in the "tow" section
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

// Scroll and reveal effect for the images in the "deliveryGallery" class
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.deliveryGallery img');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) { // Adjust to reveal slightly before reaching the viewport
                element.classList.add('reveal');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on page load in case elements are already in view
});

// Slideshow for body work section
let slideIndex = 0;

function showSlide(n) {
    let slides = document.querySelectorAll('.slideshow-container img');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

function changeSlide(n) {
    let slides = document.querySelectorAll('.slideshow-container img');
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Auto scroll function
function autoScroll() {
    changeSlide(1);
}

// Set interval for auto-scrolling
setInterval(autoScroll, 3000); // Change image every 3 seconds

// Initial call to show the first slide
showSlide(slideIndex);