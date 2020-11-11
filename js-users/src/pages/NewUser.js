import React from 'react';
import Form from '../components/Form/Form';
import { addNewUser } from '../WebHelpers';

export default function NewUser() {
	return (
		<div data-testid="new-user-screen">
			<Form data-testid="new-user-screen" addNewUser={addNewUser} title="Add New User" />
		</div>
	);
}
