import React, { Component } from "react";
import { getMovies } from "services/fake";
import { IEntity } from "types";

export interface MoviesState {
	movies: IEntity.Movie[];
	loading: boolean;
	currentPage: number;
	moviesPerPage: number;
	searchValue: string;
	currentPaginate: number;
}

export interface MoviesProps {
	genreName: string;
}

export default class Movies extends Component<MoviesProps, MoviesState> {
	state: MoviesState = {
		movies: [],
		searchValue: "",
		loading: true,
		currentPage: 1,
		moviesPerPage: 4,
		currentPaginate: 0,
	};

	handlePaginate = (pageNumber: number, idx: number) => {
		this.setState({ currentPage: pageNumber, currentPaginate: idx });
	};

	renderSort = () => {};

	async componentDidMount() {
		const movies = await getMovies();
		console.log("movies", movies);
		this.setState({ movies, loading: false });
	}

	render() {
		const { movies, currentPage, moviesPerPage, searchValue, loading } = this.state;
		const { genreName } = this.props;

		const moviesList =
			genreName === "All"
				? [...movies]
				: [...movies].filter((movie) => {
						return movie.genre.name === genreName;
				  });

		const searchList = searchValue.length
			? [...movies].filter((movie) => {
					return searchValue.toLowerCase() === ""
						? movie
						: movie.title.toLowerCase().includes(searchValue.toLowerCase());
			  })
			: moviesList;

		const indexOfLastMovie = currentPage * moviesPerPage; // 4
		const indexOfFirstMovie = indexOfLastMovie - moviesPerPage; // 4 - 4 = 0
		const currentMovies = [...searchList].slice(indexOfFirstMovie, indexOfLastMovie);

		const pageNumbers = [];

		for (let i = 0; i < Math.ceil(searchList.length / moviesPerPage); i++) {
			pageNumbers.push(i);
		}

		if (movies.length <= 3) return;

		return (
			<>
				<div className="main">
					<button className="btn btn-primary">New Movie</button>
					<p className="mt-3">Showing {searchList.length} movies in the database.</p>
					<input
						className="form-control my-3"
						onChange={(e) => this.setState({ searchValue: e.target.value })}
						type="text"
						placeholder="Search..."
					/>
					<table className="table table-border-top">
						<thead>
							<tr>
								<th>Title</th>
								<th>Genre</th>
								<th>Stock</th>
								<th>Rate</th>
							</tr>
						</thead>
						<tbody>
							{currentMovies.map((movie, idx) => (
								<tr key={idx ? idx : ""}>
									<td>{movie.title}</td>
									<td>{movie?.genre.name}</td>
									<td>{movie.numberInStock}</td>
									<td>{movie.dailyRentalRate}</td>
									<td>
										<i className="fa-regular fa-heart heart"></i>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<div>
						<ul className="pagination">
							{pageNumbers.map((number, idx) => (
								<li key={number} className="page-item">
									<button
										onClick={() => this.handlePaginate(number + 1, idx)}
										className={`page-link ${this.state.currentPaginate === idx ? "active" : ""}`}
									>
										{number + 1}
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</>
		);
	}
}
