const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const Delivery = require("../models/Delivery");

// GET ALL INGREDIENTS
router.get("/deliveries", async (req, res) => {
  try {
    const deliveries = await Delivery.find();
    res.json(deliveries);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/deliveries/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const delivery = await Delivery.findById(req.params.id);
    res.json(delivery);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/deliveries", async (req, res) => {
  const delivery = new Delivery({
    name: req.body.name,
    state: req.state._id,
  });
  try {
    const saveddelivery = await delivery.save();
    res.json(saveddelivery);
  } catch (err) {
    res.json({ message: error });
  }
});

// DELETE AN INGREDIENT
router.delete("/deliveries/:id", async (req, res) => {
  try {
    await Delivery.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/deliveries/:id", async (req, res) => {
  try {
    const updateddelivery = await Delivery.updateMany(
      { _id: req.params.id },
      { $set: { name: req.body.name, state: req.state._id } }
    );
    res.json(updateddelivery);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
