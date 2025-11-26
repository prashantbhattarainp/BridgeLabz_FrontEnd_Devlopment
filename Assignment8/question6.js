const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 60000, stock: 3 },
    { id: 2, name: "Shirt", category: "Clothing", price: 1500, stock: 15 },
    { id: 3, name: "Mobile", category: "Electronics", price: 25000, stock: 2 },
    { id: 4, name: "Shoes", category: "Footwear", price: 3000, stock: 8 },
    { id: 5, name: "Watch", category: "Accessories", price: 5000, stock: 1 }
];

function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
    return products.reduce((group, p) => {
        (group[p.category] = group[p.category] || []).push(p);
        return group;
    }, {});
}

console.log("Low stock:", getLowStockProducts());
console.log("Sorted by price:", sortProductsByPrice());
console.log("Total inventory value:", calculateTotalInventoryValue());
console.log("Grouped by category:", groupByCategory());