import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js"

// @desc get all products
// @route GET /api/products
// @ascess public
const getProducts = asyncHandler(async(req, res) =>{
  const products = await Product.find({})
  res.json(products)
})

// @desc get product by Id
// @route GET /api/products/:id
// @ascess public
const getProductById = asyncHandler(async(req, res) =>{
  const product = await Product.findById(req.params.id)
  if (product){
    res.json(product)
  }else{
    res.status(404)
    // throw new Error('Resource Not Found')
  }

  res.status(404).json({message: "product not found"})
})

export {getProducts, getProductById}