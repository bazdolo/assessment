import React from 'react';
import styles from './ListItem.module.css';

export default function ListItem({ user }) {
	return (
		<div key={user.id} className={styles.list_item}>
			<p>{user.first_name}</p>
			<p>{user.last_name}</p>
			<p>{user.status}</p>
			<p>{user.created_at}</p>
		</div>
	);
}
