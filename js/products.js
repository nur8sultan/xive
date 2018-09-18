var data = {
	gg: [
		{
			num: '02',
			header: 'Equipment sales',
			text: 'We can procure equipment for you and deliver to your destination',
		},
		{
			num: '03',
			header: 'Mobile data centers',
			text: 'We do sell our mining containers in 20 and 40 ft modifications',
		},
		{
			num: '04',
			header: 'Consulting',
			text: 'We carry out consulting activities in the field of industrial mining and crypto',
		},
		{
			num: '05',
			header: 'Tailored projects and strategies',
			text: 'Our team will help you develop and implement your own project',
		},

	],
	set01: [
		'Developed data centers,equipped to maximize efficiency.',
		'Ensuring the most effective mining and management 24/7',
		'Fully equipped mobile data centers with the highest efficiency ',
		'Quick and easy transportation from the clients location to our hosting facilities',
		'Complete legal support and operation under the existing legislation',
	],
}
var productsApp = new Vue({
	el: '#productsApp',
	data: data,
})