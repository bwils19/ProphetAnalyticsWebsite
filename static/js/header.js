console.log('header.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    const headerPlaceholder = document.getElementById('header-placeholder');
    console.log('Header placeholder:', headerPlaceholder);

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <header class="site-header">
                <nav class="main-navigation">
                    <div class="logo">
                        <a href="index.html">
                            <img src="static/images/PA_LOGO_20241023_v4.jpg" alt="Prophet Analytics Logo">
                        </a>
                    </div>
                    <div class="nav-container">
                        <ul class="main-nav">
                            <li class="nav-item has-dropdown">
                                <a href="#" class="nav-link">Why Prophet Analytics</a>
                                <div class="dropdown-menu">
                                    <div class="dropdown-container">
                                        <div class="dropdown-section">
                                            <h4 class="section-title">DISCOVER</h4>
                                            <ul>
                                                <li><a href="#">Platform Overview</a></li>
                                                <li><a href="#">For Enterprises</a></li>
                                                <li><a href="#">Success Stories</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown-section">
                                            <h4 class="section-title">SOLUTIONS</h4>
                                            <ul>
                                                <li><a href="#">Data Integration</a></li>
                                                <li><a href="#">Analytics Suite</a></li>
                                                <li><a href="#">Machine Learning</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown-section">
                                            <h4 class="section-title">RESOURCES</h4>
                                            <ul>
                                                <li><a href="#">Documentation</a></li>
                                                <li><a href="#">Case Studies</a></li>
                                                <li><a href="#">Knowledge Base</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="dropdown-footer">
                                        <div class="footer-content">
                                            Ready to get started? <a href="#" class="demo-link">Request a Demo →</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item has-dropdown">
                                <a href="#" class="nav-link">Product</a>
                                <div class="dropdown-menu">
                                    <div class="dropdown-container">
                                        <div class="dropdown-section">
                                            <h4 class="section-title">DATA MANAGEMENT</h4>
                                            <ul>
                                                <li><a href="#">Centralize and organize your data assets</a></li>
                                                <li><a href="#">Analytics Suite</a></li>
                                                <li><a href="#">Advanced analytics and visualization tools</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown-section">
                                            <h4 class="section-title">AI INTEGRATION</h4>
                                            <ul>
                                                <li><a href="#">Machine learning and AI capabilities</a></li>
                                                <li><a href="#">API Access</a></li>
                                                <li><a href="#">Connect and extend functionality</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item has-dropdown">
                                <a href="#" class="nav-link">Solutions</a>
                                <div class="dropdown-menu">
                                    <div class="dropdown-container">
                                        <div class="dropdown-section">
                                            <h4 class="section-title">BY INDUSTRY</h4>
                                            <ul>
                                                <li><a href="#">Healthcare</a></li>
                                                <li><a href="#">Finance</a></li>
                                                <li><a href="#">Retail</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown-section">
                                            <h4 class="section-title">BY USE CASE</h4>
                                            <ul>
                                                <li><a href="#">Business Intelligence</a></li>
                                                <li><a href="#">Data Integration</a></li>
                                                <li><a href="#">Predictive Analytics</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item has-dropdown">
                                <a href="#" class="nav-link">Resources</a>
                                <div class="dropdown-menu">
                                    <div class="dropdown-container">
                                        <div class="dropdown-section">
                                            <h4 class="section-title">LEARNING</h4>
                                            <ul>
                                                <li><a href="#">Documentation</a></li>
                                                <li><a href="#">Tutorials</a></li>
                                                <li><a href="#">API Reference</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown-section">
                                            <h4 class="section-title">COMMUNITY</h4>
                                            <ul>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Events</a></li>
                                                <li><a href="#">Support</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item has-dropdown">
                                <a href="#" class="nav-link">About</a>
                                <div class="dropdown-menu">
                                    <div class="dropdown-container">
                                        <div class="dropdown-section">
                                            <h4 class="section-title">COMPANY</h4>
                                            <ul>
                                                <li><a href="#">Our Story</a></li>
                                                <li><a href="#">Team</a></li>
                                                <li><a href="#">Careers</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown-section">
                                            <h4 class="section-title">CONNECT</h4>
                                            <ul>
                                                <li><a href="#">Contact</a></li>
                                                <li><a href="#">Partners</a></li>
                                                <li><a href="#">News</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul class="auth-nav">
                            <li><a href="login.html" class="login-btn">Login</a></li>
                            <li><a href="contact.html" class="contact-btn">Contact Us</a></li>
                        </ul>
                    </div>
                    <button class="mobile-menu-toggle" aria-label="Toggle menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </header>
        `;
        console.log('Header content injected');
        initializeHeader();
    }
});

function initializeHeader() {
    console.log('Initializing header...'); // Debug log
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

    console.log('Found dropdown items:', dropdownItems.length); // Debug log

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

        // Handle both hover and click events
        item.addEventListener('mouseenter', () => {
            // Close all other dropdowns first
            dropdownItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('active');
        });

        // For mobile devices
        if (window.innerWidth <= 1024) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const currentDropdown = item.querySelector('.dropdown-menu');

                // Close other dropdowns
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherDropdown = otherItem.querySelector('.dropdown-menu');
                        if (otherDropdown) {
                            otherDropdown.style.display = 'none';
                        }
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current dropdown
                if (currentDropdown) {
                    const isHidden = currentDropdown.style.display === 'none';
                    currentDropdown.style.display = isHidden ? 'block' : 'none';
                    item.classList.toggle('active', isHidden);
                }
            });
        }
    });

    setActiveState();
}

function setActiveState() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            const dropdownParent = link.closest('.has-dropdown');
            if (dropdownParent) {
                dropdownParent.classList.add('active');
            }
        }
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item.has-dropdown')) {
        const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
        dropdownItems.forEach(item => {
            item.classList.remove('active');
        });
    }
});

// Handle mobile menu clicks outside
document.addEventListener('click', (e) => {
    const navContainer = document.querySelector('.nav-container');
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');

    if (navContainer && mobileMenuButton && navContainer.classList.contains('active') &&
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
        const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

        if (navContainer && mobileMenuButton) {
            navContainer.classList.remove('active');
            mobileMenuButton.classList.remove('active');
        }

        // Reset any mobile-specific styles
        dropdownItems.forEach(item => {
            const dropdown = item.querySelector('.dropdown-menu');
            if (dropdown) {
                dropdown.style.display = '';
            }
        });
    }
});