function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    const newPrice = this.price - (this.price * percent) / 100;
    return newPrice;
};

// Abstraction: Only interact with applyDiscount, not internal price logic
const p1 = new Product("Laptop", 60000);
const p2 = new Product("Phone", 25000);
const p3 = new Product("Headphones", 5000);

console.log(`${p1.name} discounted price: ₹${p1.applyDiscount(10)}`);
console.log(`${p2.name} discounted price: ₹${p2.applyDiscount(20)}`);
console.log(`${p3.name} discounted price: ₹${p3.applyDiscount(30)}`);