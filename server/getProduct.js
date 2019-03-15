const products = require('../products.json')

module.exports = {
    getProduct: (req, res) => {
        const { id } = req.params;
        const item = products.filter((product) => product.id == id)
        if (!item) {
            return res.status(500).send(console.log('No item with this ID could be found'))
        }
        return res.status(200).send(item)
    }
}