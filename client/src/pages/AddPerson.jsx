import { FormRow } from "../components";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import "./styles/AddPerson.css";

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	try {
		await customFetch.post("/people", data);
		toast.success("Person added succesfully!");

		return redirect("/dashboard");
	} catch (error) {
		toast.error(error?.response?.data?.msg);
		// Clear the form fields
		formData.forEach((value, key) => {
			formData.delete(key);
		});
		return error;
	}
};

const AddPerson = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<div className='form-container'>
			<Form method='post' className='form'>
				<h4 className='form-title'>add person</h4>
				<div className='form-center'>
					<FormRow type='text' name='firstName' />
					<FormRow type='text' name='lastName' />

					<FormRow type='date' name='birthDate' />
					<FormRow type='text' labelText='Country' name='Country' defaultValue='Romania' />
					<FormRow type='text' labelText='City' name='City' defaultValue='Cluj-Napoca' />

					<button type='submit' className='btn form-btn ' disabled={isSubmitting}>
						{isSubmitting ? "submitting..." : "Add new person"}
					</button>
				</div>
			</Form>
		</div>
	);
};
export default AddPerson;
