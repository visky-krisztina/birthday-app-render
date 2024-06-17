import { useDashboardContext } from "../pages/Dashboard";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import "./styles/BigSidebar.css";

const BigSidebar = () => {
	const { showSidebar } = useDashboardContext();

	return (
		<div className='bigSidebar'>
			<div className={showSidebar ? "bigSidebar-container " : "bigSidebar-container show-bgSidebar"}>
				<div className='bg-content'>
					<header>
						<Logo />
					</header>
					<h5 className='logo-text text-small'>Datavid Cake Tracker</h5>

					<NavLinks isBigSidebar />
				</div>
			</div>
		</div>
	);
};
export default BigSidebar;
