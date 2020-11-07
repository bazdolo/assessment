import React, { useState } from 'react';
import styles from './ListItem.module.css';
import { NavLink } from 'react-router-dom';
import { FaUserAlt, FaEdit, FaLock, FaLockOpen } from 'react-icons/fa';
import { editStatus } from '../../WebHelpers';

export default function ListItem({ user }) {
	const [ isLocked, setLocked ] = useState(user.status);

	let attachedClasses = [ styles.list_item ];
	if (isLocked === 'locked') {
		attachedClasses = [ styles.list_item, styles.list_item_disabled ];
	}

	const date = user.created_at.replace('T', ' ').substring(0, user.created_at.length - 13);

	const lockOnClick = async (status) => {
		await editStatus(user.id, status);
		setLocked(status);
	};

	return (
		<div key={user.id} className={attachedClasses.join(' ')}>
			<div className={styles.user_icon}>
				<FaUserAlt size="60" />
			</div>
			<div className={styles.details_container}>
				<p>{user.first_name}</p>
				<p>{user.last_name}</p>
				<p>{isLocked}</p>
				<p>{date}</p>
			</div>
			<div className={styles.icon_wrapper}>
				<NavLink
					to={{
						pathname: '/edit/' + user.id,
						state: {
							first_name: user.first_name,
							last_name: user.last_name,
							date: date
						}
					}}
					className={styles.link}
				>
					<FaEdit />
				</NavLink>

				{isLocked === 'locked' ? (
					<FaLock onClick={() => lockOnClick('active')} />
				) : (
					<FaLockOpen onClick={() => lockOnClick('locked')} />
				)}
			</div>
		</div>
	);
}
