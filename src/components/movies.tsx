import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Movies extends Component {
	render() {
		return (
			<>
				<main className="container">
					<div>
						<h1 className="movieTitle">Movie Form</h1>
						<form>
							<div className="form-group">
								<label>Title</label>
								<input type="text" id="title" name="title" className="form-control" />
							</div>
							<div className="form-group">
								<label>Genre</label>
								<select name="genreId" id="genreId" className="form-control">
									<option value=""></option>
									<option value="6478228faf1dabac984a0706">Action</option>
									<option value="6478228faf1dabac984a06fd">Comedy</option>
									<option value="6478228faf1dabac984a070f">Romance</option>
									<option value="64782290af1dabac984a0718">Thriller</option>
								</select>
							</div>
							<div className="form-group">
								<label>Number In Stock</label>
								<input
									type="number"
									id="numberInStock"
									name="numberInStock"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label>Rate</label>
								<input
									type="text"
									id="dailyRentalRate"
									name="dailyRentalRate"
									className="form-control"
								/>
							</div>
							<button disabled={true} className="btn btn-primary">
								<Link className="save" to="/">Save</Link>
							</button>
						</form>
					</div>
				</main>
			</>
		);
	}
}
