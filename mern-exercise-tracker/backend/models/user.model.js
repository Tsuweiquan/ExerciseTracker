const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a User table with 2 column. |username|timestamp|
const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

// this creates the model
const User = mongoose.model('User', userSchema);
// Export this model
module.exports = User