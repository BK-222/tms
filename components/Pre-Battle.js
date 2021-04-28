let preBattle = {
	emitted: ['startit'],
	props: {
		name: { type: String, required: true }
	},
	template:
	'<div>\
		<form @submit.prevent="startGame" class="pre-battle-screen">\
		<h1>[ ] Arena Gates [ ]</h1>\
			<h2>Are you ready to play, {{ this.name || "Jenny" }}?</h2>\
			<button type="submit">Begin!</button>\
		</form>\
	</div>',
	methods: {
		startGame: function() {
			this.$emit('startit');
		}
	}
}