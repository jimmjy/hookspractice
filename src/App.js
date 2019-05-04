import React, { useState } from 'react';
import './App.css';

import Persons from './Persons';

function App() {
	const [personList, updatePersons] = useState({
		persons: [{ name: 'James', age: 30 }, { name: 'Cate', age: 25 }, { name: 'Manu', age: 33 }],
	});

	const onSwitchHandler = () => {
		const personsHolder = personList;
		personsHolder.persons[0].name = 'James Fink';
		updatePersons({ ...personsHolder });
	};

	const onChangeHandler = e => {
		const personsHolder = personList;
		personsHolder.persons[2].name = e.target.value;
		updatePersons({ ...personsHolder });
	};

	return (
		<div className="App">
			<h1>Hi from React App!</h1>
			<h1>This is really working</h1>
			<button onClick={onSwitchHandler}>Switch Names</button>
			<Persons name={personList.persons[0].name} age={personList.persons[0].age} />
			<Persons name={personList.persons[1].name} age={personList.persons[1].age}>
				My hobbies: Racing
			</Persons>
			<Persons
				name={personList.persons[2].name}
				age={personList.persons[2].age}
				change={onChangeHandler}
				value={personList.persons[2].name}
			/>
		</div>
	);
}

export default App;

// ======== 2 examples of creating classes with es5 syntax ==========
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// //better way, doesn't keep writing it on each initialization
// Person.prototype.hello = function() {
// 	return "hi I'm " + this.name + ' and I am ' + this.age + ' years old!';
// };

// const james = new Person('james', 30);
// console.log(james.hello());

// const test = Object.create({}, { name: { value: 'James' } }); //use value inside of second object looking thing
// console.log(test);
