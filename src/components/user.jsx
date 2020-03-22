import React, { PureComponent } from "react";
import * as PropTypes from 'prop-types';
// import { all as Misc } from "./misc";
import * as Misc from "./misc_arrow";


export class User extends PureComponent {

	static propTypes = {
		description: PropTypes.string.isRequired,
		id: PropTypes.number,
		setCursor: PropTypes.bool,
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

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return nextState.name === this.state.name;
	// }

	constructor(props) {
		super(props);

		this.inputRef = React.createRef();

		this.state = {
			name: "Dmitry",
			age: 20,
			gender: "M",
			puppies: [],
			address: "Moscow, st.Stroiteley 50, flat 200",
		}
	}

	componentDidMount() {
		if (this.props.setCursor) {
			this.inputRef.current.focus();
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


		const data = {
			description,
			puppies: "Хомячок, Попугай и галка",
		};

		return (
			<div style={ styles }>


				<Misc.UserName name={ name } />
				<Misc.Gender gender={ gender } renderMale={ this.renderMale } />
				<Misc.Age age={ age } />
				<Misc.Address address={ address } />
				<p>

					{
						!!puppies.length && this.renderPuppies()
					}
				</p>

				<Misc.Description description={ data.description } puppies={ data.puppies }/>


				<input
					ref={ this.inputRef }
					type="text"
					name="name"
					value={ name }
					onChange={ this.handleChange }
					style={ { width: "180px" } }
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
