const mongoose = require('mongoose');
require('dotenv').config();
const URI_MONGO = process.env.URI_MONGO || 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6';

exports.connect = () =>{
    mongoose.connect(URI_MONGO, 
        {useNewUrlParser: true, useUnifiedTopology: true}
        ).then(()=>{
            console.log('Connect to database successfully!');
        }
    ).catch((error)=>{
        console.log('Connect to database failure!');
        console.log(error);
    });
}