/* Pet model definition */

const mongoose  = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: [true, "Pet name is required!"]
    },
    kind: {
        type: String,
        required: true
    },
    dateOfBirth: Date,
    location: {
        type: String,
        required: true
    },
    adopted: {
        type: String,
        required: true
    }
});

const Pet = mongoose.model("pet", PetSchema);

module.exports = Pet