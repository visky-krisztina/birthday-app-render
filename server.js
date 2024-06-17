import * as dotenv from "dotenv";
dotenv.config();
const cors = require("cors");
import "express-async-errors";

import express from "express";
const path = require("path");
const app = express();

import morgan from "morgan";
import mongoose from "mongoose";

app.use(
	cors({
		origin: "https://main--birthday-app-datavid.netlify.app", // Allow your Netlify domain
	})
);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "dist")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
});

//routers
import personRouter from "./routes/peopleRoutes.js";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.use("/api/v1/people", personRouter);

//Not Found Middleware
app.use("*", (req, res) => {
	res.status(404).json({ msg: "Not found.." });
});

//Error Middleware - has to be the last one!
app.use(errorHandlerMiddleware);

try {
	await mongoose.connect(process.env.REACT_APP_MONGO_URL);
	const port = process.env.PORT || 5100;
	app.listen(port, () => {
		console.log(`server running on PORT ${port}....`);
	});
} catch (error) {
	console.log(error);
	process.exit(1);
}
