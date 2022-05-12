import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const uri = process.env.MONGO_URI;

    const db = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_USERPASS,
    });
    console.log("Database connection completed successfully");
  } catch (error) {
    console.log(error, "ERROR CON LA DB");
  }
};

export default dbConnect;
