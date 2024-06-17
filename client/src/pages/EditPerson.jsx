import { FormRow } from "../components";
import { useNavigation, Form, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

import "./styles/AddPerson.css";

export const loader = async ({ params }) => {
	try {
		const { data } = await customFetch.get(`/people/${params.id}`);
		return data;
	} catch (error) {
		toast.error(error.response.data.msg);
		return redirect("/dashboard");
	}
};
export const action = async ({ request, params }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		await customFetch.patch(`/people/${params.id}`, data);
		toast.success("Person edited successfully!");
		return redirect("/dashboard");
	} catch (error) {
		toast.error(error.response.data.msg);
		return error;
	}
};

const EditPerson = () => {
	const { person } = useLoaderData();
	console.log(person);
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	// Function to format date to YYYY-MM-DD
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		return `${year}-${month}-${day}`;
	};

	return (
		<div className='form-container'>
			<Form method='post' className='form'>
				<h4 className='form-title'>Edit person</h4>
				<div className='form-center'>
					<FormRow type='text' name='firstName' defaultValue={person.firstName} />
					<FormRow type='text' name='lastName' defaultValue={person.lastName} />

					<FormRow type='date' name='birthDate' defaultValue={formatDate(person.birthDate)} />
					<FormRow type='text' labelText='Country' name='Country' defaultValue={person.country} />
					<FormRow type='text' labelText='City' name='City' defaultValue={person.city} />

					<button type='submit' className='btn form-btn ' disabled={isSubmitting}>
						{isSubmitting ? "submitting..." : "Edit the person"}
					</button>
				</div>
			</Form>
		</div>
	);
};
export default EditPerson;
