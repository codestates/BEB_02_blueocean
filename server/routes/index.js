const express = require('express');
const router = express.Router();
const controller = require(".././controllers");


router.get('/', (req,res) => {
    res.json("Welcome!");
});

router.use('/assets', controller.assets.get);
router.use('/asset/:id', controller.detail.get);
router.use('/user/:id', controller.user.get);
router.use('/user/update', controller.user.update);
router.use('/user', controller.user.post);
router.use('/create', controller.create.post);





module.exports = router;