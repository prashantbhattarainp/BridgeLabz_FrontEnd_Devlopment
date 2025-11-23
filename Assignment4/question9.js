class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    applyCoupon(code) {
        const reg = /^(SAVE|DISC)(\d{1,2})$/;
        const match = code.match(reg);

        if (!match) {
            console.log("Invalid Coupon");
            return this.getTotal();
        }

        const percent = Number(match[2]);
        const total = this.getTotal();
        const discounted = total - (total * percent / 100);

        console.log(`Coupon Applied: ${percent}% Off`);
        console.log(`Final Total: ${discounted}`);
        return discounted;
    }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);

cart.applyCoupon("SAVE20");