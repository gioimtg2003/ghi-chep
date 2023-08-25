let express = require('express');
let app = express();
let v1Route = require('./v1/routes');
let bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/v1", v1Route);
app.use("/api/v1/persons", require('./v1/routes/personRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});