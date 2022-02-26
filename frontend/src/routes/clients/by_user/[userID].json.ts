export async function get({ params }) {
	const clients = [
		{
			id: 1,
			attorneyID: 1,
			Client: 'HILL, KENNETH',
			NYSID: '04122663Q',
			Docket: 'CR-037036-19NY',
			Indictment: '000069-2020',
			Stage: 'Pre-Dispo',
			Next_Court_Date: '3/8/2022',
			Next_Court_Part: 'TAP A - New York',
			Release_Status: 'ROR',
			Immigration_Status: 'Citizen',
			Opened: '11/21/2019',
			Closed: '',
			Status: 'Active',
			Dispo_Date: '',
			Final_Dispo: '',
			Dispo_Top_Charge: '',
			Init_Top_Charge: '170.25 - CRIM POSS FORGED INSTRUMENT 2',
			Curr_Top_Charge: '170.25 - CRIM POSS FORGED INSTRUMENT 2',
			CType: 'F',
			IType: 'F',
			Arrest: 'M19651288',
		},
		{
			id: 2,
			attorneyID: 1,
			Client: 'TRAVIS, KELLEY',
			NYSID: '14983880M',
			Docket: 'CR-010338-20NY',
			Indictment: '',
			Stage: 'Pre-Dispo',
			Next_Court_Date: '2/16/2022',
			Next_Court_Part: 'E - New York',
			Release_Status: 'ROR',
			Immigration_Status: 'Citizen',
			Opened: '5/25/2020',
			Closed: '',
			Status: 'Active',
			Dispo_Date: '',
			Final_Dispo: '',
			Dispo_Top_Charge: '',
			Init_Top_Charge: 'VTL 1192.3 - OPERATE MV - INTOXICATED',
			Curr_Top_Charge: 'VTL 1192.3 - OPERATE MV - INTOXICATED',
			CType: 'M',
			IType: 'M',
			Arrest: 'M20616204',
		},
	];

	const userClients = clients.filter((c) => c.attorneyID == params.userID);

	return {
		status: 200,
		body: userClients,
	};
}
