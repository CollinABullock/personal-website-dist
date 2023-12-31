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
  <div class="card overflow-hidden shadow rounded-4 border-0 slide" onclick="hideOverlay()">
    <div class="card-body p-0">
      <img class="img-fluid slide-in" src="${img}" alt="${title}" />
      <div class="d-flex align-items-center">
        <div class="p-5">
          
          <p>${info}</p>
        </div>
      </div>
    </div>
  </div>
`;

  // Show the overlay card
  overlayCard.style.display = 'flex';
  overlayCard.classList.add('slide-in-overlay');
}

function hideOverlay() {
  // Hide the overlay card
  const overlayCard = document.getElementById('overlayCard');
  overlayCard.style.display = 'none';
  overlayCard.classList.remove('slide-in-overlay');

  // Add an event listener to remove the 'slide-in-overlay' class after the animation completes
  overlayCard.addEventListener('transitionend', () => {
    overlayCard.classList.remove('slide-in-overlay');
  }, { once: true });
}

const images2 = document.querySelectorAll('.rocking');
images2.forEach(image => {
  image.addEventListener('click', () => {
    const title = "Collin loves to rock!"; //
    const info = "Music has long been a part of Collin's life. At the age of 12 he taught himself to play guitar and sing by watching videos of Billie Joe Armstrong from Green Day. Afterwards he started writing his own songs, forming bands, and touring the country. He was lucky enough to manage School of Rock for ten years, passing on his love of self expression through music to the next generation of rock stars!"; // 
    const img = "https://i.ibb.co/3NW8rsD/north-bar-rocking-PNG.png"
    showOverlay(title, info, img);
  });
});

const images = document.querySelectorAll('.running');
images.forEach(image => {
  image.addEventListener('click', () => {
    const title = "Collin loves to run"; //
    const info = "Collin is a committed long-distance runner, falling in love with the sport after spontaneously training for and then running the 2008 Chicago marathon. Since then he has completed the Chicago marathon three additional times, and has also done a plethora of other half marathons, triathlons, and 5ks. He has recently gotten into mud races, having completed the 10k Tough Mudder obstacle race every year since 2018."; // 
    const img = "https://i.ibb.co/GQZsNPb/collin-running-TALL.jpg"
    showOverlay(title, info, img);
  });
});

const images3 = document.querySelectorAll('.travel');
images3.forEach(image => {
  image.addEventListener('click', () => {
    const title = "Collin loves to travel"; //
    const info = "Collin is a committed traveler!  He's visited every contient except Africa and Antarctica (and he plans to go to those places sooner rather than later) but he has a special love for the UK, where he has extended family.  London remains his favorite place in the world, but Portland and Tokyo are up there as well!"; // 
    const img = "https://i.ibb.co/cggkLpJ/collin-traveling-TALL.jpg"
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
