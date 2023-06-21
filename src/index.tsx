import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/App.css";
import "./assets/Board.css";
import "./assets/Box.css";
import "./assets/ResetButton.css";
import "./assets/ScoreBoard.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
