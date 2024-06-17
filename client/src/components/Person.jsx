import { FaLocationArrow, FaCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import { Link, Form } from "react-router-dom";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import PersonInfo from "./PersonInfo";
import "./styles/Person.css";
day.extend(advancedFormat);

const Person = ({ _id, firstName, lastName, birthDate, country, city, index }) => {
	const dateOfBirth = day(birthDate).format("MMM Do, YYYY");
	const fullName = firstName + " " + lastName;
	const fromData = country + ", " + city;
	return (
		<div className='person-card'>
			<header>
				<div className='main-icon'>{firstName.charAt(0)}</div>
				<div className='info'>
					<h5 className='name'>
						{index} {firstName}
					</h5>
					<div className='birthdate-style'>
						<FaCalendarAlt className='icon' />
						<h5>{dateOfBirth}</h5>
					</div>
				</div>
			</header>
			<div className='card-content'>
				<div className='content-center'>
					<PersonInfo icon={<IoPerson />} text={fullName} label='Full name' />
					<PersonInfo icon={<FaLocationArrow />} text={fromData} label='From' />
				</div>

				<footer className='actions'>
					<Link to={`/dashboard/edit-person/${_id}`} className='btn edit-btn'>
						Edit
					</Link>
					<Form method='post' action={`/dashboard/delete-person/${_id}`}>
						<button type='submit' className='btn delete-btn'>
							Delete
						</button>
					</Form>
				</footer>
			</div>
		</div>
	);
};
export default Person;
