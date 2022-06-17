// Imports
import React from "react";
import useInput from "../hooks/useInput";

// Function out of the component function will not be re-writing ,-)
const isNotEmpty = (value) => {
	return value.trim() !== '';
};

// Component
const BasicForm = () => {
	
	// First name custom hooks
	const { value:firstName, isValid:firstNameIsValid, hasError:firstNameHasError, 
		handleChange:firstNameHandleChange, handleBlur:firstNameHandleBlur, 
		reset:firstNameReset } = useInput(isNotEmpty);

	// Last name custom hooks
	const { value:lastName, isValid:lastNameIsValid, hasError:lastNameHasError, 
		handleChange:lastNameHandleChange, handleBlur:lastNameHandleBlur, 
		reset:lastNameReset } = useInput(isNotEmpty);

	// Email name custom hooks
	const { value:email, isValid:emailIsValid, hasError:emailHasError, 
		handleChange:emailHandleChange, handleBlur:emailHandleBlur, 
		reset:emailReset } = useInput((value) => {
		return value.trim().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
	});

	// Form is valid
	let formIsValid = false;
	if (firstNameIsValid && lastNameIsValid && emailIsValid){
		formIsValid = true;
	} else {
		formIsValid = true;
	}

	// Submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(firstName, lastName, email);
		firstNameReset();
		lastNameReset();
		emailReset();
	};

	// Return
	return(
		<form onSubmit={ handleSubmit }>
			<div className='control-group'>

				{/* First name */}
				<div className={ `form-control ${ firstNameHasError ? 'invalid' : '' }` }>
					<label htmlFor='firsName'>First Name</label>
					<input type='text' id='firsName' value={ firstName } onChange={ firstNameHandleChange } onBlur={ firstNameHandleBlur }/>
					{
						firstNameHasError && <p className="error-text">Please enter a first name.</p>
					}
				</div>
				{/* First name */}

				{/* Last name */}
				<div className={ `form-control ${ lastNameHasError ? 'invalid' : '' }` }>
					<label htmlFor='lastName'>Last Name</label>
					<input type='text' id='lastName' value={ lastName } onChange={ lastNameHandleChange } onBlur={ lastNameHandleBlur }/>
					{
						lastNameHasError && <p className="error-text">Please enter a last name.</p>
					}
				</div>
				{/* Last name */}

			</div>

			{/* Email */}
			<div className={ `form-control ${ emailHasError ? 'invalid' : '' }` }>
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' value={ email } onChange={ emailHandleChange } onBlur={ emailHandleBlur }/>
				{
					emailHasError && <p className="error-text">Please enter a valid email.</p>
				}
			</div>
			{/* Email */}

			{/* Submit btn */}
			<div className='form-actions'>
				<button disabled={ !formIsValid }>
					Submit
				</button>
			</div>
			{/* Submit btn */}

		</form>
	);

};

// Export
export default BasicForm;