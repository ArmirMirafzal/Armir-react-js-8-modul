import React, { Component } from "react";

import Box from "./box";

interface BoardProps {
	board: string[];
	onBoardClick: (boxIdx: number) => void;
}

export default class Board extends Component<BoardProps, {}> {
	render() {
		return (
			<div className="board">
				{this.props.board.map((value, idx) => {
					return <Box key={idx} value={value} onBoxClick={() => this.props.onBoardClick} />;
				})}
			</div>
		);
	}
}
