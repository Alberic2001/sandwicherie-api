const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const UserType = require("../models/UserType");

// GET ALL INGREDIENTS
router.get("/usertype", async (req, res) => {
  try {
    const type = await UserType.find();
    res.json(type);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/usertype/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const type = await UserType.findById(req.params.id);
    res.json(type);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/usertype", async (req, res) => {
  const type = new UserType({
    name: req.body.name,
  });
  try {
    const savedType = await type.save();
    res.json(savedType);
  } catch (err) {
    res.json({ message: error });
  }
});

// DELETE AN INGREDIENT
router.delete("/usertype/:id", async (req, res) => {
  try {
    await UserType.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/usertype/:id", async (req, res) => {
  try {
    const updatedType = await UserType.updateMany(
      { _id: req.params.id },
      { $set: { command: req.command._id } }
    );
    res.json(updatedType);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
