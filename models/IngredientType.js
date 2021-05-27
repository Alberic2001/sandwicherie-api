const mongoose  = require('mongoose');

const IngredientTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // image: {
    //     data: Buffer,
    //     contentType: String,
    //     required: true
    // }
})

IngredientTypeSchema.virtual('ingredients', {
    ref: 'Ingredient',
    localField: '_id',
    foreignField: 'type'
});

module.exports = mongoose.model('IngredientType', IngredientTypeSchema)