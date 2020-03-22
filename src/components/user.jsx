import React, { Component } from "react";
import * as PropTypes from 'prop-types';
import { UserName, Age, Address, Description, Gender } from "./misc";
import * as Misc from "./misc";



export class User extends Component {

	static propTypes = {
		description: PropTypes.string.isRequired,
		id: PropTypes.number,
	};

	static defaultProps = {
		description: "no description",
	};

	// state = {
	// 		name: "Dmitry",
	// 		age: 20,
	// 		puppies: [],
	// 		address: "Moscow, st.Stroiteley 50, flat 200",
	// 	};

	constructor(props) {
		super(props);

		this.state = {
			name: "Dmitry",
			age: 20,
			gender: "M",
			puppies: [],
			address: "Moscow, st.Stroiteley 50, flat 200",
		}
	}

	renderPuppies = () => {
		return "";
	};

	// handleClickUp = (e) => {
	// 	const {age = 0} = this.state;
	// 	this.setState({
	// 		age: age + 1,
	// 	});
	// };
	//
	// handleClickDown = (e) => {
	// 	console.log(e);
	// 	this.setState((curState) => ({age: curState.age - 1}) );
	// };

	handleClickAge = (type = "down") => (e) => {
		this.setState((prevState) => ({age: type.toUpperCase() === "UP" ? prevState.age + 1 : prevState.age - 1}) );
	};

	handleClickAgeAlternate = (type = "down") => {

		return function (e) {
				this.setState(
					(prevState) => ({age: type.toUpperCase() === "UP" ? prevState.age + 1 : prevState.age - 1})
				);
			};
	};


	handleClickAgeCycle = (e, type) => {
		this.setState((prevState) => ({age: type.toUpperCase() === "UP" ? prevState.age + 1 : prevState.age - 1}) );
	};



	handleChange = (e) => {
		// const { target }  = e;
		// const { value } = target;
		// this.setState({name: value});
		// const { value }  = e.target;

		const { target }  = e;
		const { name }  = target;
		// const value = target.type === "radio" ? target.checked : target.value;
		const value = target.value;
	console.log(name, value, target.type);
		this.setState({
			[name]: value,
		});

	};

	renderMale = (gender) => {
		// if (gender === "M") return "Male";
		// if (gender === "F") return "Female";
		// return "";

		return ({
			M: "Male",
			F: "Female",
		})[gender];

	};

	render() {
		const {
			name = "",
			age = "",
			gender = "",
			puppies = [],
			address = "",
		} = this.state;

		const { description } = this.props;

		const styles = {
			border: "2px solid grey",
			borderRadius: "5px",
			color: "#666666",
			width: "200px",
			margin: "20px",
		};
	console.log("RND:", gender);
		return (
			<div style={ styles }>
				<UserName name={ name } />
				<p>

					{
						!!puppies.length && this.renderPuppies()
					}
				</p>

				<input
					type="text"
					name="name"
					value={ name }
					onChange={ this.handleChange }
				/> <br />
				<input
					type="radio"
					name="gender"
					value="M"
					onChange={ this.handleChange }
				/> - Male <br />
				<input
					type="radio"
					name="gender"
					value="F"
					onChange={ this.handleChange }
				/> - Female <br />

				<hr />
				<div>
					<button onClick={ (e) => this.handleClickAgeCycle(e, "up") }>Up</button> &nbsp;
					<button onClick={ this.handleClickAge() }>Down</button>
				</div>
			</div>
		);
	}

}
