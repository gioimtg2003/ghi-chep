let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let personController = require('../../controllers/personController');
router.use(bodyParser.urlencoded({extended: true}));


function initRouter(){
    router.get("/", personController.getAllPerson);

    router.get("/:id", personController.getPersonById);

    router.post("/", personController.createPerson);

    router.patch("/:id", personController.updatePerson);

    router.delete("/", personController.deletePerson);
    return router;
}

module.exports = initRouter();