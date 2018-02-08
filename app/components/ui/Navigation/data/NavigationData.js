import uuid from 'uuid';

const NavigationData = [
	{
		navigation: [
			{
				id: uuid.v4(),
				title: 'Home'
			},
			{
				id: uuid.v4(),
				title: 'Work'
			},
			{
				id: uuid.v4(),
				title: 'Contact'
			}
		]
	}
];

export default NavigationData;	