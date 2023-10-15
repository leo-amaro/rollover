document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("#image_rollovers img");

  // Array to store the original image URLs
  const originalImageURLs = [];

  // Preload the rollover images
  images.forEach((image) => {
    const oldURL = image.src;
    const newURL = image.id;

    // Store the original image URLs
    originalImageURLs.push(oldURL);

    // Preload rollover image
    const rolloverImage = new Image();
    rolloverImage.src = newURL;

    // set up event handlers for hovering an image
    image.addEventListener("mouseover", () => {
      image.src = newURL;
    });

    image.addEventListener("mouseout", () => {
      image.src = oldURL;
    });
  });

  // Function to display rollover images
  function displayRolloverImages() {
    images.forEach((image, index) => {
      const newURL = image.id;
      image.src = newURL;
    });
  }

  // Function to display original images
  function displayOriginalImages() {
    images.forEach((image, index) => {
      const oldURL = originalImageURLs[index];
      image.src = oldURL;
    });
  }

  // Add a timer to display rollover images one second after the page loads
  setTimeout(displayRolloverImages, 1000);

  // Add another timer to display original images two seconds after the page loads
  setTimeout(displayOriginalImages, 2000);
});
