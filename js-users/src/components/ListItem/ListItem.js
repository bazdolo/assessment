import React, { useState, useEffect } from 'react';
import styles from './ListItem.module.css';
import { NavLink } from 'react-router-dom';
import { FaUserAlt, FaEdit, FaLock, FaLockOpen } from 'react-icons/fa';
import { editStatus } from '../../WebHelpers';

export default function ListItem({ user }) {
	const [ isLocked, setLocked ] = useState(user.status);
	const [ formattedDate, setFormattedDate ] = useState('');

	let attachedClasses = [ styles.list_item ];
	if (isLocked === 'locked') {
		attachedClasses = [ styles.list_item, styles.list_item_disabled ];
	}

	useEffect(() => {
		const date = user.created_at.substring(0, user.created_at.length - 14);
		const time = user.created_at.substring(user.created_at.indexOf('T') + 1, user.created_at.length - 5);
		setFormattedDate({ date: date, time: time });
	}, []);

	const lockOnClick = async (status) => {
		const response = await editStatus(user.id, status);
		if (response) setLocked(status);
	};

	return (
		<div key={user.id} className={attachedClasses.join(' ')}>
			<div className={styles.user_icon}>
				<FaUserAlt />
			</div>
			<div data-testid={'list-id-' + user.id} className={styles.details_container}>
				<p>{user.first_name}</p>
				<p>{user.last_name}</p>
				<p>{isLocked}</p>
				<p>{formattedDate.date}</p>
				<p>{formattedDate.time}</p>
			</div>
			<div className={styles.icon_wrapper}>
				<NavLink
					data-testid="link-to-edit-user"
					to={{
						pathname: '/edit/' + user.id,
						state: {
							first_name: user.first_name,
							last_name: user.last_name,
							date: formattedDate
						}
					}}
					className={styles.link}
				>
					<FaEdit data-testid={'edit-' + user.id} size="20" />
				</NavLink>

				{isLocked === 'locked' ? (
					<FaLock data-testid={'locked-' + user.id} size="20" onClick={() => lockOnClick('active')} />
				) : (
					<FaLockOpen data-testid={'active-' + user.id} size="20" onClick={() => lockOnClick('locked')} />
				)}
			</div>
		</div>
	);
}
