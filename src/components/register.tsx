import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Register extends Component {
	inputEmail: any = React.createRef();
	inputPassword: any = React.createRef();
	inputName: any = React.createRef();

	handleRegister = (e: any) => {
		e.preventDefault();
		let REGISTER_API = "https://pdp-movies-78.onrender.com/api/users";
		const dataRegister = async () => {
			try {
				const res = await axios.post(REGISTER_API, {
					email: this.inputEmail.current.value,
					password: this.inputPassword.current.value,
					name: this.inputName.current.value,
				});
				console.log("register => ",res.data);
			} catch (err) {
				console.log(err);
			}
		};

		dataRegister();
	};

	render() {
		return (
			<>
				<main className="container">
					<div>
						<h1 className="registerName">Register</h1>
						<form>
							<div className="form-group">
								<label>email</label>
								<input
									ref={this.inputEmail}
									type="text"
									id="email"
									name="email"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									ref={this.inputPassword}
									type="password"
									id="password"
									name="password"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label>Name</label>
								<input
									ref={this.inputName}
									type="text"
									id="name"
									name="name"
									className="form-control"
								/>
							</div>
							<button onClick={this.handleRegister} id="register" className="btn btn-primary">
								<Link id="login" to="/">
									Register
								</Link>
							</button>
						</form>
					</div>
				</main>
			</>
		);
	}
}
