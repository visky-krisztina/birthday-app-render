import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

import { useDashboardContext } from "../pages/Dashboard";
const Navbar = () => {
	const { toggleSidebar } = useDashboardContext();
	return (
		<div className='nav-container'>
			<div className='nav-center'>
				<button type='button' className='toggle-btn' onClick={toggleSidebar}>
					<FaAlignLeft />
				</button>
				<div className='nav-logo'>
					<Logo />
				</div>

				<Link to='/' className='nav-logo-text'>
					Datavid Cake Tracker
				</Link>
				<div className='btn-container'>
					<ThemeToggle />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
