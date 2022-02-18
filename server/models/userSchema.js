const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    account: String,
    name: String,
    // profileImg: imageSchema,
    about: String,
    CA: String,

})
module.exports = mongoose.model('USER', userSchema);

