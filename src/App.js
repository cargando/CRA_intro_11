import React from 'react';
import logo from './logo.svg';
import './App.css';
import { App2 } from "./App2";
import { User } from "./components/user";
import { SimpleUser } from "./components/simpleUser";
import { SimpleUserTr } from "./components/simpleUserTr";

export function App(props) {
	const userName = props.name && <h1>Yo! { props.name }</h1>
	const userAge = props.age && <h3>User age { props.age }</h3>

	const users = [
		{
			id: 1,
			name: "Иваныч",
			age: 30,
			gender: "M",
			address: "Asdfj laskjd flsjkd f",
			puppies: ['dog', "humster"],
			description: "Какое-то описание",
		}, {
			id: 2,
			name: "Семеныч",
			age: 40,
			gender: "M",
			address: "ывра лыорвла ыорва f",
			puppies: ['kitty', 'parrot'],
			description: "Какое-то описание 2",
		}, {
			id: 3,
			name: "Татьяныч",
			age: 50,
			gender: "M",
			address: "sdfoij wlkejf skndf",
			puppies: ['parrot', 'kitty'],
			description: "Какое-то описание 3",
		}, {
			id: 7,
			name: "Марьяна",
			age: 25,
			gender: "F",
			address: "oiuwe oro4i3 453i4 5",
			puppies: ['dog', 'kitty', 'parrot'],
			description: "Какое-то описание 5",
		}, {
			id: 35,
			name: "Ульяна",
			age: 32,
			gender: "А",
			address: "456  43з56о дло дулцке",
			puppies: ['parrot'],
			description: "Какое-то описание 5",
		},

	];
	// свойство (prop) key - это аналог атрибута ID в HTML
	// const renderUsers = (userInfo) => {
	//
	// 	return (<SimpleUser
	// 		key={ userInfo.id }
	// 		name={ userInfo.name }
	// 		age={ userInfo.age }
	// 		gender={ userInfo.gender }
	// 		puppies={ userInfo.puppies }
	// 		description={ userInfo.description }
	// 	/>);
	// };

	// const renderUsers = ({
	// 	                     id,
	// 	                     name,
	// 	                     gender,
	// 	                     age,
	// 	                     address,
	// 	                     puppies,
	// 	                     description,
	//                      }) => {
	//
	// 	return (<SimpleUser
	// 		key={ id }
	// 		name={ name }
	// 		age={ age }
	// 		address={ address }
	// 		gender={ gender }
	// 		puppies={ puppies }
	// 		description={ description }
	// 	/>);
	// };

	// const renderUsers = ({
	// 	                     id,
	// 	                     name,
	// 	                     gender,
	// 	                     age,
	// 	                     address,
	// 	                     puppies,
	// 	                     description,
	//                      }) => (<SimpleUser
	// 		key={ id }
	// 		name={ name }
	// 		age={ age }
	// 		address={ address }
	// 		gender={ gender }
	// 		puppies={ puppies }
	// 		description={ description }
	// 	/>);

	const renderPuppies = (puppies) => {
		if (!Array.isArray(puppies)) {
			return null;
		}

		return (
			<React.Fragment>
				{
					puppies.map((item, index, ms) => (
						<React.Fragment key={ index }>
							<small>{ item }</small>{ ms[index + 1] ? <React.Fragment>, <br /></React.Fragment> : null }
						</React.Fragment>
					))
				}
			</React.Fragment>
		);
	};

	const renderTr = (userInfo) => {

		const {
			id,
			name,
			gender,
			age,
			address,
			puppies,
			description,
		} = userInfo;

		return (<SimpleUserTr
			key={ id }
			id={ id }
			name={ name }
			age={ age }
			address={ address }
			gender={ gender }
			puppies={ puppies }
			description={ description }
			renderPuppies={ renderPuppies }
		/>);
	};

	return (
    <div className="App">
	    {
		    userName
	    }
	    {
		    userName && userAge
	    }
	    {
		    props.puppy || "нет питомца"
	    }
	    <User description="Some text" />

			<div style={ {display: "flex"} }>
				{
					users.map(({
						            id,
						            name,
						            gender,
						            age,
						            address,
						            puppies,
						            description,
					            }) => (<SimpleUser
						key={ id }
						name={ name }
						age={ age }
						address={ address }
						gender={ gender }
						puppies={ puppies }
						description={ description }
						renderPuppies={ renderPuppies }
					/>))
				}
			</div>
			<br />

			<h1>User list table</h1>
	    <table className="table table-striped">
		    <thead>
		    <tr>
			    <th scope="col">#</th>
			    <th scope="col">Name</th>
			    <th scope="col">Gender</th>
			    <th scope="col">Age</th>
			    <th scope="col">Description</th>
			    <th scope="col">Puppies</th>
		    </tr>
		    </thead>
		    <tbody>
		    {
			    users.map(renderTr)
		    }
		    </tbody>
	    </table>


      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	    <App2 />
	    <div>
		    <h3>Here are children:</h3>
		    {
		    	props.children
		    }
	    </div>
    </div>
  );
}


