const express = require('express')
const router = express.Router();


router.put('/pokemon/:id/moves', moveCtrl.create)


module.exports = router;
