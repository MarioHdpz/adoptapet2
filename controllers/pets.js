/* Pets controller */

const Pet = require('../models/Pet');
const ObjectId = require('mongoose').Types.ObjectId;

function getPets(req, res) {
    const filters = {}
    if (req.query.adopted) {
        filters.adopted = req.query.adopted === "1";
    }
    if (req.query.kind) {
        filters.kind = req.query.kind;
    }
    Pet.find(filters).then(function (pets) {
        res.send(pets)
    });
}

function createPet(req, res) {
    const body = req.body;
    const pet = new Pet(body);
    Pet.create(pet).then(function (pet) {
        res.status(201).send(pet)
    })
    .catch(function (error) {
        res.status(400).send({"message": error.message, "type": error.name});
    });;
}

function updatePet(request, response) {
    const id = request.params.id;
    const body = request.body;
    Pet.findOneAndUpdate({"_id": ObjectId(id)}, body)
    .then(function (pet) {
        response.status(200).send(pet);
    })
    .catch(function (error) {
        response.status(400).send({"message": error.message, "type": error.name});
    });
};

module.exports = {
    createPet,
    updatePet,
    getPets
}