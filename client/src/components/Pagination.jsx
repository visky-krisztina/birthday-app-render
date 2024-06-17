import "./styles/Pagination.css";

const Pagination = ({ currentPage, totalPages, onPreviousPage, onNextPage }) => {
	return (
		<div className='pagination'>
			<button className='pg-btn' onClick={onPreviousPage} disabled={currentPage === 1}>
				Previous
			</button>
			<span>
				Page {currentPage} of {totalPages}
			</span>
			<button className='pg-btn' onClick={onNextPage} disabled={currentPage === totalPages}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
