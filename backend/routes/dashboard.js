const express = require('express');
const router = express.Router();

const {getTotal} = require('../controllers/dashboardController');


router.route('/dashboard/total').get(getTotal);

module.exports = router;