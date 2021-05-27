const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const Sandwich = require("../models/Sandwich");

// GET ALL INGREDIENTS
router.get("/sandwiches", async (req, res) => {
  try {
    const sandwiches = await Sandwich.find();
    res.json(sandwiches);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/sandwiches/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const sandwich = await Sandwich.findById(req.params.id);
    res.json(sandwich);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/sandwiches", async (req, res) => {
  const sandwich = new Sandwich({
    name: req.body.name,
    image: req.body.image,
    category: req.category._id
  });
  try {
    const savedsandwich = await sandwich.save();
    res.json(savedsandwich);
  } catch (err) {
    res.json({ message: error });
  }
});

// DELETE AN INGREDIENT
router.delete("/sandwiches/:id", async (req, res) => {
  try {
    await Sandwich.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/sandwiches/:id", async (req, res) => {
  try {
    const updatedsandwich = await Sandwich.updateMany(
      { _id: req.params.id },
      { $set: { name: req.body.name, image: req.body.image, category: req.category._id } }
    );
    res.json(updatedsandwich);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
