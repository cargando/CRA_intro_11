import React from 'react';

function areEqual(prevProps, nextProps) {
	console.log("Result of comparision: ", prevProps.name != nextProps.name, prevProps, nextProps);
	return prevProps.name != nextProps.name;
}


export const UserName = React.memo(({ name }) => {
	return (
		<React.Fragment>
			<h3>User name: { name }</h3>
		</React.Fragment>
	);
}); ///, areEqual);

export const Gender = React.memo(({renderMale, gender}) => {
	return (
		<React.Fragment>
			<span>Gender: { renderMale(gender) }</span> <br />
		</React.Fragment>
	);
});

export const Age = React.memo(({age}) => {
	return (
		<React.Fragment>
			<span>Age: { age }</span><br />
		</React.Fragment>
	);
});

export const Address = React.memo(({address}) => {
	return (
		<React.Fragment>
			<span>Address: { address }</span><br />
		</React.Fragment>
	);
});

export const Description = React.memo(({ description, puppies }) => {
	return (
		<React.Fragment>
			<hr />
			<p>
				{
					description
				}
				<br />
				<small className="text-muted">{ puppies }</small>
			</p>
			<hr />
		</React.Fragment>
	);
});
