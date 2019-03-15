const products = require('../products.json')

module.exports = {
    getProducts: (req, res) => {
        const { product_name, price } = req.query;
        if (product_name) {
            return res.status(200).send(products.filter((product) => product.product_name == product_name));
        }
        if (price) {
            const items = products.filter((item) => item.price <= price);
            return res.status(200).send(items)
        }
        res.status(200).send(products)
    }
}