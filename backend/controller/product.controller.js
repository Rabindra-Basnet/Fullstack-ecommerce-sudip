import ApiError from "../../utils/apiError.js";
import asyncHandler from "../middleware/asynchandler.middleware.js";
import Product from "../models/product.model.js";


// @desc get all products
// @route /api/v1/products/allproducts 
// @route /api/v1/products/       // //this route is for new method of route used in product router.
// @access public
const getProducts = asyncHandler(async(req, res) => {
    let products = await Product.find({});
    res.send(products)
});


// @desc get product by ID
// @route /api/v1/products/productbyid/:id 
// @route /api/v1/products/:id
// @access public
const getProdcutById = asyncHandler(async (req, res) => {
    let id = req.params.id;
    let product = await Product.findById(id);
    if(!product){
        throw new ApiError(404, "Product Not Found!");
    }
    res.send(product);
});


// @desc add new product
// @route /api/v1/products/addnewproduct
// @route /api/v1/products/
// @access private only by admin.
const addProduct = asyncHandler(async (req, res) => {
    let product = await Product.create({...req.body, user:req.user._id}) // //Here req.user._id value is given by checkAuth from auth.middleware. 
    res.send({message: "Product created successfully!", product});
});


// @desc Updating the product
// @route /api/v1/products/updateproduct/:id
// @route /api/v1/products/:id
// @access private only by admin.
const updateProduct = asyncHandler (async (req, res) => {
    let id = req.params.id;
    let product = await Product.findById(id);
    if(!product){
        throw ApiError(404, "Product Not Found!");
    }
    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.category = req.body.category || product.category;
    product.image = req.body.image || product.image;
    product.brand = req.body.brand || product.brand;
    product.price = req.body.price || product.price;
    product.countInStock = req.body.countInStock || product.countInStock;
    let updatedProduct = await product.save();

    res.send({ message: "Product updated successfuly!", product: updatedProduct})
});


// @desc Updating the product
// @route /api/v1/products/deleteproduct/:id
// @route /api/v1/products/:id
// @access private only by admin.
const deleteProduct = asyncHandler (async (req, res) => {
    let id = req.params.id;
    let product = await Product.findById(id);
    if(!product){
        throw ApiError(404, "Product Not Found!");
    };
    await Product.findByIdAndDelete(id);
    res.send({ message: "Poduct deleted successfylly!"});
});

export {getProducts, getProdcutById, addProduct, updateProduct, deleteProduct};

