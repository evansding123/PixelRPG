const controller = require('./controller/index.js');
const router = require('express').Router();


router.post('/characters', controller.charInfo.postCharInfo);

module.exports = router;