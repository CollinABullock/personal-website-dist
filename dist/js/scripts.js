document.addEventListener("DOMContentLoaded", function() {
  // Get the slide-in element
  const slideInElement = document.querySelector('.slide-in');

  // Add the 'active' class to trigger the slide-in animation
  slideInElement.classList.add('active');
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the slide-in elements
  const slideInElements = document.querySelectorAll('.slide-in, .slide-in-text');

  // Add the 'active' class to trigger the slide-in animations
  slideInElements.forEach(element => {
      element.classList.add('active');
  });
});

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle slide-in effect
function handleSlideIn() {
  const elements = document.querySelectorAll('.slide-in, .slide-in-text, .slide-in-h2');

  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('in-viewport');
    }
  });
}

// Event listener for scroll event to check if elements are in viewport
window.addEventListener('scroll', () => {
  handleSlideIn();
});

// Initial check in case elements are already in viewport on page load
handleSlideIn();
