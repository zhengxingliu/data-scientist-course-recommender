const express = require('express');

const indeedController = require('../controllers/indeed');

const router = express.Router();


router.post('/search-indeed', indeedController.searchIndeed);
router.post('/fetch-indeed', indeedController.fetchIndeed);
router.post('/fetch-coursera', indeedController.fetchCoursera);
module.exports = router;
