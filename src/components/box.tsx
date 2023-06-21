import React, { Component } from "react";

interface BoxProps {
 value: string;
 onBoxClick: () => any;
}

export default class Box extends Component<BoxProps, {}> {
 value = this.props.value;
 style = this.value ==="X" ? "box x" : "box o"

	render() {
		return <button className={this.style} onClick={this.props.onBoxClick}>{this.value}</button>;
	}
}
