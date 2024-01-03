function handleSlideIn() {
  const elements = document.querySelectorAll('.slide-in, .slide-in-text, .slide-in-h2, .slide-in-active');

  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('active'); // Add 'active' class when element is in viewport
    }
  });
}

function showOverlay(title, info, img) {
  // Set content for the overlay card
  const overlayCard = document.getElementById('overlayCard');
  
  overlayCard.innerHTML = `
    <div class="card overflow-hidden shadow rounded-4 border-0 sliding-card" onclick="hideOverlay()">
      <div class="card-body p-0">
        <img class="img-fluid slide-in" src="${img}" alt="${title}" />
        <div class="d-flex align-items-center">
          <div class="p-5">
            <h2 class="bg-light p-4 rounded-4 fw-bolder text-primary fw-bolder mb-2 overlayCardTitle">${title}</h2>
            <p>${info}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Show the overlay card with sliding animation
  overlayCard.style.display = 'flex';
  overlayCard.classList.add('slide-in-overlay');
}

function hideOverlay() {
  // Hide the overlay card
  const overlayCard = document.getElementById('overlayCard');
  overlayCard.style.display = 'none';
  overlayCard.classList.remove('slide-in-overlay');
}

const images2 = document.querySelectorAll('.rocking');
images2.forEach(image => {
  image.addEventListener('click', () => {
    const title = "Collin loves to rock!"; //
    const info = "Music has long been a part of Collin's life..."; // 
    const img = "https://i.ibb.co/3NW8rsD/north-bar-rocking-PNG.png";
    showOverlay(title, info, img);
  });
});

const images = document.querySelectorAll('.running');
images.forEach(image => {
  image.addEventListener('click', () => {
    const title = "Collin loves to run"; //
    const info = "Collin is a committed long-distance runner..."; // 
    const img = "https://i.ibb.co/GQZsNPb/collin-running-TALL.jpg";
    showOverlay(title, info, img);
  });
});

const images3 = document.querySelectorAll('.travel');
images3.forEach(image => {
  image.addEventListener('click', () => {
    const title = "Collin loves to travel"; //
    const info = "Collin is a committed traveler!..."; // 
    const img = "https://i.ibb.co/cggkLpJ/collin-traveling-TALL.jpg";
    showOverlay(title, info, img);
  });
});

// Event listener for scroll event to check if elements are in viewport
window.addEventListener('scroll', () => {
  handleSlideIn();
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0 &&
    rect.left <= window.innerWidth &&
    rect.right >= 0
  );
}

// Initial check when the page is loaded and on scroll
window.addEventListener('DOMContentLoaded', handleSlideIn);
window.addEventListener('scroll', handleSlideIn);