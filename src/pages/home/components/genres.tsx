import { Component } from "react";
import { getGenres } from "services/fake";
import { IEntity } from "types";
import Movies from "./movies";

interface GenresState {
	genres: IEntity.Genre[];
	isLoading: boolean;
	genreName: string;
}

export default class Genres extends Component<{}, GenresState> {
	state: GenresState = {
		genres: [],
		isLoading: true,
		genreName: "All",
	};

	handleGenre = (genreName: string) => {
		this.setState({ genreName });
	};

	async componentDidMount() {
		const genres = await getGenres();
		this.setState({ genres, isLoading: false });
	}

	render() {
		const { genres, genreName, isLoading } = this.state;

		if (isLoading) {
			return (
				<div className="text-primary d-flex justify-content-center top-50">
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
			);
		}

		return (
			<div className="row">
				<div className="col-3">
					<ul className="list-group">
						{!this.state.isLoading && (
							<li
								onClick={() => this.handleGenre("All")}
								className={`list-group-item ${this.state.genreName === "All" ? "active" : ""}`}
							>
								All genre
							</li>
						)}
						{genres.map((genre) => (
							<li
								key={genre._id}
								onClick={() => this.handleGenre(genre.name)}
								className={`list-group-item ${this.state.genreName === genre.name ? "active" : ""}`}
							>
								{genre.name}
							</li>
						))}
					</ul>
				</div>
				<div className="col">
					<Movies genreName={genreName} />
				</div>
			</div>
		);
	}
}
