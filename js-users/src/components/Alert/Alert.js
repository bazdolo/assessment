import React from 'react';
import styles from './Alert.module.css';
import { NavLink } from 'react-router-dom';

export default function Alert({ message }) {
	return (
		<div className={styles.alert_container}>
			{message}
			<NavLink to="/">
				<button>OK</button>
			</NavLink>
		</div>
	);
}
