import React, { Component } from "react";
import * as PropTypes from 'prop-types';


// export function simpleUser({
// 	                           name,
// 	                           gender,
// 	                           age,
// 	                           address,
// 	                           puppies,
// 	                           description,
//                            }) {
export function simpleUser(props) {

	const {
		name,
		gender,
		age,
		address,
		puppies,
		description,
	} = props;

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
				Gender: { this.renderMale(gender) } <br />
				Age: { age }<br />
				Address: { address }<br />
				{
					!!puppies.length && this.renderPuppies()
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

simpleUser.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	gender: PropTypes.string,
	address: PropTypes.string,
	description: PropTypes.string,
	puppies: PropTypes.array,
};

simpleUser.defaultProps = {
	puppies: [],
	address: null,
	gender: null,
	description: null,
};
