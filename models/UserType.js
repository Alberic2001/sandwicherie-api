const mongoose = require('mongoose');

const UserTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

UserTypeSchema.virtual('type', {
    ref: 'Command',
    localField: '_id',
    foreignField: 'user'
});


module.exports = mongoose.model('UserType', UserTypeSchema);