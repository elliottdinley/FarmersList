class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }

    addProduct(product, quantity = 1) {
        if (product.quantity >= quantity) {
            for (let i = 0; i < quantity; i ++) {
                this.products.push(product);
                this.total += product.price;
                product.quantity --;
            }
            if (product.quantity === 0) {
                product.inStock = false;
            }
        } else {
            return `I'm sorry there are only ${product.quantity} of this product left`;
        }
    }

    removeProduct(n) {
        this.total -= this.products[n].price;
        this.products = this.products.filter((_, i) => i !== n);
    }

    getTotal() {
        return this.total;
    }

    clear() {
        this.products = [];
        this.total = 0;
    }

    removeProductByName(name) {
        this.products = this.products.filter((product) => product.name !== name)
    }
}

module.exports = Cart;