const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const Commands = require("../models/Command");

// GET ALL INGREDIENTS
router.get("/commands", async (req, res) => {
  try {
    const commands = await Commands.find();
    res.json(commands);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/commands/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const command = await Commands.findById(req.params.id);
    res.json(command);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/commands", async (req, res) => {
  const command = new Command({
    commandNumber: req.body.billNumber,
    state: req.state._id,
    user: req.user._id
  });
  try {
    const commandBill = await command.save();
    res.json(commandBill);
  } catch (err) {
    res.json({ message: error });
  }
});

// DELETE AN INGREDIENT
router.delete("/commands/:id", async (req, res) => {
  try {
    await Bills.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/commands/:id", async (req, res) => {
  try {
    const updatedcommand = await Commands.updateMany(
      { _id: req.params.id },
      { $set: { user: req.user._id, state: req.state._id } }
    );
    res.json(updatedcommand);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
