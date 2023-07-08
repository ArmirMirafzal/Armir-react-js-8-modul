import { IEntity } from 'types';


interface MoviesTableProps {
 movies: IEntity.Movie[]
}

const MoviesTable = ({ movies }: MoviesTableProps) => {
	return (
		<table className="table table-border-top">
			<thead>
				<tr>
					<th>Title</th>
					<th>Genre</th>
					<th>Owner</th>
					<th>Stock</th>
					<th>Rate</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{movies.map((movie, idx) => (
					<tr key={idx ? idx : ""}>
						<td>{movie.title}</td>
						<td>{movie?.genre.name}</td>
						<td>{movie.username}</td>
						<td>{movie.numberInStock}</td>
						<td>{movie.dailyRentalRate}</td>
						<td>
							like comp
						</td>
						<td>
							<button className="btn btn-danger">delete</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default MoviesTable;
