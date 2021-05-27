const mongoose = require('mongoose');

const BillSchema = mongoose.Schema({
    billNumber: {
        type: String,
        required: true
    },
    command: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Command'
    }
});

module.exports = mongoose.model('Category', BillSchema);