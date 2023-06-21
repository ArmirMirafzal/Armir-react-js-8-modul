import React from "react";
import ReactDOM from "react-dom/client";

import App from './components/app';

import "./assets/App.css";
import "./assets/Board.css";
import "./assets/Box.css";
import "./assets/ResetButton.css";
import "./assets/ScoreBoard.css";

/* 89-dars */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<>
			<App />
		</>
	</React.StrictMode>
);
