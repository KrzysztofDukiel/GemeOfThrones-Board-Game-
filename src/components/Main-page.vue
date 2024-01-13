<script>
export default {
	data() {
		return {
			gameName: false,
			password: null,
			mode: false,
			gameList: [],
		};
	},
	methods: {
		hostGame() {},
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
				<p>Game password</p>
				<input type="password" name="password" id="password" />

				<button>start</button>
			</div>
			<div class="game_join">
				<h3>Join Game</h3>
				<div class="join_list">
					<ul>
						<li>test <button>join</button></li>
						<li>test1 <button>join</button></li>
						<li>test2 <button>join</button></li>
						<li>test3 <button>join</button></li>
						<li>test4 <button>join</button></li>
						<li>test5 <button>join</button></li>
						<!-- dodaj zawianie tekstu do 3 kropek jesli nie ma miejsca -->
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.background {
	background-image: url(../assets/throne_Tywin_and_Joffrey.jpg);
	height: 740px;
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
}

.game_host {
	margin-inline: 20px;
}
.game_join {
	margin: 0 30px;
}
.game_join li {
	margin: 15px 0;
	border: 1px solid white;
	border-radius: 5px;
	padding: 3px 8px 3px 10px;
	list-style: none;
}
</style>
