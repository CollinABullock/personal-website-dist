function handleSlideIn() {
  const elements = document.querySelectorAll('.slide-in, .slide-in-text, .slide-in-h2, .slide-in-active');

  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('active'); // Add 'active' class when element is in viewport
    }
  });
}

function showOverlay(title, info) {
  // Set content for the overlay card
  document.getElementById('overlayTitle').innerText = title;
  document.getElementById('overlayInfo').innerText = info;

  // Show the overlay card
  document.getElementById('overlayCard').style.display = 'flex';
}

function hideOverlay() {
  // Hide the overlay card
  document.getElementById('overlayCard').style.display = 'none';
}

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
