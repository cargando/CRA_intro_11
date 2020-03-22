import React, { Component } from "react";
import * as PropTypes from 'prop-types';

export function SimpleUserTr(props) {

	const {
		id,
		name,
		gender,
		age,
		address,
		puppies,
		description,
		renderPuppies,
	} = props;


	const renderMale = (gender) => {
		return ({
			M: "Male",
			F: "Female",
		})[gender];

	};

	return (
		<tr>
			<td>{ id }</td>
			<td>{ name }</td>
			<td>{ renderMale(gender) }</td>
			<td>{ age }</td>
			<td>{ address } <br /><small className="text-muted">{ description }</small></td>
			<td>{ renderPuppies(puppies) }</td>
		</tr>
	);
}

SimpleUserTr.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	renderPuppies: PropTypes.func.isRequired,
	gender: PropTypes.string,
	address: PropTypes.string,
	description: PropTypes.string,
	puppies: PropTypes.array,

};

SimpleUserTr.defaultProps = {
	puppies: [],
	address: null,
	gender: null,
	description: null,
};
