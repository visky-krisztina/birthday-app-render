import { useDashboardContext } from "../pages/Dashboard";
import { FaTimes } from "react-icons/fa";

import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import "./styles/SmallSidebar.css";

const SmallSidebar = () => {
	const { showSidebar, toggleSidebar } = useDashboardContext();

	return (
		<div className='smallSidebar'>
			<div className={showSidebar ? "smallSidebar-container show-sidebar" : "smallSidebar-container"}>
				<div className='content'>
					<button type='button' className='close-btn' onClick={toggleSidebar}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<h4 className='logo-text'>Datavid Cake Tracker</h4>

					<div className='nav-links'>
						{links.map((link) => {
							const { text, path, icon } = link;

							return (
								<NavLink to={path} key={text} className='nav-link' onClick={toggleSidebar} end>
									<span className='icon'>{icon}</span>
									{text}
								</NavLink>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default SmallSidebar;
