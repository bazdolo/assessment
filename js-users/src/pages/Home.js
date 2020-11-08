import React, { Fragment } from 'react';
import UserList from '../components/UserList/UserList';

export default function Home({ hi }) {
	return (
		<Fragment>
			<UserList />
		</Fragment>
	);
}
