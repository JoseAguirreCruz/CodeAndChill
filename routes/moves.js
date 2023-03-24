const express = require('express')
const router = express.Router();

const moveCtrl = require('../controllers/moves')

router.put('/pokemon/:id/moves', moveCtrl.create)


module.exports = router;
