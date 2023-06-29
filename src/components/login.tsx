import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Login extends Component {
	render() {
		return (
			<>
				<main className="container">
					<div>
						<h1 className="loginNmae">Login</h1>
						<form>
							<div className="form-group">
								<label>email</label>
								<input type="text" id="email" name="email" className="form-control" />
							</div>
							<div className="form-group">
								<label>Password</label>
								<input type="password" id="password" name="password" className="form-control" />
							</div>
							<button className="btn btn-primary">
								<Link id="login" to="/">
									login
								</Link>
							</button>
						</form>
					</div>
				</main>
			</>
		);
	}
}
