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
