import React, { useState, Fragment } from 'react';
import { FaUserAlt, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Alert from '../Alert/Alert';
import styles from './Form.module.css';

export default function Form({ addNewUser, editDetails, id, first_name, last_name, title }) {
	const [ firstNameError, setFirstNameError ] = useState('');
	const [ lastNameError, setLastNameError ] = useState('');
	const [ showAlert, setAlert ] = useState({ show: false, message: '' });
	const [ firstName, setFirstName ] = useState(first_name || '');
	const [ lastName, setLastName ] = useState(last_name || '');

	const history = useHistory();

	const firstNameOnChange = (e) => {
		setFirstName(e.target.value);
	};

	const lastNameOnChange = (e) => {
		setLastName(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (editDetails) {
			const response = await editDetails(id, firstName, lastName, setAlert);

			if (response && response.first_name) setFirstNameError(response.first_name);
			if (response && response.last_name) setLastNameError(response.last_name);
			if (response && response.first_name === 'all good!') setAlert({ show: true, message: 'User updated' });
			if (response === 'Error!') setAlert({ show: true, message: 'Connection Error' });
		}

		if (addNewUser) {
			const response = await addNewUser(firstName, lastName, setAlert);

			if (response && response.first_name) setFirstNameError(response.first_name);
			if (response && response.last_name) setLastNameError(response.last_name);
			if (response && response.first_name === 'all good!') setAlert({ show: true, message: 'User created' });
			if (response === 'Error!') setAlert({ show: true, message: 'Connection Error' });
		}
	};

	const goBackHandler = () => {
		history.goBack();
	};

	return (
		<Fragment>
			<FaUserAlt size={'60'} />
			<h2>{title}</h2>
			<form data-testid={'form-' + title} onSubmit={handleSubmit}>
				<label>First Name</label>
				<div className={styles.input_wrapper}>
					<input
						className={styles.textInput}
						type="text"
						autoComplete="off"
						onChange={firstNameOnChange}
						defaultValue={first_name ? first_name : ''}
					/>
					<span>{firstNameError}</span>
				</div>

				<label>Last Name</label>
				<div className={styles.input_wrapper}>
					<input
						className={styles.textInput}
						type="text"
						autoComplete="off"
						onChange={lastNameOnChange}
						defaultValue={last_name ? last_name : ''}
					/>
					<span>{lastNameError}</span>
				</div>
				<div className={styles.button_control}>
					<FaArrowAltCircleLeft data-testid="back-button" size="30" onClick={goBackHandler} />
					<div style={{ width: '10px' }} />
					<input data-testid="submit-button" className={styles.submit} type="submit" value="Submit" />
				</div>
			</form>
			{showAlert.show ? <Alert message={showAlert.message} /> : []}
		</Fragment>
	);
}
