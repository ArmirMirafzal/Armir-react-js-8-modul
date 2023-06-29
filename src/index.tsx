import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import "./assets/main.css";
import "./assets/login.css";
import "./assets/movies.css";
import "./assets/register.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
