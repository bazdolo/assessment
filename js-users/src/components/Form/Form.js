import React, { useState, Fragment } from 'react';
import { FaUserAlt, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Alert from '../Alert/Alert';
import styles from './Form.module.css';

export default function Form({ addNewUser, editDetails, id, first_name, last_name, title }) {
	const [ firstNameError, setFirstNameError ] = useState('');
	const [ lastNameError, setLastNameError ] = useState('');
	const [ showAlert, setAlert ] = useState(false);

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (editDetails) {
			const { first_name, last_name } = await editDetails(id, e.target[0].value, e.target[1].value, setAlert);
			if (first_name) setFirstNameError(first_name);
			if (last_name) setLastNameError(last_name);
		}

		if (addNewUser) {
			const { first_name, last_name } = await addNewUser(e.target[0].value, e.target[1].value, setAlert);
			setFirstNameError(first_name);
			setLastNameError(last_name);
		}
	};

	const goBackHandler = () => {
		history.goBack();
	};

	return (
		<Fragment>
			<div>
				<FaArrowAltCircleLeft onClick={goBackHandler} />
			</div>
			<form onSubmit={handleSubmit}>
				<FaUserAlt size={'60'} />
				<h2>{title} Details</h2>
				<label>First Name</label>
				<div className={styles.input_wrapper}>
					<input className={styles.textInput} type="text" autoComplete="off" defaultValue={first_name} />
					<span>{firstNameError}</span>
				</div>

				<label>Last Name</label>
				<div className={styles.input_wrapper}>
					<input className={styles.textInput} type="text" autoComplete="off" defaultValue={last_name} />
					<span>{lastNameError}</span>
				</div>

				<input className={styles.submit} type="submit" value="Submit" />
			</form>
			{showAlert ? <Alert /> : []}
		</Fragment>
	);
}
