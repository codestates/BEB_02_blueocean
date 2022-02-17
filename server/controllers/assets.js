const dummy = require('../dummy/metadata.json')
const NFT = require('../models/nftSchema')
const USER = require('../models/userSchema');
module.exports = {
    get : async(req,res) => {
        // const regex = new RegExp("no+ah");
        // "(.*?)" , "(.*?[^\\])"
        //img, author, id,,title,price, liked ,
        await NFT.aggregate([{
            $lookup: {
                from: "users",
                localField: "author",
                foreignField: "id",
                as: "authorInfo",
            },
        }])
            .then((data) => {
                const assets = data.map((data) => {
                    return {
                    id: (data._id).toString(),
                    img: data.img,
                    author: data.authorInfo[0].name,
                    title: data.title,
                    price: data.price,
                    liked: data.liked,
                    }
                    })
                res.status(200).send(assets);

            }).catch((err) => {
                console.error(err);
            })
        
    },

}

/*
 MongooseError: Mongoose 5.x disallows passing a spread of operators to `Model.aggregate()`.
  Instead of `Model.aggregate({ $match }, { $skip })`, do `Model.aggregate([{ $match }, { $skip }])`
*/