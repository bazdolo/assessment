import React from 'react';
import { useLocation } from 'react-router';
import { FaUserAlt } from 'react-icons/fa';
import styles from './EditUser.module.css';

export default function EditUser() {
	const location = useLocation();
	console.log(location);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target[0].value);
	};

	return (
		<div>
			<FaUserAlt />

			<form onSubmit={handleSubmit}>
				<label>Edit Details</label>
				<input type="text" autoComplete="off" />
				<input type="text" autoComplete="off" />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
