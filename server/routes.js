const controller = require('./controller/index.js');
const router = require('express').Router();


router.post('/characters', controller.charInfo.postCharInfo);
router.get('/teams', controller.charInfo.getCharInfo);
router.post('/account', controller.accountInfo.postAccount);



module.exports = router;