import React from 'react';

function UserName({ name }) {
	return (
		<React.Fragment>
			<h3>User name: { name }</h3>
		</React.Fragment>
	);
}

function Gender({renderMale, gender}) {
	return (
		<React.Fragment>
			<span>Gender: { renderMale(gender) }</span> <br />
		</React.Fragment>
	);
}

function Age({age}) {
	return (
		<React.Fragment>
			<span>Age: { age }</span><br />
		</React.Fragment>
	);
}

function Address({address}) {
	return (
		<React.Fragment>
			<span>Address: { address }</span><br />
		</React.Fragment>
	);
}

function Description({ description, puppies }) {
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
}

export const all = {
	UserName: React.memo(UserName),
	Gender: React.memo(Gender),
	Age: React.memo(Age),
	Address: React.memo(Address),
	Description: React.memo(Description),
};
