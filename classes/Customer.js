class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = [];
        this.rewardPoints = 0;
    }

    addToOrderHistory(cart) {
        this.orderHistory.push(cart);
    }

    getRewardPoints() {
        this.rewardPoints = this.orderHistory.reduce((acc, v) => acc + v.reduce((_acc, _v) => _acc + _v.rewardPoints), 0);
    }
}

module.exports = Customer;