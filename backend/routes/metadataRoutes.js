const express = require('express');
const router = express.Router();
const metadataController = require('../controllers/metadataController');


router.get('/:tokenId', metadataController.get);

module.exports = router;