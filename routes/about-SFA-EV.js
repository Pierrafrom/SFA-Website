'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about-SFA-EV');
});

module.exports = router;