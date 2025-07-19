let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");
let currentIndex = 0;
let images = [];

document.addEventListener("DOMContentLoaded", () => {
  images = Array.from(document.querySelectorAll(".gallery img"));
});

function openModal(src) {
  modal.style.display = "block";
  modalImg.src = src;
  currentIndex = images.findIndex(img => img.src === src);
}

function closeModal() {
  modal.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

function filterImages(category) {
  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
