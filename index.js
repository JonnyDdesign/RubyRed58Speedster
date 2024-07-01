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

// Slideshow for metal work section
let slideIndex = 0;

    const changeSlide = (n) => {
        showSlides(slideIndex += n);
    };

    const showSlides = (n) => {
        let slides = document.querySelectorAll('.slideshow-container img');
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;
        slides.forEach(slide => slide.classList.remove('active'));
        slides[slideIndex].classList.add('active');
    };

    const autoShowSlides = () => {
        changeSlide(1);
        setTimeout(autoShowSlides, 5000); // Change image every 5 seconds
    };

    document.addEventListener('DOMContentLoaded', () => {
        autoShowSlides(); // Start the slideshow
    });