import React, { Component } from "react";

export class User extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: "Dmitry",
			age: 20,
			puppies: [],
			address: "Moscow, st.Stroiteley 50, flat 200",
		}
	}

	renderPuppies = () => {
		return "";
	};

	handleClickUp = (e) => {
		const {age} = this.state;
		this.setState({
			age: age + 1,
		});

	};

	handleClickDown = (e) => {
		console.log(e);
		this.setState((curState) => ({age: curState.age - 1}) );
	};

	render() {
		const {
			name = "",
			age = "",
			puppies = [],
			address = "",
		} = this.state;

		const styles = {
			border: "2px solid grey",
			borderRadius: "5px",
			color: "#666666",
			width: "200px",
			margin: "20px",
		};

		return (
			<div style={ styles }>
				<h3>User name: { name }</h3>
				<p>
					Age: { age }<br />
					Address: { address }<br />
					{
						!!puppies.length && this.renderPuppies()
					}
				</p>
				<div>
					<button onClick={ this.handleClickUp }>Up</button> &nbsp;
					<button onClick={ this.handleClickDown }>Down</button>
				</div>
			</div>
		);
	}

}
