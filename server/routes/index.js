const express = require('express');
const router = express.Router();
const controller = require(".././controllers");


router.use('/assets', controller.assets.get);
router.use('/detail', controller.detail.get);
router.use('/user', controller.user.get);

router.use('/create', controller.create.post);


router.use('/', (req,res) => {
    res.json("Welcome!");
});



module.exports = router;