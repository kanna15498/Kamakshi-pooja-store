// Splash Screen Auto-Fade
window.addEventListener('load', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const heroContent = document.querySelector('.hero-content');  // Reference to the hero content
  
    // Fade out splash screen after 3 seconds
    setTimeout(() => {
      splashScreen.classList.add('hidden');  // Add the hidden class for the fade-out effect
  
      // After splash screen fades out, hide it completely and trigger hero section animation
      setTimeout(() => {
        splashScreen.style.display = 'none';  // Completely hide splash screen
        heroContent.classList.add('start-animation');  // Add class to start hero section animation
      }, 1000); // Wait for the splash screen fade-out to complete (1000ms matches the CSS fade duration)
    }, 3000); // Show splash screen for 3 seconds before starting fade-out
  });
  
  // Optional: You can add any other JavaScript logic you need for the hero section here
  
  // Scroll animation for parallax effect on hero section
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

let cart = {};

// Update the cart banner dynamically
function updateCartBanner() {
    const totalItems = Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
    const cartBanner = document.querySelector(".cart-banner");
    cartBanner.querySelector(".total-items").textContent = totalItems;

    // Show or hide cart banner based on items
    if (totalItems > 0) {
        cartBanner.classList.add("active");
    } else {
        cartBanner.classList.remove("active");
    }
}

// Add event listeners for product buttons
function attachProductEventListeners() {
    document.querySelectorAll(".quantity-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const productCard = e.target.closest(".product-card");
            const productId = productCard.dataset.productId;
            const quantityElement = productCard.querySelector(".quantity");

            // Increment or decrement quantity
            if (e.target.classList.contains("increment"))
                 {
                cart[productId] = (cart[productId] || 0) + 1;
            } else if (e.target.classList.contains("decrement")) {
                cart[productId] = Math.max((cart[productId] || 0) - 1, 0);
                if (cart[productId] === 0) {
                    delete cart[productId];
                }
            }

            // Update quantity in UI
            quantityElement.textContent = cart[productId] || 0;

            // Update cart banner
            updateCartBanner();
        });
    });
}

// Initialize product cards and cart functionality
function initializeProductGrid() {
    const productContainer = document.querySelector(".product-grid");
    

    // Attach event listeners for cart functionality
    attachProductEventListeners();

    // Initially update cart banner
    updateCartBanner();
}

// Initialize cart banner
function initializeCartBanner() {
    const checkoutBtn = document.querySelector(".checkout-btn");
    const viewCartBtn = document.querySelector(".view-cart-btn");

    // Add functionality to buttons
    viewCartBtn.addEventListener("click", () => {
        window.location.href = 'cart.html';
    });

    checkoutBtn.addEventListener("click", () => {
        // Replace below link with the actual checkout URL
        window.location.href = "checkout.html";
    });
}

// Call the initializers after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    initializeProductGrid();
    initializeCartBanner();
});


//  poojakit section  //

document.addEventListener("DOMContentLoaded", () => {
    const cart = {
        items: {},
        updateCartBanner() {
            // Calculate total items in the cart
            const totalItems = Object.values(this.items).reduce((acc, qty) => acc + qty, 0);

            // Select cart banner elements
            const cartBanner = document.querySelector(".cart-banner");
            const totalItemsElem = cartBanner.querySelector(".total-items");

            // Update the total items count
            totalItemsElem.textContent = totalItems;

            // Show or hide the cart banner based on item count
            if (totalItems > 0) {
                cartBanner.classList.add("active");
            } else {
                cartBanner.classList.remove("active");
            }
        },
        addItem(productId) {
            if (!this.items[productId]) {
                this.items[productId] = 0;
            }
            this.items[productId]++;
            this.updateCartDisplay(productId);
            this.updateCartBanner();
        },
        removeItem(productId) {
            if (this.items[productId]) {
                this.items[productId]--;
                if (this.items[productId] <= 0) {
                    delete this.items[productId];
                }
                this.updateCartDisplay(productId);
                this.updateCartBanner();
            }
        },
        updateCartDisplay(productId) {
            const quantityElem = document.querySelector(`.quantity[data-id="${productId}"]`);
            if (quantityElem) {
                quantityElem.textContent = this.items[productId] || 0;
            }
        }
    };

    // Add event listeners for increment and decrement buttons
    document.querySelectorAll(".increment").forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.parentElement.querySelector(".quantity").dataset.id;
            cart.addItem(productId);
        });
    });

    document.querySelectorAll(".decrement").forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.parentElement.querySelector(".quantity").dataset.id;
            cart.removeItem(productId);
        });
    });

    // View Cart and Checkout button functionality (placeholder)
    document.querySelector(".view-cart-btn").addEventListener("click", () => {
        window.location.href = 'cart.html';
    });

    document.querySelector(".checkout-btn").addEventListener("click", () => {
        window.location.href = 'checkout.html';
    });
});

// login and signup //

// Switch to Signup Page
function switchToSignup() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('signup-page').style.display = 'block';
}

// Switch to Login Page
function switchToLogin() {
    document.getElementById('signup-page').style.display = 'none';
    document.getElementById('login-page').style.display = 'block';
}

// Handle Form Submissions
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic here, e.g., authenticate user via API
    alert('Login Successful!');
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Handle signup logic here, e.g., register user via API
    alert('Signup Successful!');
});
