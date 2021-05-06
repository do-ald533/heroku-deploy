import mongoose from "mongoose";
 
const ItemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
        unique: true,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

export const Item = mongoose.model('item', ItemSchema)