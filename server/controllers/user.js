const mongoose = require('mongoose');
const USER = require('../models/userSchema');


module.exports = {
    get : async (req,res) => {
        const id = req.params;
        const user = await USER.findOne({id});

        // console.log(user)
        res.status(200).json(user);
        // res.status(200).json("ok");
        
    },

    post : async (req,res) => {
        const {account,name,about,CA} = req.body;
        const user = new USER({
            account,
            name,
            about,
            CA,
        })
        user.save()
            .then((res) => {
            console.log(res)
            })
            .catch((err) => {
                console.error(err);
            })
        res.status(200).json("Complete")
    },
    update: async (req,res) => {
        const {account,CA} = req.body;
        const user = await USER.updateOne({
            account:{$eq: account}},
            {
                $set: {CA,}
            }
        )
        console.log(user);
        res.status(200).json("ok");
    }
}