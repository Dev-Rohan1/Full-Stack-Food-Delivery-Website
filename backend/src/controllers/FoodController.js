import Food from "../models/Food.js";

export const addFoodController = async (req, res) => {
  const { name, description, price, category } = req.body;
  const imageFile = req.file;

  if (!name || !description || !price || !category || !imageFile) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  console.log(imageFile.filename);

  try {
    const newFood = new Food({
      name,
      description,
      price,
      category,
      image: imageFile.filename,
    });

    // console.log(newFood);

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
