// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    // Basic toggle for mobile visibility
    // In a real app, you'd add a CSS class to show/hide the menu
    alert("Mobile menu clicked! In a full build, this would slide out a menu.");
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = revealElements[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].classList.add('active');
        }
    }
};

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Trigger once on load to show elements already in view
window.addEventListener('load', revealOnScroll);

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});