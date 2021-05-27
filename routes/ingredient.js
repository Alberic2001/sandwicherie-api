const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const Ingredients = require("../models/Ingredient");

// GET ALL INGREDIENTS
router.get("/ingredients", async (req, res) => {
  try {
    const ingredients = await Ingredients.find();
    res.json(ingredients);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/ingredients/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const ingredient = await Ingredients.findById(req.params.id);
    res.json(ingredient);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/ingredients", async (req, res) => {
  const ingredient = new Ingredients({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    type: req.body.type
  });
  try {
    const savedIngredient = await ingredient.save();
    res.json(savedIngredient);
  } catch (err) {
    res.json({ message: error });
  }
});

// DELETE AN INGREDIENT
router.delete("/ingredients/:id", async (req, res) => {
  try {
    await Ingredients.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/ingredients/:id", async (req, res) => {
  try {
    const updatedingredient = await Ingredients.updateMany(
      { _id: req.params.id },
      { $set: { name: req.body.name, price: req.body.price, quantity: req.body.quantity, type: req.body.type } }
    );
    res.json(updatedingredient);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
