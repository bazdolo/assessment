import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import UserList from './components/UserList/UserList';
import { getUsers, editStatus, addNewUser, editDetails } from './WebHelpers';
import { userData } from './test-data';
import NewUser from './pages/NewUser';

afterEach(cleanup);

jest.mock('./WebHelpers');

const mockUser = userData;

test('renders header', async () => {
	const { findByTestId } = render(<App />);
	expect(await findByTestId('header')).toHaveTextContent('Retro User List');
});

// Home - User list tests
test('to check getUsers api and user list components rendered', async () => {
	const asyncUsers = getUsers.mockResolvedValue(mockUser);

	const { findByTestId, findByLabelText } = render(
		<Router>
			<UserList />
		</Router>
	);

	expect(await findByTestId('loader')).not.toBeNull();
	const response = await asyncUsers();
	expect(mockUser).toEqual(response);
	expect(await findByTestId('add-new-link')).toBeInTheDocument();
	expect(await findByLabelText('Page 1 is your current page')).toBeInTheDocument();
	expect(await findByTestId('list-id-81')).toBeInTheDocument();
});

test('to check pagination onClick', async () => {
	getUsers.mockResolvedValue(mockUser);

	const { findByTestId, findByLabelText } = render(
		<Router>
			<UserList />
		</Router>
	);

	fireEvent.click(await findByLabelText('Page 2'));

	expect(await findByTestId('list-id-86')).toBeInTheDocument();
});

test('edit status api called and active status changes when clicked', async () => {
	getUsers.mockResolvedValue(mockUser);
	editStatus.mockResolvedValue(204);
	const { findByTestId } = render(
		<Router>
			<UserList />
		</Router>
	);

	fireEvent.click(await findByTestId('active-79'));
	expect(await findByTestId('locked-79')).toBeInTheDocument();
});

test('to check navigates to add new user screen and back to home', async () => {
	const { getByTestId } = render(
		<Router>
			<App />
		</Router>
	);

	await waitFor(() => expect(getByTestId('add-new-link')).toBeInTheDocument());
	fireEvent.click(getByTestId('add-new-link'));
	await waitFor(() => expect(getByTestId('new-user-screen')).toBeInTheDocument());
	fireEvent.click(getByTestId('back-button'));
	await waitFor(() => expect(getByTestId('home-screen')).toBeInTheDocument());
});

// // New User Tests
test('to check whether correct form for requested path is rendered', async () => {
	const { getByTestId } = render(
		<Router>
			<NewUser />
		</Router>
	);
	expect(getByTestId('form-Add New User')).toBeInTheDocument();
});

test('to check if last name form input is blank when submitting on new user screen', async () => {
	addNewUser.mockResolvedValue({
		last_name: [ "can't be blank" ]
	});

	const { getByTestId, getByText } = render(
		<Router>
			<NewUser />
		</Router>
	);

	fireEvent.click(getByTestId('submit-button'));
	await waitFor(() => expect(getByText("can't be blank")).toBeInTheDocument());
});

test('to check if both first name and lastname are submitted on new user screen', async () => {
	addNewUser.mockResolvedValue({
		first_name: 'all good!',
		last_name: 'all good!'
	});

	const { findByTestId, findAllByText } = render(
		<Router>
			<NewUser title="Add New User" />
		</Router>
	);

	fireEvent.click(await findByTestId('submit-button'));
	const allGoodElements = await waitFor(() => findAllByText('all good!'));
	expect(allGoodElements).toHaveLength(2);
});

test('to check if alert shows when details submitted', async () => {
	addNewUser.mockResolvedValue({
		first_name: 'all good!',
		last_name: 'all good!'
	});

	const { findByTestId, getByText } = render(
		<Router>
			<NewUser title="Add New User" />
		</Router>
	);

	fireEvent.click(await findByTestId('submit-button'));
	await waitFor(() => expect(getByText('User created')).toBeInTheDocument());
});

test('to check if alert shows connection error', async () => {
	addNewUser.mockResolvedValue('Error!');

	const { findByTestId, findByText } = render(
		<Router>
			<NewUser title="Add New User" />
		</Router>
	);

	fireEvent.click(await findByTestId('submit-button'));
	expect(await findByText('Connection Error')).toBeInTheDocument();
});

test('to check navigates to add edit user screen and back to home', async () => {
	getUsers.mockResolvedValue(mockUser);

	const { findByTestId, findAllByTestId } = render(
		<Router>
			<App />
		</Router>
	);

	const linkToUser = await findAllByTestId('link-to-edit-user');
	expect(linkToUser[0]).toBeInTheDocument();
	fireEvent.click(linkToUser[0]);
	expect(await findByTestId('edit-user-screen')).toBeInTheDocument();
	fireEvent.click(await findByTestId('back-button'));
	expect(await findByTestId('home-screen')).toBeInTheDocument();
});

// // Edit User screen

test('to check if both first name and last name are submitted on edit user screen with full test', async () => {
	getUsers.mockResolvedValue(mockUser);
	editDetails.mockResolvedValue({
		first_name: 'all good!',
		last_name: 'all good!'
	});

	const { findByTestId, findAllByTestId, findAllByText, findByText } = render(
		<Router>
			<App />
		</Router>
	);
	const linkToUser = await findAllByTestId('link-to-edit-user');
	expect(linkToUser[0]).toBeInTheDocument();
	fireEvent.click(linkToUser[0]);
	expect(await findByTestId('edit-user-screen')).toBeInTheDocument();
	fireEvent.click(await findByTestId('submit-button'));
	const allGoodElements = await findAllByText('all good!');
	expect(allGoodElements).toHaveLength(2);
	expect(await findByText('User updated')).toBeInTheDocument();
});
