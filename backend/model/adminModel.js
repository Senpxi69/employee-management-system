const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 500,
    },
});

module.exports = mongoose.model("Admin", adminSchema);
