const express = require('express');
const router = express.Router();
const controller = require(".././controllers");


router.use('/collection', controller.get);
router.use('/', (req,res) => {
    res.json("Welcome!");
});



module.exports = router;