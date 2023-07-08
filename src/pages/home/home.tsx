import { Component } from "react";

import { IEntity } from "types";
import { Genres, Movies } from "./components";
import { getGenres, getMovies } from "services/fake";
import { paginate } from "utils";

import Loader from "components/loader";
import Pagination from "./components/pagination";

interface HomeProps{
	onNavigate: (pathname: string) => void;
}

interface HomeState {
	movies: IEntity.Movie[];
	genres: IEntity.Genre[];
	isLoading: boolean;
	genreID: string;
	search: string;
	pageSize: number;
	currentPage: number;
}

export default class Home extends Component<HomeProps,HomeState> {
	state: HomeState = {
		movies: [],
		genres: [],
		isLoading: true,
		genreID: "all",
		search: "",
		pageSize: 4,
		currentPage: 1,
	};

	handleSelectGenre = (genreID: string) => {
		this.setState({ genreID });
	};

	handleChangeSearch = (search: string) => {
		this.setState({ search });
	};

	handleChangePage = (currentPage: number) => {
		this.setState({ currentPage });
	};

	async componentDidMount() {
		const movies = await getMovies();
		const genres = await getGenres();

		this.setState({
			movies,
			genres: [{ _id: "all", name: "All Genres" }, ...genres],
			isLoading: false,
		});
	}

	render() {
		if (this.state.isLoading) return <Loader />;

		const { movies, genres, genreID, search, currentPage, pageSize } = this.state;

		const filteredMovies =
			genreID === "all" ? movies : movies.filter((movie) => movie.genre._id === genreID);

		const searchedMovies = filteredMovies.filter((movie) =>
			movie.title.toLowerCase().includes(search.toLowerCase())
		);

		const paginatedMovies = paginate(searchedMovies, currentPage, pageSize);


		return (
			<>
				<div className="row">
					<div className="col-3">
						<Genres genreID={genreID} genres={genres} onSelectGenre={this.handleSelectGenre} />
					</div>
					<div className="col">
						<Movies
							search={search}
							movies={paginatedMovies}
							onNavigate={this.props.onNavigate}
							onChangeSearch={this.handleChangeSearch}
						/>
						<Pagination
							amount={searchedMovies.length}
							currentPage={currentPage}
							pageSize={pageSize}
							onChangePage={this.handleChangePage}
							/>
					</div>
				</div>
			</>
		);
	}
}
