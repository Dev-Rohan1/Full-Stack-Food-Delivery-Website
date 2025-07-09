import express from "express";
import { addFoodController } from "../controllers/FoodController.js";
import uplaod from "../utils/Multer.js";

const router = express.Router();

router.post("/add", uplaod.single("image"), addFoodController);

export default router;
