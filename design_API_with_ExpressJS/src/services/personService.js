let personDB = require("../database/personDB");

const getAllPerson = async (done ) => {
    let data = await personDB.getAllPerson();
    done(null, data);
};

const getPersonById = async (id, done) => {
    let data = await personDB.getPersonById(id);
    done(null, data);
};
// Tạo mới person
const createPerson = async (person, done) =>{
    let data = await personDB.createPerson(person);

    done(null, data);
}
module.exports = {
    createPerson : createPerson,
    getAllPerson : getAllPerson,
    getPersonById : getPersonById
}