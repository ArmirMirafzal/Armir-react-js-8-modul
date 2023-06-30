import React, { Component } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Main from "./components/main";
import Login from "./components/login";
import Register from "./components/register";
import Movies from "./components/movies";

const URL = "https://pdp-movies-78.onrender.com/api/movies";

export interface AppState {
	movies: {
		_id: string;
		genre: { name: string; id: string };
		title: string;
		numberInStock: number;
		dailyRentalRate: number;
	}[];
	currentPage: number;
	postsPerPage: number;
	loading: boolean;
}

export default class App extends Component {
	state: AppState = {
		movies: [],
		currentPage: 1,
		postsPerPage: 4,
		loading: false,
	};

	componentDidMount(): void {
		const getMovies = async () => {
			try {
				const res = await axios(URL);
				const data = await res.data;
				console.log("data => ", data);
				this.setState({ movies: data });
			} catch (error) {
				console.log(error);
			}
		};

		getMovies();
	}

	render() {
		const lastIndex = this.state.currentPage * this.state.postsPerPage;
		const firstIndex = lastIndex - this.state.postsPerPage;
		const currentPosts = this.state.movies.slice(firstIndex, lastIndex);

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
						<Route path="/" element={<Main movies={currentPosts} loading={this.state.loading}/>} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/movies" element={<Movies />} />
					</Routes>
				</BrowserRouter>
			</>
		);
	}
}
