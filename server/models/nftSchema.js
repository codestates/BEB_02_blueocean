const mongoose = require('mongoose');


//required유효하지 않음
const nftSchema = new mongoose.Schema({
    tokenId: Number,
    img: String,
    author: String,
    owner: String,
    title: String,
    price: Number,
    externalLink: String,
    period: {type:Date, default: Date.now},
    liked: {type:Number, default: 0},
    description: String,
})

module.exports = mongoose.model('NFT', nftSchema);