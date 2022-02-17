const mongoose = require('mongoose');
const User = require('../models/userSchema');


module.exports = {
    post : async (req,res) => {
        const {id,name,about} = req.body;
        const user = new User({
            id,
            name,
            about,
        })
        user.save()
            .then((res) => {
            console.log(res)
            })
            .catch((err) => {
                console.error(err);
            })
        res.status(200).json("Complete")
    }
}