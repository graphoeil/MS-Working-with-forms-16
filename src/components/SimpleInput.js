// Imports
import React, { useState } from "react";

/* Best combination for form validation is onChange with onBlur (loss focus), 
and submit bouton disabled or not. */

// Component
const SimpleInput = () => {

	// State
	const [name, setName] = useState('');
	const [nameIsTouched, setNameIsTouched] = useState(false);

	// Name is valid in a constant,
	// Don't forget that the component will be re-evaluated for each state change !
	const nameIsValid = name.trim() !== '';
	const nameInputIsInvalid = !nameIsValid && nameIsTouched;

	// Name input change
	const nameHandleChange = (e) => {
		setName(e.target.value);
	};

	// Validate form on blur (input lose focus)
	const nameHandleBlur = (e) => {
		// Input name touched
		setNameIsTouched(true);
	};

	// Form is valid ?
	// We can add nore input, if (nameIsValid && ageIsValid ...)
	let formIsValid = false;
	if (nameIsValid){
		formIsValid = true;
	} else {
		formIsValid = false;
	}

	// Submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		// Reset
		setNameIsTouched(false);
		setName('');
	};

	// Return
	return(
		<form onSubmit={ handleSubmit }>
			<div className={ `form-control ${ nameInputIsInvalid ? 'invalid' : '' }` }>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' value={ name } onChange={ nameHandleChange } onBlur={ nameHandleBlur }/>
				{
					nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>
				}
			</div>
			<div className="form-actions">
				<button disabled={ !formIsValid }>
					Submit
				</button>
			</div>
		</form>
	);

};

// Export
export default SimpleInput;