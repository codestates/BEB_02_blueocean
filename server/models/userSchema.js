const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    // profileImg: imageSchema,
    about: String

})
module.exports = mongoose.model('USER', userSchema);

