const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a exercise table with 2 column. |username|description|duration|date|timestamps|
const exerciseSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    duration: {
        type : Number,
        require: true,
    },
    date: {
        type: Date,
        require: true
    }
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);
// Export this model
module.exports = Exercise