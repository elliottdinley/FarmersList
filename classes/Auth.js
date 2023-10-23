const Customer = require("./Customer.js")

class Auth {
    constructor() {
        this.customers = [];
    }

    register(name, email, shippingAddress) {
        this.customers.push(new Customer(name, email, shippingAddress));
    }

    login(email) {
        return this.customers.find((customer) => customer.email === email) || null;
    }
}

module.exports = Auth;