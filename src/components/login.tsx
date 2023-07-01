import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

export let userToken: any;

export default class Login extends Component {
	inputEmail: any = React.createRef();
	inputPassword: any = React.createRef();

	handleLogin = (e: any) => {
		e.preventDefault();
		const LOGIN_API = "https://pdp-movies-78.onrender.com/api/auth";
		const LOGIN_ME = "https://pdp-movies-78.onrender.com/api/users/me";

		const dataLogin = async () => {
			try {
				const res = await axios.post(LOGIN_API, {
					email: this.inputEmail.current.value,
					password: this.inputPassword.current.value,
				});
				const { data: token } = await res.data;
				localStorage.setItem("userToken", token);
				userToken = localStorage.getItem("userToken");
			} catch (err) {
				console.log(err);
			}

			try {
				const responseMe = await axios(LOGIN_ME, {
					headers: {
						"Content-type": "application/json; charset=UTF-8",
						"x-auth-token": userToken,
					},
				});

				const {data: userData} = responseMe;
				const userName = userData.name;
				
			} catch (err) {
				console.log("error ? ? ?   => ", err);
			}
		};

		dataLogin();
	};

	render() {
		return (
			<>
				<main className="container">
					<div>
						<h1 className="loginNmae">Login</h1>
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
							<button onClick={this.handleLogin} className="btn btn-primary">
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

