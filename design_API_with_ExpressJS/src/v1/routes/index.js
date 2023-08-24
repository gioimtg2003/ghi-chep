let express = require('express');

let route = express.Router();

route.get("/", (req, res) => {
    res.send("Hello " + req.baseUrl);
});

module.exports = route;