import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	const {
		value: enteredName,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput
	} = useInput((value) => value.trim() !== '');

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const {
		value: enteredEmail,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangedHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput
	} = useInput((value) => emailRegex.test(value));

	let formIsValid = !nameInputHasError && !emailInputHasError ? true : false;

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (nameInputHasError || emailInputHasError) return;

		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
	const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" onChange={nameChangedHandler} onBlur={nameBlurHandler} value={enteredName} />
				{nameInputHasError && <p className="error-text">Name must not be empty!</p>}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="name">Your Email</label>
				<input type="email" id="email" onChange={emailChangedHandler} onBlur={emailBlurHandler} value={enteredEmail} />
				{emailInputHasError && <p className="error-text">Email must be a valid email address!</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
