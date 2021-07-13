const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
	{
		username: {type: String, required: true,},
        content: {type: String, required: true,},
		rating: { type: Number, enum: [1,2,3,4,5], min: 1, max: 5, default: 5 },
	},
	{
		timestamps: true,
	}
);

const restaurantSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		address: {
			type: String,
		},
		description: String,
		parking: { 
			type: Boolean,
			default: false
		},
		reviews: [reviewSchema],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Restaurant', restaurantSchema);
