import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connected host ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit(1)
  }
};

export default connectDB
