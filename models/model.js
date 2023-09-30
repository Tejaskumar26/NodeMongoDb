const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
}, { timestamps: true })

const userDb = mongoose.model('userDb', schema);

module.exports = userDb;