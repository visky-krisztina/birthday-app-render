import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		unique: true,
	},

	lastName: {
		type: String,
		required: true,
		unique: true,
	},
	birthDate: {
		type: Date,
		required: true,
		validate: {
			validator: function (date) {
				// Check if the person is at least 18 years old
				const now = new Date();
				const age = now.getFullYear() - date.getFullYear();
				if (age < 18) {
					return false;
				}
				if (age === 18) {
					// Handle edge case where person turns 18 today
					if (
						now.getMonth() < date.getMonth() ||
						(now.getMonth() === date.getMonth() && now.getDate() < date.getDate())
					) {
						return false;
					}
				}
				return true;
			},
			message: "Person must be at least 18 years old!",
		},
	},
	country: {
		type: String,
		default: "Romania",
		required: true,
		unique: true,
	},
	city: {
		type: String,
		default: "Cluj-Napoca",
		required: true,
		unique: true,
	},
});

export default mongoose.model("Person", PersonSchema);
