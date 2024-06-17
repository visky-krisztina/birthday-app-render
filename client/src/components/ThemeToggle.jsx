import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useDashboardContext } from "../pages/Dashboard";
import "./styles/ThemeToggle.css";

const ThemeToggle = () => {
	const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
	return (
		<div className='toggleDark' onClick={toggleDarkTheme}>
			{isDarkTheme ? <BsFillSunFill className='toggle-icon sun' /> : <BsFillMoonFill className='toggle-icon' />}
		</div>
	);
};

export default ThemeToggle;
