// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Testimonial Carousel
  const carousel = document.getElementById('testimonialCarousel');
  const items = carousel.querySelectorAll('.testimonial-item');
  let currentIndex = 0;

  function showNextTestimonial() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
  }

  items[0].classList.add('active');
  setInterval(showNextTestimonial, 5000); // Change every 5 seconds

  // Back to Top Button
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Form Submissions (Placeholder - In real app, add actual handling)
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted successfully! (This is a placeholder)');
    });
  });
});