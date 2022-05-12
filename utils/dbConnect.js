import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const uri = "mongodb://mongodb:27017";

    const db = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

      user: "admin",
      pass: "admin123",
    });
    console.log(
      db.connections[0],
      "Database connection completed successfully"
    );
  } catch (error) {
    console.log(error, "ERROR CON LA DB");
  }
};

export default dbConnect;
