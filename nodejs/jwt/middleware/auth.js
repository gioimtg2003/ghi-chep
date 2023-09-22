const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if(!token){
        return res.status(403).json({
            message: "A token is required for authentication"
        });
    }
    try{
        const decoded = jwt.verify(token, process.env.TOKEN_KEY || 'bmd1eWVuY29uZ2lvaWFiY3h5eg');
        req.user = decoded;
    }catch (error){
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
    return next();
};

module.exports = verifyToken;