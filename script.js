const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const bookingForm = document.getElementById('bookingForm');
bookingForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = bookingForm.querySelector('.form-message');
  message.textContent = 'Request received — connect this form to the business booking system to complete reservations.';
  bookingForm.reset();
});

const hero = document.querySelector('.hero-media img');
window.addEventListener('scroll', () => {
  if (!hero) return;
  const y = Math.min(window.scrollY * 0.08, 55);
  hero.style.transform = `scale(1.035) translateY(${y}px)`;
}, {passive:true});
