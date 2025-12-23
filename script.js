document.addEventListener('DOMContentLoaded', () => {
    // 1. AOS Initialization
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false
        });
    }

    // 2. Typed.js for Hero Section
    if (typeof Typed !== 'undefined') {
        new Typed('#typed', {
            strings: ['WEB DEVELOPER', 'FRONTEND DEVELOPER', 'UI/UX DESIGNER', 'FREELANCER'],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // 3. Particles.js Background
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.2 },
                "size": { "value": 3 },
                "line_linked": { "enable": true, "distance": 150, "color": "#6366f1", "opacity": 0.3, "width": 1 },
                "move": { "enable": true, "speed": 2 }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } } }
            }
        });
    }

    // 4. Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formStatus.classList.remove('d-none');
            formStatus.innerHTML = '<div class="spinner-border spinner-border-sm text-info"></div> Sending...';

            setTimeout(() => {
                formStatus.innerHTML = '<span class="text-success"><i class="fas fa-check-circle"></i> Success! Hammad will contact you soon.</span>';
                contactForm.reset();
            }, 1500);
        });
    }

    // 5. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
