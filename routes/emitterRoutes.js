const express = require('express');
const router = express.Router();
const emitterController = require('../controllers/emitterController');

router.post('/emit', emitterController.emitData);

module.exports = router;