import express from "express";
import products from "../frontend/products.js"; // remember: esmodule call with .js extension
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.get('/api/products', (req, res)=>{
  res.json(products)
})

app.get('/api/productd/:id', (req, res)=>{
  const product = products.find((p)=> p._id == req.params.id)
  res.json(product)
})

app.listen(PORT, ()=>{
  console.log(`Server is running in port: ${PORT}`)
})