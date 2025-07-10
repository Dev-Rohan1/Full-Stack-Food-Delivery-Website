import Food from "../models/Food.js";
import fs from "fs";

export const addFoodController = async (req, res) => {
  const { name, description, price, category } = req.body;
  const imageFile = req.file;

  if (!name || !description || !price || !category || !imageFile) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const newFood = new Food({
      name,
      description,
      price,
      category,
      image: imageFile.filename,
    });

    await newFood.save();

    return res.status(201).json({
      success: true,
      message: "Food added successfully",
      foodData: newFood,
    });
  } catch (error) {
    console.error("Error adding food:", error);
    return res.status(500).json({
      success: false,
      message: "Food addition failed",
    });
  }
};

export const foodList = async (req, res) => {
  try {
    const foodList = await Food.find({});

    if (!foodList) {
      return res.json({
        success: false,
        message: "Food fetch failed",
      });
    }

    return res.json({
      succcess: true,
      message: "Food fetched successfully",
      foodListData: foodList,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Food fetch failed",
    });
  }
};

export const deleteFoodController = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Food ID is required",
    });
  }

  try {
    const deleteFood = await Food.findByIdAndDelete(id);
    fs.unlink(`uploads/${deleteFood.image}`, (err) => {
      if (err) {
        console.error("Error deleting image file:", err);
      }
    });

    if (!deleteFood) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    return res.json({
      success: true,
      message: "food deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Food deletion failed",
    });
  }
};
