let mongoose = require('./connect');

let personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: Number,
    address:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    }
});

let postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: String,
    date:{
        type: Date,
        default: Date.now,
    }
});

module.exports = {
    personSchema: mongoose.model('person', personSchema),
    postSchema: mongoose.model('post', postSchema),
};