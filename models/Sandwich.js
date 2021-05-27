const mongoose = require('mongoose');

const SandwichSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
        // required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Category'
    }
});

SandwichSchema.virtual('commandDetail', {
    ref: 'CommandDetail',
    localField: '_id',
    foreignField: 'sandwich'
});

SandwichSchema.virtual('sandwichIngredient', {
    ref: 'SandwichIngredient',
    localField: '_id',
    foreignField: 'sandwich'
});

module.exports = mongoose.model('Sandwich', SandwichSchema);