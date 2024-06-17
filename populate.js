import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import PersonModel from "./PersonModel.js";

try {
	await mongoose.connect(process.env.MONGO_URL);
	const jsonPeople = JSON.parse(await readFile(new URL("./mockData.json", import.meta.url)));
	await PersonModel.create(jsonPeople);
	console.log("Success!!!");
	process.exit(0);
} catch (error) {
	console.log(error);
	process.exit(1);
}
