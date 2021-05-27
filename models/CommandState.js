const mongoose = require('mongoose');

const CommandStateSchema = mongoose.Schema({
    state: {
        type: String,
        required: true
    },
});

CommandStateSchema.virtual('commandState', {
    ref: 'Command',
    localField: '_id',
    foreignField: 'state'
});


module.exports = mongoose.model('CommandState', CommandStateSchema);