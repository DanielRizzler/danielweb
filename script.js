// Select burger menu, mobile menu, and close button elements
const burgerMenu = document.getElementById('burgerMenu');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const logo = document.getElementById('logo'); // Select the logo element

// Toggle mobile menu visibility on burger menu click
burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    // Toggle class on body to prevent background scrolling
    document.body.classList.toggle('mobile-menu-active');
});

// Close mobile menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove('active');
        // Remove class from body to allow scrolling again
        document.body.classList.remove('mobile-menu-active');
    }
});

// Close mobile menu when clicking the close button
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    // Remove class from body to allow scrolling again
    document.body.classList.remove('mobile-menu-active');
});

// Add event listeners to mobile menu items (optional: for navigation or alerts)
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`Navigating to ${item.textContent}`);
        mobileMenu.classList.remove('active'); // Close menu after click
        // Remove class from body to allow scrolling again
        document.body.classList.remove('mobile-menu-active');
        // Add actual navigation logic here if needed
    });
});

// Scroll to top when logo is clicked
logo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Add smooth scrolling effect
    });
});