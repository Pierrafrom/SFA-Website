'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('entretienAmenagementPaysage');
});

module.exports = router;