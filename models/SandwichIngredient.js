const mongoose = require('mongoose');

const SandwichIngredientSchema = mongoose.Schema({
    sandwich: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Sandwich'
    },
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Ingredient'
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('SandwichIngredient', SandwichIngredientSchema);