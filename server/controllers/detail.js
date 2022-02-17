const NFT = require('../models/nftSchema');
const USER = require('../models/userSchema')
const ObjectId = require('mongodb').ObjectId; 

module.exports = {
    get : async (req,res) => {
       const id = req.params.id
       const nftId = new Object(id)
       let data = await NFT.findOne({_id: nftId});
       
       const userInfo = await USER.findOne({id:data.author});
       const ownerInfo = await USER.findOne({id:data.owner});
      
       data.author = userInfo.name;
       data.about = userInfo.about
       data.owner = ownerInfo.name

        res.status(200).json(data);
    }
}