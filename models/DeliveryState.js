const mongoose = require('mongoose');

const DeliveryStateSchema = mongoose.Schema({
    state: {
        type: String,
        required: true
    },
});

DeliveryStateSchema.virtual('delivery', {
    ref: 'Delivery',
    localField: '_id',
    foreignField: 'state'
});

module.exports = mongoose.model('DeliveryState', DeliveryStateSchema);