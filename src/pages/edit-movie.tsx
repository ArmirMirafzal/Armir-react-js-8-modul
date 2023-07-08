import React, { Component } from "react";

interface EditMovieState {
	title: string;
	genreName: string;
	numberInStock: number;
	dailyRentalRate: number;
	username: string;
}

export default class EditMovie extends Component {
	state: EditMovieState = {
		title: "",
		genreName: "",
		numberInStock: 1,
		dailyRentalRate: 1,
		username: "",
	};

	renderInput = (name: keyof EditMovieState, label: string, type = "text") => {
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
					onChange={(e) => {
						const state: any = {};
						state[name] = e.target.value ;

						this.setState(state);
					}}
				/>
			</div>
		);
	};

	render() {
		return <div></div>;
	}
}
