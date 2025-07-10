import express from "express";
import {
  addFoodController,
  deleteFoodController,
  foodList,
} from "../controllers/FoodController.js";
import uplaod from "../utils/Multer.js";

const router = express.Router();

router.post("/add", uplaod.single("image"), addFoodController);
router.get("/list", foodList);
router.delete("/delete", deleteFoodController);

export default router;
