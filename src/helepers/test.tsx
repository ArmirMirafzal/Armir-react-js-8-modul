// import React, { Component } from "react";

// let REGISTER_API = "https://pdp-movies-78.onrender.com/api/users";

// export default class Register extends Component {
// 	inputEmail: any = React.createRef();
// 	inputPassword: any = React.createRef();
// 	inputName: any = React.createRef();

//   DataRegister = async () => {
//     try {
//       const response = await fetch(REGISTER_API, {
//         method: "POST",
//         body: JSON.stringify({
//           name: this.inputName.current.value,
//           email: this.inputEmail.current.value,
//           password: this.inputPassword.current.value,
//         }),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       });
//       console.log("response.body =>", response.body);
//       const data = await response.json();
//       console.log(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

// 	render() {
// 		return (
// 			<>
// 				<main className="container">
// 					<div>
// 						<h1 className="registerName">Register</h1>
// 						<form onSubmit={this.DataRegister}>
// 							<div className="form-group">
// 								<label>email</label>
// 								<input
// 									ref={this.inputEmail}
// 									type="text"
// 									id="email"
// 									name="email"
// 									className="form-control"
// 								/>
// 							</div>
// 							<div className="form-group">
// 								<label>Password</label>
// 								<input
// 									ref={this.inputPassword}
// 									type="password"
// 									id="password"
// 									name="password"
// 									className="form-control"
// 								/>
// 							</div>
// 							<div className="form-group">
// 								<label>Name</label>
// 								<input
// 									ref={this.inputName}
// 									type="text"
// 									id="name"
// 									name="name"
// 									className="form-control"
// 								/>
// 							</div>
// 							<button id="register" className="btn btn-primary">
// 								Register
// 							</button>
// 						</form>
// 					</div>
// 				</main>
// 			</>
// 		);
// 	}
// }

export {}


/* import React, { Component } from "react";
import axios from "axios";

import Form from "./common/form";


let REGISTER_API = "https://pdp-movies-78.onrender.com/api/users";

export default class Register extends Form {
  state = {
		data: { username: "", password: "", name: "" },
		errors: {},
	};

  componentDidMount(): void {
		const getMovies = async () => {
			try {
				const res = await axios.post(REGISTER_API);
				const data = await res.data;
				this.setState({ movies: data });
			} catch (error) {
				console.log(error);
			}
		};

		getMovies();
	}

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
								{this.renderInput("username", "Username")}
					{this.renderInput("password", "Password", "password")}
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


*/
