let Person = require("./schema").personSchema;

const getAllPerson = async () =>{
    try {
        let data = await Person.find({}).select({_id: 0, __v: 0}).limit(3);
        return data;
    } catch (error) {
        console.error(error);
    }
};

const getPersonById = async (id) =>{
    try {
        let data = await Person.findById(id).select({_id: 0, __v: 0});
        return data;
    }catch (error) {
        console.error(error);
    };
};

// Tạo mới person
const createPerson = async (person) => {
    try {
        let newPerson = new Person(person);
        let data = await newPerson.save();
        return data;
    } catch (error) {
        return {
            error: error,
        }
    }
}; 


module.exports = {
    getAllPerson : getAllPerson,
    createPerson : createPerson,
    getPersonById : getPersonById
}