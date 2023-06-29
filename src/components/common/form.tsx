import React, { Component } from "react";
import Input from "./input";

export default class Form extends Component {
	state = {
		data: {},
		errors: {},
	};

	handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.state.errors };
		const error = this.validateProperty(input);
		if (error) errors[input.name] = error;
		else delete errors[input.name];

		const data = { ...this.state.data };
		data[input.name] = input.value;
		this.setState({ data, errors });
};

	renderInput(name: any, label: any, type = "text") {
		const { data, errors } = this.state;
		return (
			<Input
				type={type}
				name={name}
				value={data["name"]}
				label={label}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	}
}


export {}