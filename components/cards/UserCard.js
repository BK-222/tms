let userCard = {
	emitted: ['shock', 'forfeit'],
	props: {
		health: { type: Object, required: true },
		check: { type: Function, required: true },
		healing: { type: Boolean, required: true }
		// shock: { type: Object, required: true }
		// gaming: { type: Boolean, required: true }
	},
	template:
	'<div>\
		<div class="user-card" :class="[ animeClass, healBackground ]">\
			<div v-if="healing" class="user-card__image healing"></div>\
			<div v-else class="user-card__image"></div>\
			<div class="user-card__buttons">\
				<button class="user-card__buttons--attack" @click="attack">Attack!</button>\
				<button class="user-card__buttons--evasive" @click="attackEvasively">Evasive Attack!</button>\
				<button class="user-card__buttons--forfeit" @click="forfeit">Forfeit</button>\
			</div>\
			</div>\
		</div>\
	</div>',
	data: function() {
		return {
			// recoil: false,
			// evasive: false,
			animeClass: '',
			healBackground: {
				healbackground: false
			}
		}
	},
	methods: {
		attack: function() {
			let userDamage = this.calculateDamage(5, 15);
			this.health.monster = this.health.monster - userDamage;
			// this.recoil = true;
			this.animeClass = 'recoil';
			this.fadeAttack();
			
			if (this.check()) {
				return;
			}
			this.$emit('shock');

			let monsterDamage = this.calculateDamage(8, 18);
			this.health.user = this.health.user - monsterDamage;
			this.check();
		},
		attackEvasively: function() {
			this.health.monster = this.health.monster - 15;
			// this.evasive = true;
			this.animeClass = 'evasive';
			this.fadeEvasive();
			
			if (this.check()) {
				return;
			}
			this.$emit('shock');
		},
		// forfeit: function() {
		// 	if (confirm('Are you sure?')) {
		// 		this.gaming = false;
		// 	}
		// 	return;
		// },
		forfeit: function() {
			this.$emit('forfeit');
		},
		calculateDamage: function(min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		fadeAttack: function() {
			var vm = this;
			setTimeout(function() {
				vm.animeClass = '';
			}, 600);
		},
		fadeEvasive: function() {
			var vm = this;
			setTimeout(function() {
				vm.animeClass = '';
			}, 1000);
		}
	},
	watch: {
		healing: function() {
			this.healBackground.healbackground = true;
			var vm = this;
			setTimeout(function() {
				vm.healBackground.healbackground = false;
			}, 900);
		}

		
	// 	recoil: function() {
	// 		var vm = this;
	// 		setTimeout(function() {
	// 			vm.recoil = false;
	// 		}, 600);
	// 	},
	// 	evasive: function() {
	// 		var vm = this;
	// 		setTimeout(function() {
	// 			vm.evasive = false;
	// 		}, 1000);
	// 	}
	}
}




	// <div>\
	// 	<div  v-if="recoil" class="user-card recoil">\
	// 		<div class="user-card__image"></div>\
	// 		<div class="user-card__buttons">\
	// 			<button @click="attack">Attack!</button>\
	// 			<button @click="attackEvasively">Evasive Attack!</button>\
	// 			<button @click="forfeit">Forfeit</button>\
	// 		</div>\
	// 	</div>\
	// 	<div v-else-if="evasive" class="user-card evasive">\
	// 		<div class="user-card__image"></div>\
	// 		<div class="user-card__buttons">\
	// 			<button @click="attack">Attack!</button>\
	// 			<button @click="attackEvasively">Evasive Attack!</button>\
	// 			<button @click="forfeit">Forfeit</button>\
	// 		</div>\
	// 	</div>\
	// 	<div v-else class="user-card">\
	// 		<div class="user-card__image"></div>\
	// 		<div class="user-card__buttons">\
	// 			<button @click="attack">Attack!</button>\
	// 			<button @click="attackEvasively">Evasive Attack!</button>\
	// 			<button @click="forfeit">Forfeit</button>\
	// 		</div>\
	// 	</div>\
	// </div>