var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/restaurants/:id/reviews', reviewsCtrl.create);
router.delete('/restaurants/:id/reviews', reviewsCtrl.delete);


module.exports = router;