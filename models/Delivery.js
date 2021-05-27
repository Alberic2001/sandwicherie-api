const mongoose = require('mongoose');

const DeliverySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'DeliveryState'
    }
});


module.exports = mongoose.model('Delivery', DeliverySchema);