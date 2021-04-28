let warmUp = {
	emitted: ['ready'],
	template:
	'<div class="pre-battle">\
		<h2>First let\'s warm up a little bit!</h2>\
		<h4>Click the button below for some footwork!</h4>\
		<div class="warm-up-container">\
			<transition name="warm-up">\
				<div v-if="isMoving" class="user-card__image"></div>\
			</transition>\
		</div>\
			<button @click="isMoving = !isMoving">Let\'s move and dodge!</button>\
		<h2>Click on the button below for the arena gates!</h2>\
		<button @click="proceed">Warm up is over!</button>\
	</div>',
	data: function() {
		return {
			isMoving: true
		}
	},
	methods: {
		proceed: function() {
			this.$emit('ready');
		}
	}
}