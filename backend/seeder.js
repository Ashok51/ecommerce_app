import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () =>{
  try {
    Product.deleteMany()
    Order.deleteMany()
    User.deleteMany()

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product)=>{
      return { ...product, user: adminUser};
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported'.green.inverse)   // shows green color imported from colors

    process.exit(1)
  } catch (error) {
    console.log(`Error Occoured: ${error}`.red.inverse)
    process.exit(1)   
  }
}

const destroyData = async () =>{
  try{
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Deleted'.green.inverse)
    process.exit()
  }catch(error){
    console.log(`Error Occoured: ${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] == '-d'){
  destroyData()
}else{
  importData()
}