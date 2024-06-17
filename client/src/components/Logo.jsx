import logo from "../assets/images/cake_logo.svg";
import { Link } from "react-router-dom";
const Logo = () => {
	return (
		<Link to='/'>
			<img src={logo} alt='Datavid logo' className='logo' />
		</Link>
	);
};

export default Logo;
