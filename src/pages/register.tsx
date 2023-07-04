import { Component, FormEventHandler } from "react";

interface RegisterState {
	username: string;
	password: string;   
	name: string;
}

export default class Register extends Component {
	state: RegisterState = {
		username: "",
		password: "",
		name: "",
	};

	handleSubmit: FormEventHandler = (e) => {
		e.preventDefault();
		console.log("data = ", this.state);
	};

	renderInput = (name: keyof RegisterState, label: string, type = "text") => {
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
						const state = {} as RegisterState;
						state[name] = e.target.value;

						this.setState(state);
					}}
				/>
			</div>
		);
	}

	render() {
		return (
			<>
				<div>
					<h1>Register</h1>
					<form onSubmit={this.handleSubmit}>
						{this.renderInput("username", "Username")}
						{this.renderInput("password", "Password", "password")}
						{this.renderInput("name", "Name")}
						<button className="btn btn-primary">Register</button>
					</form>
				</div>
			</>
		);
	}
}
