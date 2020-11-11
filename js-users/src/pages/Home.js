import React, { Fragment } from 'react';
import UserList from '../components/UserList/UserList';

export default function Home() {
	return (
		<Fragment>
			<div data-testid="home-screen" />
			<UserList />
		</Fragment>
	);
}
