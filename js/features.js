var data = {
	features: [
		{
			hexpic: 'img/111png',
			mainhead: 'Customer oriented approach',
			positionLeft: true;
		},
		{
			hexpic: 'img/111png',
			mainhead: 'Transportation',
			positionLeft: false;
		},
		{
			hexpic: 'img/111png',
			mainhead: 'Saving up to 80% on customs clearance',
			positionLeft: true;
		},
	],
	content: [
		{
			pic: 'img/1.png',
			header: 'Transparent',
			text: 'Xive is a completely transparent company that foresees the obvious advantages of mining operations in Kazakhstan',
		},
		{
			pic: 'img/1.png',
			header: 'Transparent',
			text: 'Xive is a completely transparent company that foresees the obvious advantages of mining operations in Kazakhstan',
		},
		{
			pic: 'img/1.png',
			header: 'Transparent',
			text: 'Xive is a completely transparent company that foresees the obvious advantages of mining operations in Kazakhstan',
		},
	],
	counter: 1;
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