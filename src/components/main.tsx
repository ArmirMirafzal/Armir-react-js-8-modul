import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AppState } from "../App";
import SearchBox from "./common/search-box";

interface MainProps extends Pick<AppState, "movies"> {}

export default class Main extends Component<MainProps, {}> {
	state = {
		movies: [],
		genres: [],
		currentPage: 1,
		pageSize: 4,
		searchQuery: "",
		selectedGenre: null,
		sortColumn: { path: "title", order: "asc" }
};

handleSearch = (query: any) => {
	this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
};

	render() {
		const {
			pageSize,
			currentPage,
			genres,
			selectedGenre,
			searchQuery,
			sortColumn
	} = this.state;
		return (
			<>
					<div className="main-container">
						<div className="genres">
							<ul className="genres-ul">
								<li className="list-group-item">All Genres</li>
								<li className="list-group-item">Action</li>
								<li className="list-group-item">Comedy</li>
								<li className="list-group-item">Romance</li>
								<li className="list-group-item">Thriller</li>
							</ul>
						</div>
						<div className="main-middle">
							<div className="movies">
								<Link className="btn btn-primary" to="/movies">
									New Movie
								</Link>
								<p>
									Showing <span className="change-db">0</span> movies in the database.
								</p>

								<SearchBox value={searchQuery} onChange={this.handleSearch}/>
								{/* <input
									id="searchInput"
									type="text"
									name="query"
									className="form-control my-3"
									placeholder="Search..."
								/> */}
								<table className="table">
									<thead>
										<tr>
											<th className="clickable">
												Title <i className="fa fa-sort-asc"></i>
											</th>
											<th className="clickable">Genre</th>
											<th className="clickable">Stock</th>
											<th className="clickable">Rate</th>
											<th className="clickable"></th>
										</tr>
									</thead>
									<tbody>
										{this.props.movies.map((movie) => {
											return (
												<tr key={movie._id}>
													<td className="td">
														<Link className="link" to="/movies">
															{movie.title}
														</Link>
													</td>
													<td className="td">{movie.genre.name}</td>
													<td className="td">{movie.numberInStock}</td>
													<td className="td">{movie.dailyRentalRate}</td>
													<td className="td">
														<i className="fa fa-heart"></i>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
								<div className="pagination">
									<a className="page-link active">1</a>
									<a className="page-link">2</a>
								</div>
							</div>
						</div>
					</div>
			</>
		);
	}
}
