// News page specific JavaScript

// Carousel functionality
function scrollCarousel(direction) {
    const carousel = document.getElementById("news-carousel");
    const scrollAmount = 320; // Adjust based on card width + margin

    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Mobile sidebar functionality
function toggleMobileMenu() {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const body = document.body;
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
    
    // Prevent body scroll when sidebar is open
    if (sidebar.classList.contains('open')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const body = document.body;
    
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    body.style.overflow = '';
}

// Event listeners for mobile sidebar
document.addEventListener('DOMContentLoaded', function() {
    // Close sidebar when clicking on sidebar links
    const sidebarLinks = document.querySelectorAll('.mobile-sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close sidebar when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeMobileMenu();
        }
    });
});
