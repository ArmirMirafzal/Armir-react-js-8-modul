import React, { Component } from "react";

import Board from "./components/board";

interface AppState {
	board: string[];
 Xplaying: boolean;
}

export default class App extends Component<{}, AppState> {
	state: AppState = {
		board: Array(9).fill(null),
  Xplaying: true,
	};

	handleBoxClick = (boxIdx?: number) => {
		const updateBoard = this.state.board.map((value, idx) => {
			if (idx === boxIdx) {
    return this.state.Xplaying === true ? "X" : "O";
			}else{
    return value;
   }
		});

  this.setState({board: updateBoard, Xplaying: !this.state.Xplaying})
	};

	render() {
		return (
			<div className="App">
				<Board board={this.state.board} onBoardClick={this.handleBoxClick} />
			</div>
		);
	}
}
