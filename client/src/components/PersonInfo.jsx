import "./styles/PersonInfo.css";
const PersonInfo = ({ icon, text, label }) => {
	return (
		<div className='personInfo-container'>
			<span className='person-icon'>{icon}</span>
			<span className='person-text'>
				{label}: {text}
			</span>
		</div>
	);
};
export default PersonInfo;
