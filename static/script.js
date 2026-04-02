// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function closeMenu() {
  navLinks.classList.remove('open');
  navToggle.classList.remove('active');
  document.body.classList.remove('menu-open');
}

function openMenu() {
  navLinks.classList.add('open');
  navToggle.classList.add('active');
  document.body.classList.add('menu-open');
}

navToggle.addEventListener('click', () => {
  if (navLinks.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Close menu when tapping outside
document.addEventListener('click', (e) => {
  if (navLinks.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !navToggle.contains(e.target)) {
    closeMenu();
  }
});

// Scroll fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Apply fade-in to key elements
document.querySelectorAll('.label, h2, .section-sub, .about-card, .type-card, .nutrition-item, .problem-item, .check-item, .hero-content, .cta-buttons, .program-card, .quiz-step, .entry-offer-inner').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Smooth scroll for anchor links (fallback for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
