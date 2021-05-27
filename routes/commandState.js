const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const CommandState = require("../models/CommandState");

// GET ALL INGREDIENTS
router.get("/commandstate", async (req, res) => {
  try {
    const states = await CommandState.find();
    res.json(states);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/commandstate/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const state = await CommandState.findById(req.params.id);
    res.json(state);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/commandstate", async (req, res) => {
  const state = new CommandState({
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
router.delete("/commandstate/:id", async (req, res) => {
  try {
    await CommandState.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/commandstate/:id", async (req, res) => {
  try {
    const updatedState = await CommandState.updateMany(
      { _id: req.params.id },
      { $set: { state: req.body.state } }
    );
    res.json(updatedState);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
