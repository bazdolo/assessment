import React, { Fragment } from 'react';
import UserList from '../components/UserList/UserList';

export default function Home({ hi }) {
	return (
		<Fragment>
			<h1>Retro Userlist</h1>
			<UserList />
		</Fragment>
	);
}
