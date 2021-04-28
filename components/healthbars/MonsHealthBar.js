let monsHealthBar = {
	props: {
		health: { type: Number, required: true }
	},
	template:
	'<div class="combatant">\
		<h2>Monster</h2>\
		<div class="healthbar">\
			<div class="healthbar" :style="monsterHealth"></div>\
			<h4>{{ this.health }}</h4>\
		</div>\
	</div>',
	computed: {
		monsterHealth: function() {
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
				return 'black';
			}
		}
	}
}