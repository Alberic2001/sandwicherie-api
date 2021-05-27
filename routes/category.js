// const express = require("express");
// const router = express.Router();
// const verify = require('./verifyToken');
// const Categories = require("../models/Category");

// // GET ALL INGREDIENTS
// router.get("/categories", async (req, res) => {
//   try {
//     const categories = await Categories.find();
//     res.json(categories);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

// // GET A SPECIFIC INGREDIENT
// router.get("/categories/:id", async (req, res) => {
//   //console.log(req.params.id)
//   try {
//     const category = await Categories.findById(req.param.id);
//     req.json(category);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

// // SUBMITS AN INGREDIENT
// router.post("/categories", async (req, res) => {
//   const category = new Category({
//     name: req.body.name
//   });
//   try {
//     const savedCategory = await category.save();
//     res.json(savedCategory);
//   } catch (err) {
//     res.json({ message: error });
//   }
// });

// // DELETE AN INGREDIENT
// router.delete("/categories/:id", async (req, res) => {
//   try {
//     await Categories.remove({ _id: req.params.id });
//   } catch (err) {
//     res.json({ message: error });
//   }
// });

// // UPDATE AN INGREDIENT
// router.patch("/categories/:id", async (req, res) => {
//   try {
//     const updatedcategory = await Categories.updateOne(
//       { _id: req.params.id },
//       { $set: { name: req.body.name } }
//     );
//     res.json(updatedcategory);
//   } catch (err) {
//     res.json({ message: error });
//   }
// });

// module.exports = router;
