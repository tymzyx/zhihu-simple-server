let hot = require('../controllers/v1/hot');

let express = require('express');

const router = express.Router();

hot.testHot();

router.get('/hots', hot.getHot);

module.exports = router;