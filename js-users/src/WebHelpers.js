export const getUsers = async () => {
	try {
		const response = await fetch('http://js-assessment-backend.herokuapp.com/users', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			const result = await response.json();

			return result;
		}
	} catch (e) {
		console.log(e);
	}
};

export const editStatus = async (id, status) => {
	try {
		const response = await fetch('http://js-assessment-backend.herokuapp.com/users/' + id, {
			method: 'PUT',
			headers: {
				// Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				status: status
			})
		});
		if (response.ok) {
			return response.ok;
		}
	} catch (e) {
		console.log(e);
	}
};

export const editDetails = async (id, first_name = '', last_name = '') => {
	try {
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
		});

		const contentType = response.headers.get('content-type');

		if (contentType && contentType.indexOf('application/json') !== -1) {
			const result = await response.json();
			return result;
		} else {
			return { first_name: 'all good!', last_name: 'all good!' };
		}
	} catch (e) {
		console.log(e);
		return 'Error!';
	}
};

export const addNewUser = async (first_name, last_name) => {
	try {
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
		});
		const result = await response.json();
		if (Array.isArray(result.first_name) || Array.isArray(result.last_name)) {
			return result;
		} else {
			return { first_name: 'all good!', last_name: 'all good!' };
		}
	} catch (e) {
		console.log(e);
		return 'Error!';
	}
};
