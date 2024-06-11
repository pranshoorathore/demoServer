const express = require('express');
const {getProducts, addProduct} = require('../controllers/home.controller');

const router = express.Router();

router.get('/getproducts', getProducts);

router.post('/addproduct', addProduct)


module.exports = router