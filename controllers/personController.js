import Person from "../PersonModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/customErrors.js";

export const getAllPeople = async (req, res) => {
	const people = await Person.find({});
	res.status(StatusCodes.OK).json({ people });
};

export const createPerson = async (req, res) => {
	const person = await Person.create(req.body);
	res.status(StatusCodes.CREATED).json({ person });
};

export const getPerson = async (req, res) => {
	const { id } = req.params;
	const person = await Person.findById(id);
	if (!person) throw new NotFoundError(`No person found with id ${id}`);

	res.status(StatusCodes.OK).json({ person });
};

export const updatePerson = async (req, res) => {
	const { id } = req.params;
	const updatedPerson = await Person.findByIdAndUpdate(id, req.body, { new: true });
	if (!updatedPerson) throw new NotFoundError(`No person found with id ${id}`);

	res.status(StatusCodes.OK).json({ msg: "Person data modified!", person: updatedPerson });
};

export const deletePerson = async (req, res) => {
	const { id } = req.params;
	const removedPerson = await Person.findByIdAndDelete(id);
	if (!removedPerson) throw new NotFoundError(`No person found with id ${id}`);

	res.status(StatusCodes.OK).json({ msg: "person deleted", person: removedPerson });
};
