   const images = [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1200",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1200"
];

let currentIndex = 0;

// Open Lightbox
function openLightbox(index) {
    currentIndex = index;

    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-image").src = images[currentIndex];
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Next / Previous Image
function changeImage(direction) {
    currentIndex = currentIndex + direction;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-image").src = images[currentIndex];
}

// Category Filter
function filterImages(category) {
    const items = document.querySelectorAll(".gallery-item");

    items.forEach(function(item) {

        if (category === "all") {
            item.style.display = "block";
        }
        else if (item.classList.contains(category)) {
            item.style.display = "block";
        }
        else {
            item.style.display = "none";
        }

    });
}

// Keyboard Support
document.addEventListener("keydown", function(event) {

    const lightbox = document.getElementById("lightbox");

    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {
            changeImage(1);
        }

        if (event.key === "ArrowLeft") {
            changeImage(-1);
        }

        if (event.key === "Escape") {
            closeLightbox();
        }
    }

});
