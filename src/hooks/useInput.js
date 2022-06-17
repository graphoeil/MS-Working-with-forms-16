// Imports
import { useState } from "react";

// Hooks
const useInput = (validateValueFunc) => {

	// State
	const [value, setValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	// Variables
	const valueIsValid = validateValueFunc(value);
	const hasError = !valueIsValid && isTouched;

	// Methods
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const handleBlur = (e) => {
		setIsTouched(true);
	};
	const reset = () => {
		setValue('');
		setIsTouched(false);
	};

	// Return
	return { value, valueIsValid, hasError, handleChange, handleBlur, reset };

};

// Export
export default useInput;