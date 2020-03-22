import React from 'react';

export function UserName({ name }) {
	return (
		<React.Fragment>
			<h3>User name: { name }</h3>
		</React.Fragment>
	);
}

export function Gender({renderMale, gender}) {
	return (
		<React.Fragment>
			Gender: { renderMale(gender) } <br />
		</React.Fragment>
	);
}

export function Age({age}) {
	return (
		<React.Fragment>
			Age: { age }<br />
		</React.Fragment>
	);
}

export function Address({address}) {
	return (
		<React.Fragment>
			Address: { address }<br />
		</React.Fragment>
	);
}

export function Description({description}) {
	return (
		<React.Fragment>
			<hr />
			<p>
				{
					description
				}
			</p>
			<hr />
		</React.Fragment>
	);
}
