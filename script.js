// Basic interactivity: highlight nav link on click
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Optional: back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '⬆️ Back to Top';
backToTopBtn.id = 'backToTop';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.display = 'none';
backToTopBtn.style.padding = '0.75rem 1rem';
backToTopBtn.style.backgroundColor = '#4f46e5';
backToTopBtn.style.color = 'white';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '9999px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.zIndex = '1000';

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
