// Landing Page Interactive Effects
document.addEventListener('DOMContentLoaded', function() {

    // Add js-enabled class for progressive enhancement
    document.body.classList.add('js-enabled');

    // Historical image loading and fade-in effect
    const historicalImage = document.querySelector('.historical-image');
    if (historicalImage) {
        historicalImage.addEventListener('load', function() {
            this.classList.add('loaded');
        });

        // Add subtle parallax effect to image on hover
        historicalImage.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.5s ease, filter 0.3s ease';
        });

        historicalImage.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease, filter 0.3s ease';
        });
    }
    
    // Parallax effect for floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const floatingElements = document.querySelectorAll('.floating-element');
        
        floatingElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add hover effect to menu icon
    const menuIcon = document.querySelector('.menu-icon');
    
    if (menuIcon) {
        menuIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(90deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        menuIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    }

    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.hero > *');
    animateElements.forEach(el => observer.observe(el));

    // Intersection Observer for content sections with performance optimization
    const contentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Use requestAnimationFrame for smooth animations
                requestAnimationFrame(() => {
                    entry.target.classList.add('animate');
                });
                // Unobserve after animation to improve performance
                contentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        contentObserver.observe(section);
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector('#content');
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for any fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Enhanced scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const contentSection = document.querySelector('#content');
            if (contentSection) {
                const offsetTop = contentSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Optimized staggered animation for characteristic items
    const gridObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.characteristic-item');
                items.forEach((item, index) => {
                    // Use requestAnimationFrame for better performance
                    requestAnimationFrame(() => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                });
                // Unobserve to prevent repeated triggers
                gridObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    // Observe characteristics grid
    const characteristicsGrid = document.querySelector('.characteristics-grid');
    if (characteristicsGrid) {
        gridObserver.observe(characteristicsGrid);
    }

    // Throttled mouse movement parallax effect for performance
    let ticking = false;
    function updateParallax(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;

            element.style.transform += ` translate(${x}px, ${y}px)`;
        });

        // Subtle image movement based on mouse position
        const historicalImage = document.querySelector('.historical-image');
        if (historicalImage) {
            const imageRect = historicalImage.getBoundingClientRect();
            const imageX = (e.clientX - imageRect.left) / imageRect.width;
            const imageY = (e.clientY - imageRect.top) / imageRect.height;

            if (imageX >= 0 && imageX <= 1 && imageY >= 0 && imageY <= 1) {
                const moveX = (imageX - 0.5) * 5;
                const moveY = (imageY - 0.5) * 5;
                historicalImage.style.transform = `scale(1.02) translate(${moveX}px, ${moveY}px)`;
            }
        }
        ticking = false;
    }

    document.addEventListener('mousemove', function(e) {
        if (!ticking) {
            requestAnimationFrame(() => updateParallax(e));
            ticking = true;
        }
    });
});