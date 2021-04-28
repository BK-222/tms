let monsterCard = {
	props: {
		shock: { type: Boolean, required: true },
		health: { type: Number, required: true }
	},
	template:
	'<div>\
		<div class="monster-card">\
			<div v-if="shock" class="monster-card__image monster-card__image--shock push"></div>\
			<div v-else class="monster-card__image" :style="lowHealth"></div>\
		</div>\
	</div>',
	data: function() {
		return {

		}
	},
	computed: {
		lowHealth: function() {
			if (this.health.monster <= 25) {
				return {
					backgroundColor: 'red'
				}
			}
		}
	}
}