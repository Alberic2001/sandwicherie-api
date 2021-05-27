const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const Bills = require("../models/Bill");

// GET ALL INGREDIENTS
router.get("/bills", async (req, res) => {
  try {
    const bills = await Bills.find();
    res.json(bills);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/bills/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const bill = await Bills.findById(req.params.id);
    res.json(bill);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/bills", async (req, res) => {
  const bill = new Bill({
    billNumber: req.body.billNumber,
    command: req.command._id
  });
  try {
    const savedBill = await bill.save();
    res.json(savedBill);
  } catch (err) {
    res.json({ message: error });
  }
});

// DELETE AN INGREDIENT
router.delete("/bills/:id", async (req, res) => {
  try {
    await Bills.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/bills/:id", async (req, res) => {
  try {
    const updatedbill = await Ingredients.updateMany(
      { _id: req.params.id },
      { $set: { command: req.command._id } }
    );
    res.json(updatedbill);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
