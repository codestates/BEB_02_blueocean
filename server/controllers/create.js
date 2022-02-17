const NFT = require('../models/nftSchema')

module.exports = {
    post : async (req,res) => {
        const {img,title,externalLink,description,price,author,owner,tokenId} = req.body;
        const nft = new NFT({
            tokenId,
            img,
            title,
            externalLink,
            description,
            price,
            //period, liked는 자동생성
            author,
            owner,
        })
        nft.save()
            .then((res) => {
            console.log(res)
            })
            .catch((err) => {
                console.error(err);
            })
        res.status(200).json("Complete")
    }
}