let entryScreen = {
	template:
	'<div>\
		<div if="isSubmitted">\
		<div class="pre-battle flow-in">\
			<h2>What is the name of this brave warrior?</h2>\
			<form @submit.prevent="submitUserName">\
				<input type="text" v-model="name" v-focus min="9">\
				<button type="submit" :disabled="!isValid">Enter</button>\
			</form>\
			<h2>I am... {{ this.name }}</h2>\
		</div>\
		</div>\
	</div>',
	data: function() {
		return {
			name: '',
			isSubmitted: true
		}
	},
	methods: {
		submitUserName: function() {
			this.isSubmitted = false;
			this.$emit('submitusername', this.name);
		}
	},
	computed: {
		isValid: function() {
			let isValid = false;
			if (this.name.trim().length > 2) {
				isValid = true;
			} else {
				isValid = false;
			}
			return isValid;
		}
	},
	directives: {
		focus: {
			inserted: function(el) {
				el.focus();
			}
		}
	}
}