const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const CommandDetail = require("../models/CommandDetail");

// GET ALL INGREDIENTS
router.get("/commanddetail", async (req, res) => {
  try {
    const details = await CommandDetail.find();
    res.json(details);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/commanddetail/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const detail = await CommandDetail.findById(req.params.id);
    res.json(details);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/commanddetail", async (req, res) => {
  const detail = new CommandDetail({
    sandwich: req.body.sandwich,
    command: req.body.command,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  try {
    const savedDetail = await details.save();
    res.json(savedDetail);
  } catch (err) {
    res.json({ message: error });
  }
});

// DELETE AN INGREDIENT
router.delete("/commanddetail/:id", async (req, res) => {
  try {
    await CommandDetail.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/commanddetail/:id", async (req, res) => {
  try {
    const updatedDetail = await CommandDetail.updateMany(
      { _id: req.params.id },
      { $set: { sandwich: req.body.sandwich, command: req.body.command, price: req.body.price, quantity: req.body.quantity, } }
    );
    res.json(updatedDetail);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
