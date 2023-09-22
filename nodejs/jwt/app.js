require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const user = require('./model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
const verifyToken = require('./middleware/auth');
app.use(express.json());


app.post('/register', async (req, res, next) => {
    
    const { name, email, password } = req.body;
    if (!name && !email && !password) { 
        return res.status(400).json({
            message: 'All fields are required!',
        });
    }
    const checkUser = await user.findOne({ email });
    if (checkUser) {
        return res.status(409).json({
            message: 'User already exist!',
        });
    }
    const encryptPasword = await bcrypt.hash(password, 10);
    try {
        const newUser = await new user({
            name,
            email,
            password: encryptPasword,
        });

        const token = await jwt.sign(
            { user_id: newUser._id, email },
            process.env.TOKEN_KEY || 'bmd1eWVuY29uZ2lvaWFiY3h5eg',
            {
                expiresIn: "1m",
                algorithm: "HS256"
            }
        );
        newUser.token = token;
        await newUser.save();
        return res.status(201).json(newUser);
        
    } catch (error) {
        return res.status(400).json({
            message: `${error}`,

        });
        
    }

});

app.post('/login', async (req, res) => { 
   
    try{
        const { email, password } = await req.body;
        if(!(email && password)){
            return res.status(400).json({
                message: 'All fields are required!',
            });
        }
        const findUser = await user.findOne({ email });
        
        if (findUser && (await bcrypt.compare(password, findUser.password))) {
            const expires = new Date();
            const hour = 24 - expires.getHours();
            const minute = expires.getMinutes();
            const second = expires.getSeconds();
            const expiresIn = 24 * 60 * 60 - hour * 60 * 60 - minute * 60 - second;
            const token = jwt.sign({
                user_id: findUser._id,
                email
            }, process.env.TOKEN_KEY || 'bmd1eWVuY29uZ2lvaWFiY3h5eg',
            {
                expiresIn:  expiresIn + "s",
                algorithm: "HS256"
            });
            findUser.token = token;
            return res.status(200).json(findUser);
        }
        return res.status(400).json({
            message: 'Invalid Credentials',
        });

    } catch (error) {
        return res.status(400).json({
            message: `Lỗi: ${error}`,
        });
    }
});
app.get("/profile", verifyToken ,async (req, res) => {
    const { user_id } = req.user;
    const data = await user.findById(user_id);
    res.status(200).json({
        message: "Success",
        data: data
    });
});
app.post("/logout", verifyToken ,async (req, res) => {
    req.user.token = "";
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    
});
app.get("/", async (req, res) => {
    const data = await user.find();
    res.status(200).json({
        message: "Success",
        data: data
    });
});
module.exports = app;