// Select elements
const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle mobile menu and burger menu animation
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active'); // Add/remove the active class for the burger menu
  mobileMenu.classList.toggle('active'); // Add/remove the active class for the mobile menu
  document.body.classList.toggle('mobile-menu-active'); // Prevent background scrolling
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

document.addEventListener('DOMContentLoaded', function() {
  const testimonialContainer = document.querySelector('.upper-testimonial-container');
  if (testimonialContainer) {
    const boxes = Array.from(testimonialContainer.children);
    // Clone testimonials 3 times for a longer sequence
    for (let i = 0; i < 3; i++) {
      const clones = boxes.map(box => {
        const clone = box.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        return clone;
      });
      clones.forEach(clone => testimonialContainer.appendChild(clone));
    }
  }
});