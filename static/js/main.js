
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initializeNavigation();
    initializeScrollEffects();
    initializeAnimations();
    initializeContactForm();

    // Add visualization initialization
    initializeNetworkVisualization();
});

function initializeNetworkVisualization() {
    const canvas = document.querySelector('.hero-visualization canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const nodes = [];
    let animationFrameId;

    // Initial node setup
    function initializeNodes() {
        nodes.length = 0;
        for (let i = 0; i < 20; i++) {
            nodes.push({
                x: Math.random() * (canvas.width - 20) + 10,
                y: Math.random() * (canvas.height - 20) + 10,
                radius: Math.random() * 4 + 2,
                dx: (Math.random() - 0.5) * 0.8,
                dy: (Math.random() - 0.5) * 0.8,
                xPercent: 0, // Store position as percentage
                yPercent: 0
            });
        }
        // Calculate initial percentages
        nodes.forEach(node => {
            node.xPercent = node.x / canvas.width;
            node.yPercent = node.y / canvas.height;
        });
    }

    function resizeCanvas() {
        const container = canvas.parentElement;
        if (container && window.getComputedStyle(container).display !== 'none') {
            const oldWidth = canvas.width;
            const oldHeight = canvas.height;

            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;

            // If nodes exist, adjust their positions based on percentages
            if (nodes.length > 0) {
                nodes.forEach(node => {
                    // Update positions based on stored percentages
                    node.x = node.xPercent * canvas.width;
                    node.y = node.yPercent * canvas.height;
                });
            } else {
                initializeNodes();
            }
        }
    }

    // Initial setup
    resizeCanvas();
    initializeNodes();

    function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

    // Observe resize with ResizeObserver
    const resizeObserver = new ResizeObserver(
        debounce(() => {
            requestAnimationFrame(resizeCanvas);
        }, 16) // Approximately 1 frame at 60fps
    );

    resizeObserver.observe(canvas.parentElement);

    function animate() {
        const container = canvas.parentElement;
        if (!container || window.getComputedStyle(container).display === 'none') {
            requestAnimationFrame(animate);
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw nodes
        nodes.forEach(node => {
            node.x += node.dx;
            node.y += node.dy;

            // Bounce off walls with padding
            const padding = node.radius + 5;
            if (node.x < padding || node.x > canvas.width - padding) {
                node.dx *= -1;
                node.x = Math.max(padding, Math.min(canvas.width - padding, node.x));
            }
            if (node.y < padding || node.y > canvas.height - padding) {
                node.dy *= -1;
                node.y = Math.max(padding, Math.min(canvas.height - padding, node.y));
            }

            // Update percentages
            node.xPercent = node.x / canvas.width;
            node.yPercent = node.y / canvas.height;

            // Draw node
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#3D4F6B';
            ctx.fill();
        });

        // Draw connections
        nodes.forEach((node, i) => {
            nodes.slice(i + 1).forEach(other => {
                const dx = other.x - node.x;
                const dy = other.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const maxDistance = Math.max(canvas.width, canvas.height) * 0.8;
                const opacity = 1 - (distance / maxDistance);
                if (opacity > 0) {
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.strokeStyle = `rgba(61, 79, 107, ${opacity * 0.4})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Mobile Navigation Toggle
function initializeNavigation() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuButton.setAttribute('aria-expanded',
                mobileMenuButton.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
            );
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks?.contains(e.target) && !mobileMenuButton?.contains(e.target)) {
            navLinks?.classList.remove('active');
            mobileMenuButton?.setAttribute('aria-expanded', 'false');
        }
    });
}

// Scroll Effects
function initializeScrollEffects() {
    // Add header shadow on scroll
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove header shadow
        if (currentScroll > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }

        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 100) {
            header?.classList.add('header-hidden');
        } else {
            header?.classList.remove('header-hidden');
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animations
function initializeAnimations() {
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Basic form validation
            const formData = new FormData(contactForm);
            const formEntries = Object.fromEntries(formData);

            if (!validateForm(formEntries)) {
                showNotification('Please fill in all required fields correctly', 'error');
                return;
            }

            try {
                // Replace with your form handling logic
                await submitForm(formEntries);
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
            } catch (error) {
                showNotification('Error sending message. Please try again.', 'error');
            }
        });
    }
}

// Utility Functions
function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return data.email && emailRegex.test(data.email) && data.name && data.message;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Form submission function (replace with your actual endpoint)
async function submitForm(data) {
    // Replace with your form handling logic
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

// Handle loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Export any functions that might be needed elsewhere
// export {
//     initializeNavigation,
//     initializeScrollEffects,
//     initializeAnimations,
//     initializeContactForm
// };