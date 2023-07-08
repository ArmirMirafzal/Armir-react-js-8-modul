import { Component } from "react";
import { Home, Login, Register } from "pages";
import { Navbar } from "components";
import AddMovie from "./pages/add-movie";
import EditMovie from "./pages/edit-movie";

interface AppState {
	pathname: string;
}

export default class App extends Component<{}, AppState> {
	state: AppState = {
		pathname: window.location.pathname,
	};

	getPage = () => {
		switch (this.state.pathname) {
			case "/login":
				return <Login />;
			case "/register":
				return <Register />;
			case "/add":
				return <AddMovie />;
			case "/edit":
				return <EditMovie />;
			default:
				return <Home onNavigate={this.handleNavigate}/>;
		}
	};

	handleNavigate = (pathname: string) => {
		this.setState({ pathname });
	};

	render() {
		const { pathname } = this.state;
		return (
			<>
				<Navbar currentPathname={pathname} onNavigate={this.handleNavigate} />
				<div className="container">{this.getPage()}</div>
			</>
		);
	}
}
