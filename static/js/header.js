// static/js/header.js
document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
});

function initializeHeader() {
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

    // Mobile menu toggle
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenuButton.classList.toggle('active');
            navContainer.classList.toggle('active');
        });
    }

    // Handle dropdowns
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');

        // For mobile devices
        if (window.innerWidth <= 1024) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const currentDropdown = item.querySelector('.dropdown-menu');

                // Close other dropdowns
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.dropdown-menu').style.display = 'none';
                    }
                });

                // Toggle current dropdown
                currentDropdown.style.display =
                    currentDropdown.style.display === 'none' ? 'block' : 'none';
            });
        }
    });

    // Set active state based on current page
    setActiveState();
}

function setActiveState() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Remove any existing active classes
        link.classList.remove('active');

        // Check if the link href matches the current path
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            // Add active state to parent dropdown if exists
            const dropdownParent = link.closest('.has-dropdown');
            if (dropdownParent) {
                dropdownParent.classList.add('active');
            }
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navContainer = document.querySelector('.nav-container');
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');

    if (navContainer.classList.contains('active') &&
        !navContainer.contains(e.target) &&
        !mobileMenuButton.contains(e.target)) {
        navContainer.classList.remove('active');
        mobileMenuButton.classList.remove('active');
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        const navContainer = document.querySelector('.nav-container');
        const mobileMenuButton = document.querySelector('.mobile-menu-toggle');

        navContainer.classList.remove('active');
        mobileMenuButton.classList.remove('active');

        // Reset any mobile-specific styles
        document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
            dropdown.style.display = '';
        });
    }
});