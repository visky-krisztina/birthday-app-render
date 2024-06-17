import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ params }) => {
	try {
		await customFetch.delete(`/people/${params.id}`);
		toast.success("Person deleted successfully");
	} catch (error) {
		toast.error(error.response.data.msg);
	}
	return redirect("/dashboard");
};
const DeletePerson = () => {
	return <></>;
};
export default DeletePerson;
