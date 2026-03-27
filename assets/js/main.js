// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar background on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Fade-in on scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item, .skill-card, .stat-card, .project-card, .edu-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Stagger animation for skill cards
document.querySelectorAll('.skills-grid .skill-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
});
document.querySelectorAll('.about-stats .stat-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
});
