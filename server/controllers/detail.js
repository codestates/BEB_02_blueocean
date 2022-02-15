const dummy = require('../dummy/metadata.json')

module.exports = {
    get : (req,res) => {
       const query = Number(req.query.id)
       const result = dummy.filter((data)=> data.id===query);
        res.status(200).json(result);
    }
}