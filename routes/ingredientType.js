const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const IngredientType = require("../models/UserType");

// GET ALL INGREDIENTS
router.get("/ingredienttype", async (req, res) => {
  try {
    const type = await IngredientType.find();
    res.json(type);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/ingredienttype/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const type = await IngredientType.findById(req.params.id);
    res.json(type);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/ingredienttype", async (req, res) => {
  const type = new IngredientType({
    name: req.body.name
  });
  try {
    const savedType = await type.save();
    res.json(savedType);
  } catch (err) {
    res.json({ message: error });
  }
});

// DELETE AN INGREDIENT
router.delete("/ingredienttype/:id", async (req, res) => {
  try {
    await IngredientType.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/ingredienttype/:id", async (req, res) => {
  try {
    const updatedType = await IngredientType.updateMany(
      { _id: req.params.id },
      { $set: { name: req.body.name } }
    );
    res.json(updatedType);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
