// Imports
import React, { useEffect, useState } from "react";

// Component
const SimpleInput = () => {

	// State
	const [name, setName] = useState('');
	const [nameIsValid, setNameIsValid] = useState(false);
	const [nameIsTouched, setNameIsTouched] = useState(false);

	// Do not define nameIsValid as true
	useEffect(() => {
		console.log('Name input is valid !');
	},[name]);

	// Name input change
	const nameHandleChange = (e) => {
		setName(e.target.value);
	};

	// Submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		// Input name touched
		setNameIsTouched(true);
		// Validation
		if (name.trim() === ''){
			setNameIsValid(false);
			return;
		}
		setNameIsValid(true);
		// Reset
		setName('');
	};

	// Return
	return(
		<form onSubmit={ handleSubmit }>
			<div className={ `form-control ${ !nameIsValid && nameIsTouched ? 'invalid' : '' }` }>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' value={ name } onChange={ nameHandleChange }/>
				{
					!nameIsValid && nameIsTouched && <p className="error-text">Name must not be empty.</p>
				}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);

};

// Export
export default SimpleInput;