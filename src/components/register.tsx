import React, { Component } from "react";
import axios from "axios";

import Form from "./common/form";

let REGISTER_API = "https://pdp-movies-78.onrender.com/api/users";

export default class Register extends Form {
	state = {
		data: { email: "", password: "", name: "" },
		errors: {},
	};



	render() {
		return (
			<>
				<main className="container">
					<div>
						<h1 className="registerName">Register</h1>
						<form>
							<div className="form-group">{this.renderInput("email", "Email")}</div>
							<div className="form-group">
								{this.renderInput("password", "Password", "password")}
							</div>
							<div className="form-group">
								<label>Name</label>
								{this.renderInput("name", "Name")}
							</div>
							<button id="register" className="btn btn-primary">
								Register
							</button>
						</form>
					</div>
				</main>
			</>
		);
	}
}
