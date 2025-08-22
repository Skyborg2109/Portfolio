// Formspree form submission function (if needed for manual triggering)
function submitFormspreeForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.dispatchEvent(new Event('submit'));
    }
}


// Smooth scrolling function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Navigation smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Typewriter effect
const texts = ['Mahasiswa', 'Organist Gereja Katolik', 'Gamer', 'Pembelajar', 'Pelayan Tuhan'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');

function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            
            // Animate skill bars
            if (entry.target.querySelector('.skill-bar')) {
                const skillBars = entry.target.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 500);
                });
            }
        }
    });
}, observerOptions);

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'md:hidden bg-white shadow-lg absolute top-full left-0 w-full hidden border-t';
mobileMenu.innerHTML = `
    <div class="px-4 py-4 space-y-3">
        <a href="#home" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">Beranda</a>
        <a href="#about" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">Tentang</a>
        <a href="#academic" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">Akademik</a>
        <a href="#music" class="block py-2 text-gray-700 hover:text-red-600 font-medium">Musik</a>
        <a href="#gaming" class="block py-2 text-gray-700 hover:text-purple-600 font-medium">Gaming</a>
        <a href="#contact" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">Kontak</a>
    </div>
`;

document.querySelector('nav > div').appendChild(mobileMenu);

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Contact form handling with Formspree
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    const successMessage = document.getElementById('successMessage');
    
    // Show loading state
    submitButton.innerHTML = `
        <span class="flex items-center justify-center space-x-2">
            <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Mengirim...</span>
        </span>
    `;
    submitButton.disabled = true;
    
    // Hide any existing messages
    successMessage.classList.add('hidden');
    
    // Submit form to Formspree
    const formData = new FormData(this);
    
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Show success message
            successMessage.classList.remove('hidden');
            successMessage.innerHTML = `
                <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-green-400 font-medium">Pesan berhasil dikirim! Saya akan membalas segera.</span>
                </div>
            `;
            
            // Reset form
            this.reset();
            
            // Scroll to success message
            successMessage.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Show error message
        successMessage.classList.remove('hidden');
        successMessage.innerHTML = `
            <div class="flex items-center space-x-2">
                <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span class="text-red-400 font-medium">Gagal mengirim pesan. Silakan coba lagi.</span>
            </div>
        `;
        
        // Scroll to error message
        successMessage.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    })
    .finally(() => {
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    });
});

// Form validation enhancements
const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.classList.add('border-red-400');
            this.classList.remove('border-slate-600');
        } else {
            this.classList.remove('border-red-400');
            this.classList.add('border-slate-600');
        }
    });
    
    input.addEventListener('input', function() {
        if (this.classList.contains('border-red-400') && this.value.trim()) {
            this.classList.remove('border-red-400');
            this.classList.add('border-slate-600');
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'text-red-600', 'text-purple-600');
        if (link.getAttribute('href') === `#${current}`) {
            if (current === 'music') {
                link.classList.add('text-red-600');
            } else if (current === 'gaming') {
                link.classList.add('text-purple-600');
            } else {
                link.classList.add('text-blue-600');
            }
        }
    });
});

// Organ keys interaction
document.addEventListener('DOMContentLoaded', () => {
    const organKeys = document.querySelectorAll('.organ-keys');
    organKeys.forEach(key => {
        key.addEventListener('click', () => {
            // Add visual feedback
            key.style.transform = 'translateY(2px)';
            key.style.boxShadow = '0 1px 3px rgba(0,0,0,0.3)';
            
            // Reset after animation
            setTimeout(() => {
                key.style.transform = '';
                key.style.boxShadow = '';
            }, 150);
        });
    });
});

// Gaming cards interaction
document.addEventListener('DOMContentLoaded', () => {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Start typewriter effect
    setTimeout(typeWriter, 1000);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
    
    // Observe skills section for progress bars
    observer.observe(document.getElementById('academic'));
    
    // Add smooth scroll behavior to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Performance optimization: Throttle scroll events
let ticking = false;

function updateScrollEffects() {
    // Update active navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-600', 'text-red-600', 'text-purple-600');
        if (link.getAttribute('href') === `#${current}`) {
            if (current === 'music') {
                link.classList.add('text-red-600');
            } else if (current === 'gaming') {
                link.classList.add('text-purple-600');
            } else {
                link.classList.add('text-blue-600');
            }
        }
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});