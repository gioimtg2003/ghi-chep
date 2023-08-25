let Person = require("../database/schema").personSchema;

// Tạo mới person
const createPerson = async (person, done) =>{
    try {
        let newPerson = new Person(person);
        let data = await newPerson.save();
        done(null, data);
    } catch (error) {
        done(error);
    }
}
module.exports = {
    createPerson : createPerson
}