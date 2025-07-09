import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Database connection successful");
  } catch (error) {
    console.log("❎ Database connection failed");
  }
};

export default ConnectDB;
