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
