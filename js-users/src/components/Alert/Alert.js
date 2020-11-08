import React from 'react';
import styles from './Alert.module.css';

export default function Alert() {
	return (
		<div className={styles.alert_container}>
			Details Saved!<button>OK</button>
		</div>
	);
}
