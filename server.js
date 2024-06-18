import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import "express-async-errors";

const app = express();

// Enable CORS for your Netlify domain
app.use(
	cors({
		origin: "https://main--birthday-app-datavid.netlify.app",
	})
);

// Use morgan for logging in development
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
import personRouter from "./routes/peopleRoutes.js";

// Serve static files from the Vite build directory
app.use(express.static(path.join(__dirname, "client/dist")));

// API routes
app.use("/api/v1/people", personRouter);

// Serve the React app for all other routes
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

// Not Found Middleware
app.use("*", (req, res) => {
	res.status(404).json({ msg: "Not found.." });
});

// Error handling middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
app.use(errorHandlerMiddleware);

// Connect to MongoDB and start the server
try {
	await mongoose.connect(process.env.REACT_APP_MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
	const port = process.env.PORT || 5100;
	app.listen(port, () => {
		console.log(`Server running on PORT ${port}....`);
	});
} catch (error) {
	console.log(error);
	process.exit(1);
}
