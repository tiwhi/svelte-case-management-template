export async function get({ params }) {
	const users = [
		{
			id: 1,
			firstName: 'Timothy',
			lastName: 'White',
			email: 'twhite@legal-aid.org',
			workCell: '646-584-7810',
			clients: [1, 2],
		},
		{
			id: 2,
			firstName: 'Jonathan',
			lastName: 'Smith',
			email: 'jsmith@legal-aid.org',
			workCell: '646-000-0000',
			clients: [1, 2],
		},
	];

	const user = users.find((u) => u.id == params.id);

	return {
		status: 200,
		body: user,
	};
}
