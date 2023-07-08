import { IEntity } from "types";
import MoviesTable from "./movies-table";

interface MoviesProps {
	movies: IEntity.Movie[];
	search: string;
	onChangeSearch: (e: any) => void;
	onNavigate: (pathname: string) => void;
}

const Movies = ({ movies, search, onChangeSearch,onNavigate }: MoviesProps) => {
	const handleNavigate = (pathname: string) => {
		window.history.pushState({}, "", pathname);
		onNavigate(pathname);
	};

	return (
		<>
			<div className="main">
				<button className="btn btn-primary" onClick={() => handleNavigate("/add")}>New Movie</button>
				<p className="mt-3">Showing {movies.length} movies in the database.</p>
				<input
					value={search}
					type="text"
					placeholder="Search..."
					className="form-control my-3"
					onChange={(e) => {
						onChangeSearch(e.target.value);
					}}
				/>
				<MoviesTable movies={movies} />
			</div>
		</>
	);
};

export default Movies;
