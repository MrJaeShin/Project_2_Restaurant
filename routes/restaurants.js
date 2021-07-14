var express = require('express');
var router = express.Router();
var restaurantsCtrl = require('../controllers/restaurants')


router.get('/', restaurantsCtrl.index);
router.get('/new', restaurantsCtrl.new);
router.get('/:id', restaurantsCtrl.show);
router.post('/', restaurantsCtrl.create);
router.delete('/:id', restaurantsCtrl.delete);
router.put('/:id', restaurantsCtrl.update);


module.exports = router;
