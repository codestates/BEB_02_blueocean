const dummy = require('../dummy/metadata.json')
const NFT = require('../models/nftSchema')

module.exports = {
    get : async(req,res) => {
        await NFT.find({})
            .then((data) => {
                res.status(200).send(data);
            }).catch((err) => {
                console.error(err);
            })
        // res.status(200).json(dummy);
    },

}