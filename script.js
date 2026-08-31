// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== Member card flip (click / keyboard) =====
document.querySelectorAll('.member-card').forEach((card) => {
  const toggle = () => {
    const flipped = card.classList.toggle('flipped');
    card.setAttribute('aria-pressed', String(flipped));
  };

  card.querySelectorAll('.flip-hint').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggle();
    });
  });

  card.querySelectorAll('.gh-badge').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  card.addEventListener('click', toggle);

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});

// ===== Scroll reveal animations =====
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in-view'));
}

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
