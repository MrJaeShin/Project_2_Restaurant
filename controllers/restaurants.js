
const Restaurant = require('../models/restaurant');

module.exports = {
    index,
    show,
    new: newRestaurant,
    create,
    delete: deleteOne,
    edit,
    update
};

function index(req, res) {
	Restaurant.find({}, function (err, restaurants) {
		res.render('restaurants/index', { title: 'List of Restaurants', restaurants });
	});
}


function show(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurants){
        res.render('restaurants/show', {title: 'Restaurant Detailed Information', restaurants});
    });
}

function newRestaurant(req, res) {
    res.render('restaurants/new', {
        title: 'Add Restaurant'
    });
}

function create(req, res) {
    req.body.parking = !!req.body.parking;
    const newRestaurant = new Restaurant(req.body);
    newRestaurant.save(function(err) {
        if (err) return res.render('restaurants/new');
        res.redirect(`/restaurants/${newRestaurant._id}`);
    });
}

function deleteOne(req, res) {
    Restaurant.findByIdAndDelete(req.params.id, function(err) {
        if(err) alert(error);
        res.redirect('/restaurants');
    });
}

function edit(req,res) {
    Restaurant.findById(req.params.id);
    res.render('restaurants/edit', {title: 'Update Restaurant Information', restaurants});
}

function update(req, res) {

}