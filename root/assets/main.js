document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNavbar');
    const carousel = document.querySelector('.carousel');
    
    function updateNavbar() {
        const shouldScroll = window.scrollY > (carousel.offsetHeight - navbar.offsetHeight);
        navbar.classList.toggle('scrolled', shouldScroll);
        
        // Mobile menu color management
        if (window.innerWidth < 992) {
            const isMenuOpen = document.querySelector('.navbar-collapse.show');
            navbar.style.background = isMenuOpen ? 'rgba(255, 255, 255, 0.95)' : 'transparent';
        }
    }

    // Add resize listener
    window.addEventListener('resize', updateNavbar);
    window.addEventListener('scroll', updateNavbar);
    updateNavbar();

    // Handle menu toggle events
    document.querySelector('#navbarNav').addEventListener('show.bs.collapse', () => {
        if (window.innerWidth < 992) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    document.querySelector('#navbarNav').addEventListener('hidden.bs.collapse', () => {
        if (window.innerWidth < 992) {
            navbar.style.background = 'transparent';
        }
    });
});
