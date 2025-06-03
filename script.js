// Select elements
const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle mobile menu and burger menu animation
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active'); // Add/remove the active class for the burger menu
  mobileMenu.classList.toggle('active'); // Add/remove the active class for the mobile menu
  document.body.classList.toggle('mobile-menu-active'); // Prevent background scrolling
});

// Infinite scroller for testimonial boxes using manual position updates
document.addEventListener('DOMContentLoaded', function() {
  // Function to create an infinite loop by cloning and manually moving elements
  function createInfiniteScroller(containerSelector, direction) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    // Disable CSS animation to avoid conflicts
    container.style.animation = 'none';
    container.style.transform = 'translateX(0)';

    // Get original boxes
    const originalBoxes = Array.from(container.querySelectorAll('.testimonial-box'));
    if (originalBoxes.length === 0) return;

    // Clone boxes to create a very long sequence (20 sets for ample content)
    for (let i = 0; i < 20; i++) {
      originalBoxes.forEach(box => {
        const clone = box.cloneNode(true);
        container.appendChild(clone);
      });
    }

    // Get all boxes after cloning
    let boxes = Array.from(container.querySelectorAll('.testimonial-box'));
    let position = 0;
    // Speed in pixels per second (very slow movement)
    const speed = direction === 'right' ? -0.5 : 0.5; // 0.5px per second, extremely slow

    // Manually update position using requestAnimationFrame
    let lastTime = 0;
    function animate(timestamp) {
      if (lastTime === 0) lastTime = timestamp;
      const deltaTime = (timestamp - lastTime) / 1000; // Convert to seconds
      lastTime = timestamp;

      // Update position based on speed and time elapsed
      position += speed * deltaTime * 60; // Adjust for frame rate approximation
      container.style.transform = `translateX(${position}px)`;

      // Reposition boxes dynamically to maintain infinite loop
      const containerRect = container.getBoundingClientRect();
      if (direction === 'right') {
        const firstBox = boxes[0];
        const firstBoxRect = firstBox.getBoundingClientRect();
        if (firstBoxRect.right < containerRect.left - 50) {
          container.appendChild(firstBox); // Move first box to the end
          boxes = Array.from(container.querySelectorAll('.testimonial-box')); // Refresh list
          position += firstBoxRect.width + 20; // Adjust position to prevent jump
          container.style.transform = `translateX(${position}px)`;
        }
      } else {
        const lastBox = boxes[boxes.length - 1];
        const lastBoxRect = lastBox.getBoundingClientRect();
        if (lastBoxRect.left > containerRect.right + 50) {
          container.insertBefore(lastBox, boxes[0]); // Move last box to the start
          boxes = Array.from(container.querySelectorAll('.testimonial-box')); // Refresh list
          position -= (lastBoxRect.width + 20); // Adjust position to prevent jump
          container.style.transform = `translateX(${position}px)`;
        }
      }

      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  // Initialize for both containers
  createInfiniteScroller('.upper-testimonial-container', 'right');
  createInfiniteScroller('.lower-testimonial-container', 'left');
});

// Select all FAQ questions
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
      const answer = question.querySelector('.faq-answer');
      question.classList.toggle('active');
      if (question.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
          answer.style.maxHeight = '0';
      }
  });
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-menu-item').forEach(item => {
  item.addEventListener('click', () => {
      burgerMenu.classList.remove('active'); // Remove active class from burger menu
      mobileMenu.classList.remove('active'); // Remove active class from mobile menu
      document.body.classList.remove('mobile-menu-active'); // Allow background scrolling
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // (Existing code, e.g., for testimonial scrollers, remains unchanged)

  // Seamless Marquee: Clone each child of .crypto-marquee and append them
  const marquee = document.querySelector('.crypto-marquee');
  if (marquee) {
      const children = Array.from(marquee.children);
      // Create clones of each child and set aria-hidden for accessibility
      const clones = children.map(child => {
          const clone = child.cloneNode(true);
          clone.setAttribute('aria-hidden', 'true');
          return clone;
      });
      // Append each clone to the original marquee container
      clones.forEach(clone => {
          marquee.appendChild(clone);
      });
  }
});

document.querySelector('.hero-button-bg-container').addEventListener('click', function() {
  window.location.href = 'contacts-page.html';
});

document.querySelector('.hero-button-bg-container-one').addEventListener('click', function() {
  window.location.href = 'contacts-page.html';
});

document.addEventListener('DOMContentLoaded', function() {
  const heroButton = document.querySelector('.hero-button-bg-container1');
  const bentoSection = document.getElementById('why-us');

  if (heroButton && bentoSection) {
    heroButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      const offsetTop = bentoSection.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  }
});