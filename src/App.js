import React from 'react';
import logo from './logo.svg';
import './App.css';
import { App2 } from "./App2";
import { User } from "./components/user";
import { SimpleUser } from "./components/simpleUser";

export function App(props) {
	const userName = props.name && <h1>Yo! { props.name }</h1>
	const userAge = props.age && <h3>User age { props.age }</h3>

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

	    <SimpleUser name="Иваныч" age={ 35 } />

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


