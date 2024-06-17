import { useState } from "react";
import Person from "./Person";
import Pagination from "./Pagination";
import { useAllPeopleContext } from "../pages/AllPersons";
import "./styles/PeopleContainer.css";

const PeopleContainer = () => {
	const people = useAllPeopleContext();
	//console.log("All persons: ", people);

	const itemsPerPage = 6;
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(people.length / itemsPerPage);

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentPeople = people.slice(startIndex, startIndex + itemsPerPage);

	if (!people || people.length === 0) {
		return (
			<div>
				<h2> No people to display..</h2>
			</div>
		);
	}
	return (
		<div className='container'>
			<div className='peopleContainer'>
				{currentPeople.map((persona) => {
					return <Person key={persona._id} {...persona} />;
				})}
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPreviousPage={handlePreviousPage}
				onNextPage={handleNextPage}
			/>
		</div>
	);
};
export default PeopleContainer;
