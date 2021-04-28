let healerCard = {
	emitted: ['emitit'],
	props: {
		health: { type: Object, required: true }
	},
	template:
	'<div>\
		<div class="healer-card" :class="healerClass">\
			<div class="healer-card__image"></div>\
			<div class="healer-card__buttons">\
				<button class="healer-card__buttons--heal" @click="heal">Heal</button>\
			</div>\
		</div>\
	</div>',
	data: function() {
		return {
			healerClass: ''
		}
	},
	methods: {
		heal: function() {
			if (this.health.user <= 85) {
				this.health.user = this.health.user + 15;	
			} else if (this.health.user > 85 && this.health.user < 100) {
				this.health.user = 100;
			}
			else return;
			this.$emit('emitit');
			this.healerClass = 'healbackground';
			this.fadeHealerClass();
		},
		fadeHealerClass: function() {
			let vm = this;
			setTimeout(function() {
				vm.healerClass = '';
			}, 900);
		}
	}
	// watch: {
	// 	healerClass: function() {
	// 		let vm = this;
	// 		setTimeout(function() {
	// 			vm.healerClass = '';
	// 		}, 900);
	// 	}
	// }
}