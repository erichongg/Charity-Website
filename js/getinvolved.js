// Get Involved page JavaScript functionality

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

// Copy to clipboard functionality
function copyToClipboard(id) {
    var text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text).then(() => {
        showNotification("Copied: " + text);
    }).catch(err => {
        console.error("Error copying text: ", err);
        // Fallback for older browsers
        fallbackCopyTextToClipboard(text);
    });
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

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showNotification("Copied: " + text);
        } else {
            showNotification("Failed to copy text");
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        showNotification("Failed to copy text");
    }
    
    document.body.removeChild(textArea);
}

// Show notification function
function showNotification(message) {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
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
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease-out;
        font-family: 'Raleway', sans-serif;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Add CSS animation for notification
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Get Involved page loaded successfully');
    
    // Initialize scroll to top button
    initScrollToTop();
    
    // Add hover effects to copy buttons
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click handlers for donation information
    const donateInfo = document.querySelectorAll('.donate-info p');
    donateInfo.forEach(info => {
        info.style.cursor = 'pointer';
        info.addEventListener('click', function() {
            const text = this.textContent.replace(/^(Email:|Phone:)\s*/, '');
            copyToClipboard(text);
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
