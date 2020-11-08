export const getUsers = async () => {
	const response = await fetch('http://js-assessment-backend.herokuapp.com/users', {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	}).catch((error) => {
		console.log(error);
	});
	console.log(response);

	const result = await response.json();
	return result;
};

export const editStatus = async (id, status) => {
	await fetch('http://js-assessment-backend.herokuapp.com/users/' + id, {
		method: 'PUT',
		headers: {
			// Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			status: status
		})
	}).catch((error) => {
		console.log(error);
	});
};

export const editDetails = async (id, first_name = '', last_name = '', callback) => {
	const response = await fetch('http://js-assessment-backend.herokuapp.com/users/' + id, {
		method: 'PUT',
		headers: {
			// Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			first_name: first_name,
			last_name: last_name
		})
	}).catch((error) => {
		console.log(error);
	});

	const contentType = response.headers.get('content-type');

	if (contentType && contentType.indexOf('application/json') !== -1) {
		const result = await response.json();
		console.log(result);
		return result;
	} else {
		callback(true);
		return { first_name: 'all good!', last_name: 'all good!' };
	}
};

export const addNewUser = async (first_name, last_name, callback) => {
	const response = await fetch('http://js-assessment-backend.herokuapp.com/users', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			first_name: first_name,
			last_name: last_name,
			status: 'active'
		})
	}).catch((error) => {
		console.log(error);
	});
	const result = await response.json();
	console.log(result);
	if (Array.isArray(result.first_name) || Array.isArray(result.last_name)) {
		return result;
	} else {
		callback(true);
		return { first_name: 'all good!', last_name: 'all good!' };
	}
};
