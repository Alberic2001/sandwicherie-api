const mongoose  = require('mongoose');

const IngredientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    // image: {
    //     data: Buffer,
    //     contentType: String,
    //     required: true
    // },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'IngredientType'
    }
})

IngredientSchema.virtual('sandwichIngredient', {
    ref: 'SandwichIngredient',
    localField: '_id',
    foreignField: 'ingredient'
});

module.exports = mongoose.model('Ingredient', IngredientSchema)