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

// Slideshow for metal work and body work sections
let metalSlideIndex = 0;
let bodyworkSlideIndex = 0;

const changeSlide = (n, slideshowClass) => {
    if (slideshowClass === 'metal') {
        showSlides(metalSlideIndex += n, '.metal .slideshow-container img');
    } else if (slideshowClass === 'bodywork') {
        showSlides(bodyworkSlideIndex += n, '.bodywork .slideshow-container img');
    }
};

const showSlides = (n, slideshowSelector) => {
    let slides = document.querySelectorAll(slideshowSelector);
    if (n >= slides.length) {
        if (slideshowSelector === '.metal .slideshow-container img') {
            metalSlideIndex = 0;
        } else if (slideshowSelector === '.bodywork .slideshow-container img') {
            bodyworkSlideIndex = 0;
        }
    }
    if (n < 0) {
        if (slideshowSelector === '.metal .slideshow-container img') {
            metalSlideIndex = slides.length -1;
        } else if (slideshowSelector === '.bodywork .slideshow-container img') {
            bodyworkSlideIndex = slides.length - 1;
        }
    }
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
};

const autoShowSlides = () => {
    changeSlide(1, 'metal');
    changeSlide(1, 'bodywork');
    setTimeout(autoShowSlides, 5000); // Change image every 5 seconds
};

document.addEventListener('DOMContentLoaded', () => {
    showSlides(metalSlideIndex, '.metal .slideshow-container img'); // Display the first slide for metal
    showSlides(bodyworkSlideIndex, '.bodywork .slideshow-container img'); // Display the first slide for bodywork
    autoShowSlides(); // Start the slideshow
});