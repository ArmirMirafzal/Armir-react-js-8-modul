interface PaginationProps {
	amount: number;
	currentPage: number;
	pageSize: number;
	onChangePage: (currentPage: number) => void;
}

const Pagination = ({ amount, currentPage, pageSize, onChangePage }: PaginationProps) => {
	const pages = new Array(Math.ceil(amount / pageSize)).fill(0).map((item, idx) => idx + 1);

	if (pages.length <= 1) return null;
	return (
		<ul className="pagination">
			{pages.map((page) => (
				<li key={page} className="page-item">
					<button onClick={() => onChangePage(page)} className={`page-link ${page === currentPage ? "active" : ""}`}>{page}</button>
				</li>
			))}
		</ul>
	);
};

export default Pagination;
