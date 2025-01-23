import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import productRoutes from "./routes/productRoutes.js";

import connectDB from './config/db.js'


const PORT = process.env.PORT || 5000

connectDB();  // connect to MongoDB

const app = express()

app.use(cors());

app.listen(PORT, ()=>{
  console.log(`Server is running in port: ${PORT}`)
})

app.use('/api/products', productRoutes)