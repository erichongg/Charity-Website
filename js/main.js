// Main JavaScript file for St. Joseph Mission Charity

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

// Navigation scroll effect
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".nav");
    if (window.scrollY > 50) { // When scrolled down 50px
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Lightbox functionality
function openLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = "img/event2.png";
    lightbox.classList.add("show"); // Adds the scaling effect
    lightbox.style.display = "flex";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("show"); // Removes scaling effect
    setTimeout(() => {
        lightbox.style.display = "none";
    }, 300); // Delay to match transition effect
}

// Video expansion functionality
function expandVideo(videoItem) {
    // Remove expanded class from all video items
    const allVideos = document.querySelectorAll('.video-item');
    allVideos.forEach(item => item.classList.remove('expanded'));
    
    // Add expanded class to clicked video item
    videoItem.classList.add('expanded');
    
    // Close expanded video when clicking outside
    document.addEventListener('click', function closeExpandedVideo(e) {
        if (!videoItem.contains(e.target)) {
            videoItem.classList.remove('expanded');
            document.removeEventListener('click', closeExpandedVideo);
        }
    });
}

// Smooth scrolling for anchor links
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

// Initialize any additional functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('St. Joseph Mission Charity website loaded successfully');
    
    // Add any initialization code here
    // For example, initialize lightbox, carousels, etc.
});
