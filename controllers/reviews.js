var Restaurant = require('../models/restaurant');
const restaurants = require('./restaurants');

module.exports = {
  create,
};

function create(req, res) {
  Restaurant.findById(req.params.id, function(err, restaurant) {
    restaurant.reviews.push(req.body);
    restaurant.save(function(err) {
      res.redirect(`/restaurants/${restaurant._id}`);
    });
  });
}
