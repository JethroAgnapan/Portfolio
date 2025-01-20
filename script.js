// JavaScript for interactivity
const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.style.background = 'linear-gradient(140deg, #01dba8 0%, #00ffc4 50%, #92efe3 75%)';
    section.style.backdropFilter = 'blur(10px)';
    section.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
  });

  section.addEventListener('mouseout', () => {
    section.style.background = '';
    section.style.backdropFilter = '';
    section.style.boxShadow = '';
  });
});

// Fade-in effect on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});


