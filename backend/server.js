import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import ConnectDB from "./src/db/ConnectDB.js";
import FoodRoutes from "./src/routes/FoodRoutes.js";

const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to the database
ConnectDB();

// API Routes
app.use("/food", FoodRoutes);
app.use("/images", express.static("uploads"));

// Health check route (should be GET only)
app.get("/", (req, res) => res.send("API is working"));

// Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🌐 Server is running on http://localhost:${PORT}`)
);
