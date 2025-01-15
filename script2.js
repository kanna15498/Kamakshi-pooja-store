
// Scroll Animation for Products
document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.remove("animate");
                }
            });
        },
        { threshold: 0.2 } // Trigger animation when 50% is visible
    );

    productCards.forEach((card) => observer.observe(card));
});

// scroll animation for hero-section

// Function to create the parallax effect
document.addEventListener('scroll', function() {
    const background = document.querySelector('.hero-background');
    const scrollPosition = window.pageYOffset;
    
    // Adjust the background position based on scroll position for parallax effect
    background.style.transform = `translateY(${scrollPosition * 0.3}px)`; // Adjust 0.3 to change speed of parallax effect
});

// IntersectionObserver for text animations (same as before)
document.addEventListener("DOMContentLoaded", () => {
    const heroElements = document.querySelectorAll(".hero-content h1, .hero-content p, .hero-content .btn");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.remove("animate"); // Reset animation
                }
            });
        },
        
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    heroElements.forEach((el) => observer.observe(el));
});



// Scroll Animation for Features Section
document.addEventListener("DOMContentLoaded", () => {
    const features = document.querySelectorAll(".feature");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate"); // Add 'animate' class when in view
                } else {
                    entry.target.classList.remove("animate"); // Remove 'animate' when out of view
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    features.forEach((feature, index) => {
        feature.dataset.delay = index * 0.2; // Add delay for sequential animations
        observer.observe(feature); // Observe each feature card
    });
});
