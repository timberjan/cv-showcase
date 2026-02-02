/**
 * CV Showcase - Main JavaScript
 * Gestion des interactions et animations
 */

// ========================================
// Navigation Mobile Toggle
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle menu mobile
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Fermer le menu au clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Fermer le menu si clic en dehors
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});


// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offset = 80; // Hauteur de la navbar
                const targetPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


// ========================================
// Active Navigation Link on Scroll
// ========================================
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-menu a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});


// ========================================
// Navbar Background on Scroll
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    }
});


// ========================================
// Scroll to Top Button
// ========================================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// ========================================
// Scroll Reveal Animations
// ========================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.timeline-item, .education-card, .project-card, .skill-category');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('fade-in-up');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
// Appeler au chargement aussi
window.addEventListener('load', revealOnScroll);


// ========================================
// Skill Bars Animation
// ========================================
function animateSkillBars() {
    const skillSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-progress');

    if (!skillSection) return;

    const skillSectionTop = skillSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillSectionTop < windowHeight - 100) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });

        // Retirer l'écouteur après la première animation
        window.removeEventListener('scroll', animateSkillBars);
    }
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);


// ========================================
// Typing Effect for Hero Subtitle (Optional)
// ========================================
function typingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;

    const text = subtitle.textContent;
    subtitle.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    // Décommenter pour activer l'effet de frappe
    // setTimeout(type, 500);
}

// window.addEventListener('load', typingEffect);


// ========================================
// Dynamic Year in Footer
// ========================================
window.addEventListener('load', function() {
    const footer = document.querySelector('.footer-content p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
    }
});


// ========================================
// Lazy Loading for Images
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    // Appliquer à toutes les images avec data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}


// ========================================
// Form Validation (si vous ajoutez un formulaire)
// ========================================
function validateContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = form.querySelector('[name="name"]');
        const email = form.querySelector('[name="email"]');
        const message = form.querySelector('[name="message"]');

        let isValid = true;

        // Validation du nom
        if (name && name.value.trim() === '') {
            showError(name, 'Le nom est requis');
            isValid = false;
        } else {
            removeError(name);
        }

        // Validation de l'email
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                showError(email, 'L\'email est requis');
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                showError(email, 'Email invalide');
                isValid = false;
            } else {
                removeError(email);
            }
        }

        // Validation du message
        if (message && message.value.trim() === '') {
            showError(message, 'Le message est requis');
            isValid = false;
        } else {
            removeError(message);
        }

        if (isValid) {
            // Soumettre le formulaire ou envoyer via AJAX
            console.log('Formulaire valide, prêt à être envoyé');
            form.submit();
        }
    });
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message') || document.createElement('span');
    error.className = 'error-message';
    error.style.color = '#e74c3c';
    error.style.fontSize = '0.85rem';
    error.style.marginTop = '5px';
    error.textContent = message;

    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(error);
    }

    input.style.borderColor = '#e74c3c';
}

function removeError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message');
    if (error) {
        error.remove();
    }
    input.style.borderColor = '';
}

// Initialiser la validation
validateContactForm();


// ========================================
// Easter Egg: Konami Code
// ========================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiPattern.length);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    console.log('🎉 Easter Egg activé ! Vous avez trouvé le code Konami !');
    document.body.style.animation = 'rainbow 2s infinite';

    // Ajouter l'animation rainbow si elle n'existe pas
    if (!document.querySelector('#rainbow-animation')) {
        const style = document.createElement('style');
        style.id = 'rainbow-animation';
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    // Retirer l'effet après 5 secondes
    setTimeout(() => {
        document.body.style.animation = '';
    }, 5000);
}


// ========================================
// Console Message
// ========================================
console.log('%c👋 Bienvenue sur mon CV !', 'color: #27AE60; font-size: 20px; font-weight: bold;');
console.log('%cSi vous êtes ici, c\'est que vous êtes curieux ! N\'hésitez pas à me contacter 🚀', 'color: #1ABC9C; font-size: 14px;');
console.log('%cPsst... Essayez le code Konami 😉', 'color: #7F8C8D; font-size: 12px; font-style: italic;');


// ========================================
// Performance Optimization
// ========================================
// Debounce function pour optimiser les événements scroll
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Appliquer le debounce aux fonctions scroll gourmandes
window.addEventListener('scroll', debounce(function() {
    // Les fonctions scroll optimisées vont ici
}, 15));


// ========================================
// Print Friendly
// ========================================
window.addEventListener('beforeprint', function() {
    console.log('Impression du CV en cours...');
});

window.addEventListener('afterprint', function() {
    console.log('Impression terminée !');
});
