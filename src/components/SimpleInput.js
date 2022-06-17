// Imports
import React, { useState } from "react";

/* Best combination for form validation is onChange with onBlur (loss focus), 
and submit bouton disabled or not. */

/* Naturaly these scripts will be best with a formData state with an object :
const [formData, setFormData] = useState({ name:'', nameIsValid:'', nameIsTouched:'' ... formIsValid:false }) */

// Component
const SimpleInput = () => {

	// State
	const [name, setName] = useState('');
	const [nameIsTouched, setNameIsTouched] = useState(false);
	const [email, setEmail] = useState('');
	const [emailIsTouched, setEmailIsTouched] = useState(false);

	// Name is valid in a constant,
	// Don't forget that the component will be re-evaluated for each state change !
	const nameIsValid = name.trim() !== '';
	const nameInputIsInvalid = !nameIsValid && nameIsTouched;

	// Email
	const emailIsValid = email.trim().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	const emailInputIsInvalid = !emailIsValid && emailIsTouched;

	// Input changes
	const nameHandleChange = (e) => {
		setName(e.target.value);
	};
	const emailHandleChange = (e) => {
		setEmail(e.target.value);
	};

	// Validate form on blur (input lose focus)
	const nameHandleBlur = (e) => {
		// Input name touched
		setNameIsTouched(true);
	};
	const emailHandleBlur = (e) => {
		setEmailIsTouched(true);
	};

	// Form is valid ?
	// We can add nore input, if (nameIsValid && ageIsValid ...)
	let formIsValid = false;
	if (nameIsValid && emailIsValid){
		formIsValid = true;
	} else {
		formIsValid = false;
	}

	// Submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email);
		// Reset
		setNameIsTouched(false);
		setEmailIsTouched(false);
		setName('');
		setEmail('');
	};

	// Return
	return(
		<form onSubmit={ handleSubmit }>

			{/* Name */}
			<div className={ `form-control ${ nameInputIsInvalid ? 'invalid' : '' }` }>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' name='name' value={ name } onChange={ nameHandleChange } onBlur={ nameHandleBlur }/>
				{
					nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>
				}
			</div>
			{/* Name */}

			{/* Email */}
			<div className={ `form-control ${ emailInputIsInvalid ? 'invalid' : '' }` }>
				<label htmlFor='name'>Your Email</label>
				<input type='email' id='email' value={ email } onChange={ emailHandleChange } onBlur={ emailHandleBlur }/>
				{
					emailInputIsInvalid && <p className="error-text">Please enter a valid email.</p>
				}
			</div>
			{/* Email */}

			{/* Submit btn */}
			<div className="form-actions">
				<button disabled={ !formIsValid }>
					Submit
				</button>
			</div>
			{/* Submit btn */}

		</form>
	);

};

// Export
export default SimpleInput;