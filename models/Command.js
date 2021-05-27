const mongoose = require('mongoose');

const CommandSchema = mongoose.Schema({
    commandNumber: {
        type: String,
        required: true
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'CommandState'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

CommandSchema.virtual('bill', {
    ref: 'Bill',
    localField: '_id',
    foreignField: 'command'
});

CommandSchema.virtual('commandDetail', {
    ref: 'CommandDetail',
    localField: '_id',
    foreignField: 'command'
});

module.exports = mongoose.model('Command', CommandSchema);