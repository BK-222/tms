let userHealthBar = {
	props: {
		health: { type: Number, required: true },
		name: { type: String, required: true }
	},
	template:
	'<div class="combatant">\
		<h2>{{ this.name || "Jenny" }}</h2>\
		<div class="healthbar">\
			<div class="healthbar" :style="userHealth"></div>\
			<h4>{{ this.health }}</h4>\
		</div>\
	</div>',
	computed: {
		userHealth: function() {
			return {
				width: this.health + '%',
				margin: 0,
				backgroundColor: this.dynamicBar
			}
		},
		dynamicBar: function() {
			if (this.health <= 25) {
				return 'red';
			} else {
				return 'lime';
			}
		}
	}
}