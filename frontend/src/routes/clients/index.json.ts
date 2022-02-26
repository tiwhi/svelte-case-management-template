import { clients } from './db';
export async function get() {
	// const clients = [
	// 	{
	// 		id: 1,
	// 		Client: 'HILL, KENNETH',
	// 		NYSID: '04122663Q',
	// 		Docket: 'CR-037036-19NY',
	// 		Indictment: '000069-2020',
	// 		Stage: 'Pre-Dispo',
	// 		Next_Court_Date: '3/8/2022',
	// 		Next_Court_Part: 'TAP A - New York',
	// 		On_For: 'conversion',
	// 		Converted: 'false',
	// 		Converted_Date: '',
	// 		Discovery_Due: '',
	// 		Discovery_Reviewed: '',
	// 		CoC_Received: '',
	// 		CoR_Received: '',
	// 		Issues: ['cooperative c/w?', 'id issue', 'bad stop?'],
	// 		to_Investigate: [
	// 			'canvas for video',
	// 			'clear search for c/w',
	// 			'canvas for witnesses',
	// 		],
	// 		Investigation_Request_Submitted: '',
	// 		Investigation_Due: '',
	// 		Investigation_Request_Followup: '', // one week after investigation submitted
	// 		Social_Work_Issues: [
	// 			'client needs phone',
	// 			'client needs housing',
	// 			'interview for PPI',
	// 			'request medical records',
	// 		],
	// 		Notes: [
	// 			{
	// 				created_date: '2/10/22',
	// 				tags: ['call from client', 'discovery'],
	// 				note: 'call from client on 2/10/22 re: what discovery turned over. Explained that none yet.',
	// 				tagged_people: [
	// 					{ role: 'assigned attorney', id: 1 },
	// 					{ role: 'paralegal', id: 7 },
	// 				],
	// 			},
	// 		],
	// 		Release_Status: 'ROR',
	// 		Immigration_Status: 'Citizen',
	// 		Opened: '11/21/2019',
	// 		Closed: '',
	// 		Status: 'Active',
	// 		Dispo_Date: '',
	// 		Final_Dispo: '',
	// 		Dispo_Top_Charge: '',
	// 		Init_Top_Charge: '170.25 - CRIM POSS FORGED INSTRUMENT 2',
	// 		Curr_Top_Charge: '170.25 - CRIM POSS FORGED INSTRUMENT 2',
	// 		CType: 'F',
	// 		IType: 'F',
	// 		Arrest: 'M19651288',
	// 		Phone: '646-000-0000',
	// 		Email: 'fake_client@fake.com',
	// 	},
	// 	{
	// 		id: 2,
	// 		Client: 'TRAVIS, KELLEY',
	// 		NYSID: '14983880M',
	// 		Docket: 'CR-010338-20NY',
	// 		Indictment: '',
	// 		Stage: 'Pre-Dispo',
	// 		Next_Court_Date: '2/16/2022',
	// 		Next_Court_Part: 'E - New York',
	// 		On_For: 'conversion',
	// 		Converted: 'false',
	// 		Converted_Date: '',
	// 		Discovery_Due: '',
	// 		Discovery_Reviewed: '',
	// 		CoC_Received: '',
	// 		CoR_Received: '',
	// 		Issues: ['cooperative c/w?', 'id issue', 'bad stop?'],
	// 		to_Investigate: [
	// 			'canvas for video',
	// 			'clear search for c/w',
	// 			'canvas for witnesses',
	// 		],
	// 		Investigation_Request_Submitted: '',
	// 		Investigation_Due: '',
	// 		Investigation_Request_Followup: '', // one week after investigation submitted
	// 		Social_Work_Issues: [
	// 			'client needs phone',
	// 			'client needs housing',
	// 			'interview for PPI',
	// 			'request medical records',
	// 		],
	// 		Notes: [
	// 			{
	// 				created_date: '2/10/22',
	// 				tags: ['call from client', 'discovery'],
	// 				note: 'call from client on 2/10/22 re: what discovery turned over. Explained that none yet.',
	// 				tagged_people: [
	// 					{ role: 'assigned attorney', id: 1 },
	// 					{ role: 'paralegal', id: 7 },
	// 				],
	// 			},
	// 		],
	// 		Release_Status: 'ROR',
	// 		Immigration_Status: 'Citizen',
	// 		Opened: '5/25/2020',
	// 		Closed: '',
	// 		Status: 'Active',
	// 		Dispo_Date: '',
	// 		Final_Dispo: '',
	// 		Dispo_Top_Charge: '',
	// 		Init_Top_Charge: 'VTL 1192.3 - OPERATE MV - INTOXICATED',
	// 		Curr_Top_Charge: 'VTL 1192.3 - OPERATE MV - INTOXICATED',
	// 		CType: 'M',
	// 		IType: 'M',
	// 		Arrest: 'M20616204',
	// 		Phone: '646-111-1111',
	// 		Email: 'fake_client2@fake.com',
	// 	},
	// ];

	return {
		status: 200,
		body: clients,
	};
}
