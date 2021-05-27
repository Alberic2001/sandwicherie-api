const express = require("express");
const router = express.Router();
const verify = require('./verifyToken');
const Addresses = require("../models/Address");

// GET ALL INGREDIENTS
router.get("/addresses", async (req, res) => {
  try {
    const addresses = await Addresses.find();
    res.json(addresses);
  } catch (error) {
    res.json({ message: error });
  }
});

// GET A SPECIFIC INGREDIENT
router.get("/addresses/:id", async (req, res) => {
  //console.log(req.params.id)
  try {
    const address = await Addresses.findById(req.params.id);
    res.json(address);
  } catch (error) {
    res.json({ message: error });
  }
});

// SUBMITS AN INGREDIENT
router.post("/addresses", async (req, res) => {
  const address = new Address({
    district: req.body.district,
    town: req.body.town,
    country: req.body.country,
    telephone: req.body.telephone,
    user: req.user._id
  });
  try {
    const savedAddress = await address.save();
    res.json(savedAddress);
  } catch (err) {
    res.json({ message: error });
  }
});

// DELETE AN INGREDIENT
router.delete("/addresses/:id", async (req, res) => {
  try {
    await Addresses.remove({ _id: req.params.id });
  } catch (err) {
    res.json({ message: error });
  }
});

// UPDATE AN INGREDIENT
router.patch("/addresses/:id", async (req, res) => {
  try {
    const updatedaddress = await Addresses.updateMany(
      { _id: req.params.id },
      { $set: { district: req.body.district, town: req.body.town, country: req.body.country, telephone: req.body.telephone, user: req.user._id } }
    );
    res.json(updatedaddress);
  } catch (err) {
    res.json({ message: error });
  }
});

module.exports = router;
