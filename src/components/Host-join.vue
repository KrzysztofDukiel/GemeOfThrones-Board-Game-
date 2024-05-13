<script>
export default {
	data() {
		return {
			gameName: false,
			password: null,
			mode: false,
			gameList: [{gameName: "gra 1", numberOfPLayers: 8, gameHost: "nick", open: false, }, {gameName: "gra 2", numberOfPLayers: 4, gameHost: "nick", open: false, }, {gameName: "gra 3", numberOfPLayers: 5, gameHost: "nick", open: false, }],
		};
	},
	methods: {
		hostGame(name, nick) {
			this.gameList.push({gameName: name, numberOfPLayers: 1, gameHost: nick })
		},
	},
};
</script>

<template>
	<div class="background">
		<div class="container game">
			<div class="game_host">
				<h3>Host new Game</h3>
				<p>Name your game</p>
				<input type="text" name="text" id="gameName" />
				<p>Mode</p>
				<input type="text" name="text" id="mode" />
				
				<br/>
				<button>start</button>
			</div>
			<div class="game_join">
				<h3>Join Game</h3>
				<div class="game_join_list">
					<ul>
						<li v-for="game in gameList" >
							<h5>{{ game.gameName }}</h5>
							<p>{{ game.gameHost }}</p>
							<div><span>{{game.numberOfPLayers}}/9</span><button>join</button></div>
						</li>
						
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.background {
	background-image: url(../assets/throne_Tywin_and_Joffrey.jpg);
	height: 800px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-position: 50% 80%;
}
.game {
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	opacity: 0.6;
	border-radius: 20px;
	padding: 40px;
	font-size: 20px;
	max-height: 600px;
}

.game_host {
	margin-inline: 20px;
	padding: 15px;
	border: 1px solid white;
	border-radius: 10px;
}
.game_join {
	margin: 0 30px;
}
.game_join_list li {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
	border: 1px solid white;
	border-radius: 5px;
	padding: 1px 8px 3px 10px;
	list-style: none;
}
.game_join button {
	cursor: pointer;
	border-radius: 5px;
	padding: 3px 7px;
	width: 60px;
}

.game_join_list h5 {
	margin-right: 30px;
}
.game_join_list span {
	margin: 0 10px;
}
</style>
