import React, { Component } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Main from "./components/main";
import Login from "./components/login";
import Register from "./components/register";
import Movies from "./components/movies";

const URL = "https://pdp-movies-78.onrender.com/api/movies";

export type TMovies = {
	_id: string;
	genre: { name: string; id: string };
	title: string;
	numberInStock: number;
	dailyRentalRate: number;
}[];

export interface AppState {
	movies: TMovies;
	loginUserName: string;
}

export default class App extends Component {
	state: AppState = {
		movies: [],
		loginUserName: "",
	};

	componentDidMount(): void {
		const getMovies = async () => {
			try {
				const res = await axios(URL);
				const data = await res.data;
				console.log("movies data => ", data);
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
				<BrowserRouter>
					<div className="nav-container">
						<nav className="navbar">
							<h1>
								<Link to="/">Main</Link>
							</h1>
							<Link to="/login" id="changeLogin">
								Login
							</Link>
							<Link to="/register" id="changeRegister">
								Register
							</Link>
						</nav>
					</div>
					<Routes>
						<Route path="/" element={<Main movies={this.state.movies} />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/movies" element={<Movies />} />
					</Routes>
				</BrowserRouter>
			</>
		);
	}
}
