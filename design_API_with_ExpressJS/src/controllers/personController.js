const { body } = require("express-validator");
let services = require("../services/personService");


const getAllPerson = (req, res) => {
    services.getAllPerson( (err, data) => {
        if (err) return res.status(500).json({err: err});
        res.json({
            code: 200,
            message: "Lấy dữ liệu thành công",
            data: data
        });
    });
};

const getPersonById = (req, res) => {
    res.send("id Người dùng là: "+ req.params.id);
};

const createPerson = (req, res) => {
    
    let person = {
        name: req.body.name,
        age: parseInt(req.body.age),
        address: req.body.address,
        phone: parseInt(req.body.phone)
    };

    services.createPerson(person, (err, data) => { 
        if (err) return res.status(500).json({err: err});
        res.json({
            code: 200,
            message: "Tạo mới thành công",
            data: data
        });
    });
};

const updatePerson = (req, res) => {
    res.send("Update Person: " + req.params.id);
}

const deletePerson = (req, res) => {
    res.send("Delete Person: " + req.body.id);
}

module.exports = {
    getAllPerson : getAllPerson,
    getPersonById : getPersonById,
    createPerson : createPerson,
    updatePerson : updatePerson,
    deletePerson : deletePerson
};