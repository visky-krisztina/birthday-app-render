import { toast } from "react-toastify";
import { PeopleContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async () => {
	try {
		const response = await customFetch.get("/people");
		const data = response.data;
		//console.log("Fetched data:", data);
		return data;
	} catch (error) {
		toast.error(error?.response?.data?.msg || "Error fetching people");
		return error; // Return a default structure
	}
};

const AllPeopleContext = createContext();

const AllPersons = () => {
	const { people } = useLoaderData();
	return (
		<AllPeopleContext.Provider value={people}>
			<h2>All the people from Datavid: </h2>
			<PeopleContainer />
		</AllPeopleContext.Provider>
	);
};
export const useAllPeopleContext = () => useContext(AllPeopleContext);
export default AllPersons;
