const dummy = require('../dummy/metadata.json')
const axios = require('axios');

module.exports = {
    get : (req,res) => {
        const {id,owner,author,img,name,price,liked} = dummy
        res.status(200).json({
            id,
            owner,
            author,
            img,
            name,
            price,
            liked,
        })
    }
}