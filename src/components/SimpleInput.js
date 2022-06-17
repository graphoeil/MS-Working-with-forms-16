// Imports
import React from "react";
import useInput from "../hooks/useInput";

/* Best combination for form validation is onChange with onBlur (loss focus), 
and submit bouton disabled or not. */

/* Naturaly these scripts will be best with a formData state with an object :
const [formData, setFormData] = useState({ name:'', nameIsValid:'', nameIsTouched:'' ... formIsValid:false })
and setFormData({ [e.target.name]:e.target.value }) on handleChange, 
and useEffect to check if form is valid, by looking at formData.name, ... changes,
or validation function trigger with handleChange ? */

// OR with custom hooks like below ,-)

// Component
const SimpleInput = () => {

	// Name custom hooks
	const { value:name, valueIsValid:nameIsValid, hasError:nameInputHasError, 
		handleChange:nameHandleChange, handleBlur:nameHandleBlur, 
		reset:resetName } = useInput((value) => {
			// Validate function for name ,-)
			return value.trim() !== '';
		});

	// Email custom hooks
	const { value:email, valueIsValid:emailIsValid, hasError:emailInputHasError, 
		handleChange:emailHandleChange, handleBlur:emailHandleBlur, 
		reset:resetEmail } = useInput((value) => {
			return value.trim().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		});

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
		resetName();
		resetEmail();
	};

	// Return
	return(
		<form onSubmit={ handleSubmit }>

			{/* Name */}
			<div className={ `form-control ${ nameInputHasError ? 'invalid' : '' }` }>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' name='name' value={ name } onChange={ nameHandleChange } onBlur={ nameHandleBlur }/>
				{
					nameInputHasError && <p className="error-text">Name must not be empty.</p>
				}
			</div>
			{/* Name */}

			{/* Email */}
			<div className={ `form-control ${ emailInputHasError ? 'invalid' : '' }` }>
				<label htmlFor='name'>Your Email</label>
				<input type='email' id='email' value={ email } onChange={ emailHandleChange } onBlur={ emailHandleBlur }/>
				{
					emailInputHasError && <p className="error-text">Please enter a valid email.</p>
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