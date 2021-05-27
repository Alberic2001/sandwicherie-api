const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const SandwichIngredient = require("../models/SandwichIngredient");

// GET ALL INGREDIENTS
router.get("/sandwichingredient", async (req, res) => {
  try {
    const recipes = await SandwichIngredient.find();
    res.json(recipes);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/sandwichingredient/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const recipe = await SandwichIngredient.findById(req.params.id);
    res.json(recipe);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/sandwichingredient", async (req, res) => {
  const recipe = new SandwichIngredient({
    sandwich: req.body.sandwich,
    ingredient: req.body.ingredient,
    quantity: req.body.quantity,
  });
  try {
    const savedRecipe = await recipe.save();
    res.json(savedRecipe);
  } catch (err) {
    res.json({ message: error });
  }
});

// DELETE AN INGREDIENT
router.delete("/sandwichingredient/:id", async (req, res) => {
  try {
    await SandwichIngredient.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/sandwichingredient/:id", async (req, res) => {
  try {
    const updatedRecipe = await SandwichIngredient.updateMany(
      { _id: req.params.id },
      { $set: { sandwich: req.body.sandwich, ingredient: req.body.ingredient, quantity: req.body.quantity } }
    );
    res.json(updatedRecipe);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
