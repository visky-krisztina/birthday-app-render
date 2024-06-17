import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import "./styles/Error.css";

const Error = () => {
	const error = useRouteError();
	console.log(error);
	if (error.status === 404) {
		return (
			<div className='error-container'>
				<div className='error-info'>
					<img src={img} alt='not found' />
					<h3>Ohh! page not found</h3>
					<p>We can not seem to find the page you are looking for.</p>
					<Link to='/' className='btn'>
						back home
					</Link>
				</div>
			</div>
		);
	}
	return (
		<div className='error-container'>
			<div>
				<h3>something went wrong</h3>
			</div>
		</div>
	);
};

export default Error;
