import useInput from '../hooks/use-input';

const BasicForm = (props) => {
	const {
		value: firstNameInputValue,
		hasError: firstNameInputHasError,
		valueChangeHandler: firstNameInputChangeHandler,
		inputBlurHandler: firstNameInputBlurHandler,
		reset: resetFirstNameInput
	} = useInput((value) => value.trim() !== '');

	const {
		value: lastNameInputValue,
		hasError: lastNameInputHasError,
		valueChangeHandler: lastNameInputChangeHandler,
		inputBlurHandler: lastNameInputBlurHandler,
		reset: resetLastNameInput
	} = useInput((value) => value.trim() !== '');

	const {
		value: emailInputValue,
		hasError: emailInputHasError,
		valueChangeHandler: emailInputChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput
	} = useInput((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

	const formIsValid = !firstNameInputHasError && !lastNameInputHasError && !emailInputHasError;

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) return;

		resetFirstNameInput();
		resetLastNameInput();
		resetEmailInput();
	};

	const firstNameInputClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
	const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
	const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="control-group">
				<div className={firstNameInputClasses}>
					<label htmlFor="firstName">First Name</label>
					<input type="text" id="firstName" onChange={firstNameInputChangeHandler} onBlur={firstNameInputBlurHandler} value={firstNameInputValue} />
					{firstNameInputHasError && <p className="error-text">First Name needs a value!</p>}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor="lastName">Last Name</label>
					<input type="text" id="lastName" onChange={lastNameInputChangeHandler} onBlur={lastNameInputBlurHandler} value={lastNameInputValue} />
					{lastNameInputHasError && <p className="error-text">Last Name needs a value!</p>}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">E-Mail Address</label>
				<input type="email" id="email" onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={emailInputValue} />
				{emailInputHasError && <p className="error-text">Email needs a valid email address!</p>}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
