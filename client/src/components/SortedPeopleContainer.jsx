import { useState, useEffect } from "react";
import Person from "./Person";
import { useSortedPeopleContext } from "../pages/SortedPeopleList";
import Pagination from "./Pagination";
import "./styles/SortedPeopleContainer.css";
import logo from "../assets/images/present.svg";

const SortedPeopleContainer = () => {
	const people = useSortedPeopleContext();

	const today = new Date();
	const itemsPerPage = 3;
	const [currentPage, setCurrentPage] = useState(1);
	const [sortedPeople, setSortedPeople] = useState([]);

	// Function to calculate days until the next birthday
	const daysUntilNextBirthday = (birthDate) => {
		const birthDateThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
		const diff = birthDateThisYear.getTime() - today.getTime();
		return diff > 0 ? Math.ceil(diff / (1000 * 60 * 60 * 24)) : diff === 0 ? -0.5 : 10000;
	};

	useEffect(() => {
		// Sort people by upcoming birthdays
		const sorted = [...people].sort((a, b) => {
			const daysUntilA = daysUntilNextBirthday(new Date(a.birthDate));
			const daysUntilB = daysUntilNextBirthday(new Date(b.birthDate));
			return daysUntilA - daysUntilB;
		});

		setSortedPeople(sorted);
	}, [people]);

	const upcomingUntilJanuary1 = sortedPeople.filter((person) => {
		const birthDate = new Date(person.birthDate);
		return (
			(birthDate.getMonth() === today.getMonth() && birthDate.getDate() > today.getDate()) ||
			birthDate.getMonth() > today.getMonth()
		);
	});

	// Pagination logic
	const totalPages = Math.ceil(upcomingUntilJanuary1.length / itemsPerPage);

	const handlePreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const handleNextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const slicedBirtdayArray = upcomingUntilJanuary1.slice(1);
	const paginatedPeople = slicedBirtdayArray.slice(startIndex, endIndex);

	// Adjust index to start from 1
	const startFromIndex = startIndex + 1;

	return (
		<div className='displayBirthdays'>
			<h3>Who is gonna have birthday very soon?</h3>
			<div className='displayInfo'>
				<img src={logo} alt='birthday' className='b-icon' />
				<div className='birthdayPerson'>
					{upcomingUntilJanuary1.length > 0 && <Person {...upcomingUntilJanuary1[0]} />}
				</div>
			</div>
			<h4>And who is/are next in line?</h4>
			<div className='container'>
				<div className='peopleContainer'>
					{paginatedPeople.map((person, index) => (
						<Person
							key={person._id}
							index={startFromIndex + index} // Calculate sequential index starting from 1
							{...person}
						/>
					))}
				</div>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPreviousPage={handlePreviousPage}
					onNextPage={handleNextPage}
				/>
			</div>
		</div>
	);
};

export default SortedPeopleContainer;
