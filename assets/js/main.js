// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

        if (href === '#') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior });
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior, block: 'start' });
        }
    });
});

// Navbar background on scroll
const nav = document.getElementById('nav');
const updateNav = () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

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

// Keep the focus on the video the visitor chose to watch.
const videos = document.querySelectorAll('.video-card video');
videos.forEach(video => {
    video.addEventListener('play', () => {
        videos.forEach(other => {
            if (other !== video) other.pause();
        });
    });
});

// Stagger animation for skill cards
document.querySelectorAll('.skills-grid .skill-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
});
document.querySelectorAll('.about-stats .stat-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
});
