// Contact page JavaScript functionality

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
document.addEventListener('DOMContentLoaded', function() {
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
});

// Contact form validation (if form is added later)
function validateContactForm() {
    // Add form validation logic here when contact form is implemented
    console.log('Contact form validation ready');
}

// Copy contact information to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show success message
        showNotification('Contact information copied to clipboard!');
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}

// Show notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Contact page loaded successfully');
    
    // Initialize scroll to top button
    initScrollToTop();
    
    // Add click handlers for contact information (excluding links)
    const contactBlocks = document.querySelectorAll('.contact-block');
    contactBlocks.forEach(block => {
        const paragraphs = block.querySelectorAll('p');
        paragraphs.forEach(p => {
            // Only add click handler if paragraph doesn't contain links
            if (!p.querySelector('a')) {
                p.style.cursor = 'pointer';
                p.addEventListener('click', function() {
                    copyToClipboard(this.textContent);
                });
            }
        });
    });
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
