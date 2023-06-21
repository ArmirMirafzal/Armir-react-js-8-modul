import React, { Component } from "react";

export default class Box extends Component {
	style = this.props.value === "X" ? "box x" : "box o";

	render() {
		return (
			<button className={this.style} onClick={this.props.handleClick}>
				{this.props.value}
			</button>
		);
	}
}
