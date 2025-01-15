const products = [
    { id: 1, name: "Kalash Set", image: "kalash.png", weight: "1kg" },
    { id: 2, name: "Ganesh Idol", image: "ganesh.jpg", weight: "500g" },
    { id: 3, name: "Navratri Kit", image: "pooja.jpg", weight: "2kg" },
    { id: 4, name: "Incense Sticks", image: "dhoop.jpg", weight: "200g" },
    { id: 5, name: "Coconut", image: "coconut.jpg", weight: "1pc" },
    { id: 6, name: "Turmeric Powder", image: "turmeric.jpg", weight: "100g" },
    { id: 7, name: "Roli Chawal", image: "rakhi.jpg", weight: "150g" },
    { id: 8, name: "Diya Set", image: "diya.jpg", weight: "10pcs" },
    { id: 9, name: "Camphor", image: "camphor.jpg", weight: "50g" },
    { id: 10, name: "Flower Garland", image: "danda.jpg", weight: "1pc" },
    { id: 11, name: "Chandan Powder", image: "chandan.jpg", weight: "100g" },
    { id: 12, name: "Puja Bell", image: "ganta.jpg", weight: "500g" },
    { id: 13, name: "Kumkum", image: "kunkum.jpg", weight: "50g" },
    { id: 14, name: "Betel Leaves", image: "tamal.jpg", weight: "10pcs" },
    { id: 15, name: "Ghee", image: "ghee.jpg", weight: "500ml" },
    { id: 16, name: "Cotton Wicks", image: "wicks.jpg", weight: "100pcs" },
    { id: 17, name: "Red Cloth", image: "red-cloth.jpg", weight: "1m" },
    { id: 18, name: "Sugar Candy", image: "candy.jpg", weight: "250g" },
    { id: 19, name: "Silver Coin", image: "coin.jpg", weight: "5g" },
    { id: 20, name: "Holy Thread", image: "thread.jpg", weight: "1roll" },
    { id: 21, name: "Brass Kalash", image: "brass.jpg", weight: "1kg" },
    { id: 22, name: "Holy Water", image: "ganga.jpg", weight: "250ml" },
    { id: 23, name: "Puja Book", image: "gita.jpg", weight: "1pc" },
    { id: 24, name: "Sandalwood Stick", image: "chandan.jpg", weight: "100g" },
    { id: 25, name: "Jaggery", image: "bellam.jpg", weight: "500g" },
];

// Target the container where the product cards will be inserted
const productContainer = document.querySelector(".product-grid");

// Loop through the products array and create cards dynamically
products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.setAttribute("data-product-id", product.id);

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Weight: ${product.weight}</p>
        <div class="quantity-counter">
            <button class="quantity-btn decrement">-</button>
            <span class="quantity">0</span>
            <button class="quantity-btn increment">+</button>
        </div>
    `;

    productContainer.appendChild(card);
});
