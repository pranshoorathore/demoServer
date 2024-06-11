const getProducts = (req, res)=>{
    res.send("Hello World!")
}

const addProduct = (req, res)=>{
    const product = req.body;
    console.log(product);
}

module.exports = {getProducts, addProduct}