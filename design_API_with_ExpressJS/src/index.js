let express = require('express');
let app = express();
let v1Route = require('./v1/routes');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
})
app.use("/api/v1", v1Route);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});