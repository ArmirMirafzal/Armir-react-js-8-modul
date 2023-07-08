import { Component, FormEventHandler } from "react";
import { IEntity } from 'types';

interface AddMovieProps {
	genres: IEntity.Genre[]
}

interface AddMovieState {
	title: string;
	genreName: string;
	numberInStock: number;
	dailyRentalRate: number;
	username: string;
}

export default class AddMovie extends Component<{}, AddMovieState> {
	state: AddMovieState = {
		title: "",
		genreName: "",
		username: "",
		numberInStock: 1,
		dailyRentalRate: 1,
	};

	handleSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		console.log("data = ", this.state);
	};

	renderInput = (name: keyof AddMovieState, label: string, type = "text", list?: string) => {
		const value = this.state[name];

		return (
			<div className="form-group">
				<label htmlFor={name}>{label}</label>
				<input
					type={type}
					id={name}
					name={name}
					className="form-control"
					value={value}
					list={list}
					onChange={(e) => {
						const state: any = {};
						state[name] = e.target.value;

						this.setState(state);
					}}
				/>
			</div>
		);
	};

	render() {
		return (
			<>
				<h1>Add Movie</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("title", "Title")}
					{this.renderInput("genreName", "Genre Name", "text", "genres")}
					{/* <datalist id="genres">
						{this.props.genres.map((genre) => (
							<option key={genre._id} value={genre._id !== "all" ? genre.name : ""} />
						))}
					</datalist> */}
					{this.renderInput("username", "User Name")}
					{this.renderInput("numberInStock", "Stock")}
					{this.renderInput("dailyRentalRate", "Rate")}
				</form>
			</>
		);
	}
}
