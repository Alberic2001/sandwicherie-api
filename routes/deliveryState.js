const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const DeliveryState = require("../models/DeliveryState");

// GET ALL INGREDIENTS
router.get("/deliverystate", async (req, res) => {
  try {
    const states = await DeliveryState.find();
    res.json(states);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/deliverystate/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const state = await DeliveryState.findById(req.params.id);
    res.json(state);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/deliverystate", async (req, res) => {
  const state = new DeliveryState({
    state: req.body.state
  });
  try {
    const savedState = await state.save();
    res.json(savedState);
  } catch (err) {
    res.json({ message: error });
  }
});

// DELETE AN INGREDIENT
router.delete("/deliverystate/:id", async (req, res) => {
  try {
    await DeliveryState.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/deliverystate/:id", async (req, res) => {
  try {
    const updatedState = await DeliveryState.updateMany(
      { _id: req.params.id },
      { $set: { state: req.body.state } }
    );
    res.json(updatedState);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
