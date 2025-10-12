const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    document.body.style.backgroundPositionY = (window.pageYOffset * 0.3) + 'px';
});
