const _products = [
    { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
    { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
    { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

export default {
    getProducts(cb) {
        return new Promise((resolve) => {
            setTimeout(() => {
                cb(_products);
                resolve();
            }, 1000);
        });
    },
    getProduct(id) {
        return _products.find((p) => p.id == id);
    },
    buyProducts(products) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Do something with products.
                products.slice(1);
                (Math.random() > 0.4 ? resolve() : reject("Checkout failed due random number."))
            }, (100))
        })

    }
}