const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const validateEmail = [
    validate({
        validator: 'isEmail',
        message: 'Email is invalid',
    }),
];
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email:{
        type: String,
        required: true,
        max: 255,
        min: 6,
        validate: validateEmail,
        unique: true, 
    },
    password:{
        type: String,
        required: true,
        max: 1024,
    },
    token:{
        type: String,
        required: false, 
    },
});

module.exports = mongoose.model("user", userSchema);