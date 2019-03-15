const express = require('express');
const app = express();
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

// gets all product objects
app.get('/api/products', getProducts.getProducts);
// get a single product object
app.get('/api/product/:id', getProduct.getProduct);





// Set PORT and run message
const PORT = 7999;
app.listen(PORT, () => {
    console.log(`The hamsters are spinning their wheels furiously on port: ${PORT}`)
})