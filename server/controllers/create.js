const NFT = require('../models/nftSchema')
// const Web3 = require('web3');	
// const web3 = new Web3(process.env.networkHost);

module.exports = {
    post : (req,res) => {
        const {img,title,externalLink,description,price,author,owner} = req.body;
        
        const nft = new NFT({
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