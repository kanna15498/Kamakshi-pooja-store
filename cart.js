// Cart Functionality
let cart = [];

// Function to Update Cart View
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalItemsElement = document.querySelector('.cart-total-items');
    const totalPriceElement = document.querySelector('.cart-total-price');

    cartItemsContainer.innerHTML = '';
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name} (${item.weight})</p>
            <p>₹${item.price}</p>
            <div>
                <button class="decrease-qty">-</button>
                <span>${item.quantity}</span>
                <button class="increase-qty">+</button>
            </div>
        `;

        cartItem.querySelector('.decrease-qty').addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity--;
                updateCart();
            }
        });

        cartItem.querySelector('.increase-qty').addEventListener('click', () => {
            item.quantity++;
            updateCart();
        });

        cartItemsContainer.appendChild(cartItem);
    });

    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = totalPrice;
}

// Add Event Listeners for Buttons
document.querySelector('.view-cart-btn').addEventListener('click', () => {
    document.querySelector('#cart-page').style.display = 'block';
    document.querySelector('#checkout-page').style.display = 'none';
});

document.querySelector('.proceed-to-checkout').addEventListener('click', () => {
    document.querySelector('#checkout-page').style.display = 'block';
    document.querySelector('#cart-page').style.display = 'none';
});
