const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    courses: {
        type: [String],
        required: true
    },
    imageData: {
        type: String,
        required: true
    },
    submissionDate: { 
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Employee", employeeSchema);
