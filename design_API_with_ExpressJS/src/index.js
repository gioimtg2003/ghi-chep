let express = require('express');
let app = express();
let route = express.Router();
require('dotenv').config();
const port = process.env.PORT || 3000;

route.use("/", (req, res, next) => { 
    req.time = new Date().toString();
    console.log("Time: " + req.time + ` ${req.method}`);
    next();
})
app.use("/api", route);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});