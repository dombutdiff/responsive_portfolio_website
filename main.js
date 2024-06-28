// HOME RANDOM PHOTOS
let image = document.querySelector(".image");
let images = [
  "./images/image1.jpg",
  "./images/image2.jpg",
  "./images/image3.jpg",
  "./images/image4.jpg",
  "./images/image5.jpg",
];

function loadImage() {
  let rnd = Math.floor(Math.random() * images.length);
  image.src = images[rnd];
}

// Load an initial image
loadImage();

// Set interval to load new images
setInterval(loadImage, 400);
