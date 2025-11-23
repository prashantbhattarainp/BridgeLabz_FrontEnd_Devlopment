const API_URL = "https://fakestoreapi.com/products";
const container = document.getElementById("product-container");

// Fetch + Display products
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Network error");
        }

        const products = await response.json();

        // Loop through API products and create cards
        products.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";

            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">$${product.price}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Failed to load products.", error);

        container.innerHTML = `
            <h2 style="color:red; text-align:center;">Failed to load products. Please try again.</h2>
        `;
    }
}

fetchProducts();