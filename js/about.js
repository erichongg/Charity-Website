// About page JavaScript functionality

// Mobile Sidebar Navigation Functions
function toggleMobileMenu() {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    toggle.classList.toggle('active');
    
    // Prevent body scroll when sidebar is open
    if (sidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    toggle.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize baguetteBox for image gallery
document.addEventListener('DOMContentLoaded', function() {
    // Initialize baguetteBox for the compact gallery
    if (typeof baguetteBox !== 'undefined') {
        baguetteBox.run('.compact-gallery', { animation: 'slideIn' });
    }
    
    // Navigation scroll effect
    window.addEventListener("scroll", function() {
        var navbar = document.querySelector(".nav");
        if (window.scrollY > 50) { // When scrolled down 50px
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
    
    // Close sidebar when clicking on a link
    const sidebarLinks = document.querySelectorAll('.mobile-sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Close sidebar on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    console.log('About page loaded successfully');
});

// Additional gallery functionality
function initializeGallery() {
    // Add any custom gallery functionality here
    const galleryItems = document.querySelectorAll('.item.zoom-on-hover');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
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
});

// Gallery Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.gallery-nav-btn');
    const gallerySections = document.querySelectorAll('.gallery-block');
    const leftArrow = document.getElementById('navArrowLeft');
    const rightArrow = document.getElementById('navArrowRight');
    const navButtonsContainer = document.getElementById('galleryNavButtons');
    
    let currentIndex = 0;
    
    // Hide all sections except the first one
    gallerySections.forEach((section, index) => {
        if (index !== 0) {
            section.style.display = 'none';
        }
    });
    
    // Update arrow states (no longer needed for looping, but keeping for visual consistency)
    function updateArrowStates() {
        // Arrows are never disabled in looping mode
        leftArrow.disabled = false;
        rightArrow.disabled = false;
    }
    
    // Scroll to specific button
    function scrollToButton(index) {
        const button = navButtons[index];
        if (button) {
            button.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest', 
                inline: 'center' 
            });
        }
    }
    
    // Switch to section
    function switchToSection(index) {
        currentIndex = index;
        
        // Remove active class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to current button
        navButtons[currentIndex].classList.add('active');
        
        // Hide all sections
        gallerySections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show target section
        const targetSection = navButtons[currentIndex].getAttribute('data-section');
        const targetElement = document.getElementById(targetSection);
        if (targetElement) {
            targetElement.style.display = 'block';
        }
        
        updateArrowStates();
    }
    
    // Left arrow click (with looping)
    leftArrow.addEventListener('click', function() {
        if (currentIndex > 0) {
            switchToSection(currentIndex - 1);
        } else {
            // Loop to the last item
            switchToSection(navButtons.length - 1);
        }
        scrollToButton(currentIndex);
    });
    
    // Right arrow click (with looping)
    rightArrow.addEventListener('click', function() {
        if (currentIndex < navButtons.length - 1) {
            switchToSection(currentIndex + 1);
        } else {
            // Loop to the first item
            switchToSection(0);
        }
        scrollToButton(currentIndex);
    });
    
    // Add click event listeners to navigation buttons
    navButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            switchToSection(index);
        });
    });
    
    // Initialize arrow states
    updateArrowStates();
    
    // Initialize scroll to top button
    initScrollToTop();
});

// Scroll to Top Button Functionality
function initScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    
    if (!scrollButton) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}