let services = require("../services/personService");
const getAllPerson = (req, res) => {
    res.send("Lấy danh sách tất cả người dùng");
};

const getPersonById = (req, res) => {
    res.send("id Người dùng là: "+ req.params.id);
};

const createPerson = (req, res) => {
    if(!req.body.name || !req.body.age || !req.body.address || !req.body.phone) 
    return res.status(400).json({err: "Thông tin không đầy đủ"});

    let person = {
        name: req.body.name,
        age: parseInt(req.body.age),
        address: req.body.address,
        phone: parseInt(req.body.phone)
    };

    services.createPerson(person, (err, data) =>{
        if (err) return res.status(500).json({err: err});
        res.json({
            code: 200,
            message: "Tạo mới người dùng thành công",
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