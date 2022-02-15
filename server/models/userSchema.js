const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    profileImg: imageSchema,
    about: String

})
module.exports = mongoose.model('blueocean', userSchema);

