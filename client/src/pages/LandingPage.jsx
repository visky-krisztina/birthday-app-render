import { Link } from "react-router-dom";
import logo from "../assets/images/cake_logo.svg";
import "./styles/LandingPage.css";

const LandingPage = () => {
	return (
		<div className='landing-container'>
			<nav>
				<img src={logo} alt='birthday' className='logo' />
				<h2>
					Datavid <span>birthday</span> tracker
				</h2>
			</nav>

			<Link to='/dashboard' className='btn main-btn'>
				Check it out!
			</Link>
		</div>
	);
};
export default LandingPage;
