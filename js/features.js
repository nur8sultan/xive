var data = {
	features: [
		// {
		// 	pic
		// }
		{
			header: 'Transparent',
			pic: 'img/1.png',
			text: 'Xive is a completely transparent company that foresees the obvious advantages of mining operations in Kazakhstan',
		},
		{
			header: 'sdfsdf',
			pic: 'img/2.png',
			text: 'asdadasd',
		},
	],
	headers: {
		'Customer oriented approach',
		'Transportation'
	},
}
var featuresApp = new Vue({
	el: '#featuresApp',
	data: data,
	methods: {
		showModal: function(member) {
			this.modalVisible = true;
			this.modalInfo.name = member.name;
			this.modalInfo.position = member.position;
			this.modalInfo.photo = member.photo;
			this.modalInfo.info = member.info;
			console.log(this.modalInfo.photo);
			console.log(member);
		}
	}
})