require('dotenv').config();

class connect{
    mongoose = require('mongoose');
    URI = process.env.MONGO_URI;
    constructor(){
        this.mongoose.connect(this.URI, {useNewUrlParser: true, useUnifiedTopology: true});
    }
}
module.exports = new connect().mongoose;