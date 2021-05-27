const mongoose = require('mongoose');

const CommandDetailSchema = mongoose.Schema({
    sandwich: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sandwich'
    },
    command: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Command'
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('CommandDetail', CommandDetailSchema);