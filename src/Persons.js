import React from 'react';

const Persons = ({ name, age, children, change }) => {
	return (
		<div>
			<p>
				I'm {name} and I am {age} years old
			</p>
			{children}
			<br />
			<input type="text" onChange={change} />
		</div>
	);
};

export default Persons;
