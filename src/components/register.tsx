import React, { Component } from "react";
import axios from 'axios';

let REGISTER_API = "https://pdp-movies-78.onrender.com/api/users";

export default class Register extends Component {
	inputEmail: any = React.createRef();
	inputPassword: any = React.createRef();
	inputName: any = React.createRef();

  handleSubmit = (cb: () => {}) => {
    cb()
  }

  componentDidMount(): void {
    const DataRegister = async () => {
      try {
        const response = await axios.post(REGISTER_API, {
            name: this.inputName.current.value,
            email: this.inputEmail.current.value,
            password: this.inputPassword.current.value,
        });
        console.log("response.data  =>", response.data);
      } catch (err) {
        console.log(err);
      }
    };

    this.handleSubmit(DataRegister)
  }

	render() {
		return (
			<>
				<main className="container">
					<div>
						<h1 className="registerName">Register</h1>
						<form onSubmit={() => this.handleSubmit}>
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