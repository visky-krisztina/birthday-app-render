import { StatusCodes } from "http-status-codes";

//This code defines a custom error class NotFoundError
// that extends the built-in Error class in JavaScript.
// The NotFoundError class is designed to be used when
//a requested resource is not found, and it includes a
//status code of 404 to indicate this.

export class NotFoundError extends Error {
	constructor(message) {
		super(message);
		this.name = "NotFOundError";
		this.statusCode = StatusCodes.NOT_FOUND;
	}
}
