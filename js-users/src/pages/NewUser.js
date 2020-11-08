import React from 'react';
import { useLocation, useParams } from 'react-router';
import Form from '../components/Form/Form';
import { addNewUser } from '../WebHelpers';

export default function NewUser() {
	return <Form addNewUser={addNewUser} title="Add" />;
}
