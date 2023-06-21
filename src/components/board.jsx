import React, { Component } from "react";
import Box from "./box";

export default class Board extends Component {

 state = {
  board: Array(9).fill(null)
 }

	render() {
		return (
			<div className="board">
				{this.props.BoxBoard.map((value, idx) => {
					return <Box key={idx} value={value} handleClick={() => this.props.onclick} />;
				})}
			</div>
		);
	}
}
