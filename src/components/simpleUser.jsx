import React, { Component } from "react";
import * as PropTypes from 'prop-types';


// export function SimpleUser({
// 	                           name,
// 	                           gender,
// 	                           age,
// 	                           address,
// 	                           puppies,
// 	                           description,
//                            }) {


export function SimpleUser(props) {

	const {
		name,
		gender,
		age,
		address,
		puppies,
		description,
		renderPuppies,
	} = props;

	const styles = {
		border: "2px solid grey",
		borderRadius: "5px",
		color: "#666666",
		width: "200px",
		margin: "20px",
	};

	const renderMale = (gender) => {
		return ({
			M: "Male",
			F: "Female",
		})[gender];

	};


	return (
		<div style={ styles }>
			<h3>User name: { name }</h3>
			<p>
				Gender: { renderMale(gender) } <br />
				Age: { age }<br />
				Address: { address }<br />
				{
					!!puppies.length && renderPuppies()
				}
			</p>
			<hr />
			<p>
				{
					description
				}
			</p>

		</div>
	);
}

SimpleUser.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	renderPuppies: PropTypes.func.isRequired,
	gender: PropTypes.string,
	address: PropTypes.string,
	description: PropTypes.string,
	puppies: PropTypes.array,
};

SimpleUser.defaultProps = {
	puppies: [],
	address: null,
	gender: null,
	description: null,
};
