const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    district: {
        type: String,
        required: true,
    },
    town: {
        type: String,
        required: true,
    },
    country: {
        type: String
    },
    telephone: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

module.exports = mongoose.model('Address', AddressSchema);