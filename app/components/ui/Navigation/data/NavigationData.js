import uuid from 'uuid';

const NavigationData = [
	{
		navigation: [
			{
				id: uuid.v4(),
				title: 'Work',
				path: '/work'
			},
			{
				id: uuid.v4(),
				title: 'About',
				path: '/about'
			},
			{
				id: uuid.v4(),
				title: 'Contact',
				path: '/contact'
			}
		]
	}
];

export default NavigationData;	