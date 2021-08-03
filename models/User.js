/* User model definition */

const mongoose  = require('mongoose');

const AddressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    number: Number
});

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstname: String,
    lastname: String,
    address: AddressSchema,
    phone: String,
    isAdopting: Boolean
});

UserSchema.path("email").validate(function (value) {
    return this.model("user").count({ email: value }).then(function(count) {
        return count < 1;
    });
}, "Email is already registered!");

const User = mongoose.model("user", UserSchema);

module.exports = User;
