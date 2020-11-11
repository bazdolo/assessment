import React from 'react';
import { useLocation, useParams } from 'react-router';
import Form from '../components/Form/Form';
import { editDetails } from '../WebHelpers';

export default function EditUser() {
	const { state: { first_name, last_name } } = useLocation();
	const { id } = useParams();

	return (
		<div data-testid="edit-user-screen">
			<Form editDetails={editDetails} id={id} first_name={first_name} last_name={last_name} title="Edit User" />
		</div>
	);
}
