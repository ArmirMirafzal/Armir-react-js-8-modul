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
	currentPage: number;
	postsPerPage: number;
	loading: boolean;
	loginUserName: string;
}

export default class App extends Component {
	state: AppState = {
		movies: [],
		currentPage: 1,
		postsPerPage: 4,
		loading: false,
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
		const lastIndex = this.state.currentPage * this.state.postsPerPage;
		const firstIndex = lastIndex - this.state.postsPerPage;
		const currentPosts = this.state.movies.slice(firstIndex, lastIndex);
		const pageNumbers = []


		for(let i=0; i<=Math.ceil(this.state.postsPerPage / this.state.movies.length); i++){
			pageNumbers.push(i)
		}

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
						<Route path="/" element={<Main pageNum={pageNumbers} current={currentPosts} movies={this.state.movies} loading={this.state.loading}/>} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/movies" element={<Movies />} />
					</Routes>
				</BrowserRouter>
			</>
		);
	}
}
