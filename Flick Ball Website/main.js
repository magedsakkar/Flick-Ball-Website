let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

// Change slide automatically every 5 seconds
setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}, 5000);

// Initial setup
showSlide(slideIndex);
