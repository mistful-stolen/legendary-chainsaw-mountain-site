// JavaScript source code
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

function hamburgerMenu() {
    const hamburgermenu = document.getElementById("hamburger-menu");
    const phoneHeader = document.getElementById("phone-header");
    const body = document.getElementById("body");

    const hotelBtn = document.getElementById("hotel-btn");
    const termalBtn = document.getElementById("termal-btn");
    const giftBtn = document.getElementById("gift-btn");
    const galleryBtn = document.getElementById("gallery-btn");
    const bookingBtn = document.getElementById("booking-btn");

    hamburgermenu.addEventListener("click", () => {
        phoneHeader.classList.toggle('active');
        body.classList.toggle('active');
    });

    hotelBtn.addEventListener("click", () => {
        phoneHeader.classList.toggle('active');
        body.classList.toggle('active');
    });

    termalBtn.addEventListener("click", () => {
        phoneHeader.classList.toggle('active');
        body.classList.toggle('active');
    });

    giftBtn.addEventListener("click", () => {
        phoneHeader.classList.toggle('active');
        body.classList.toggle('active');
    });

    galleryBtn.addEventListener("click", () => {
        phoneHeader.classList.toggle('active');
        body.classList.toggle('active');
    });

    bookingBtn.addEventListener("click", () => {
        phoneHeader.classList.toggle('active');
        body.classList.toggle('active');
    });


};

hamburgerMenu();

