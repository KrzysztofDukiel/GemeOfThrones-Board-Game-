<script>
import { watch } from 'vue';
import { PowerTokensDefinitions } from '../configuration/PowerTokensDefinitions';
import { useStore } from 'vuex';

export default {
	components: {},
	setup() {
		const store = useStore();
		const powerTokensDefinitions = PowerTokensDefinitions;

		watch(
			() => store.state.allComanders,
			() => {},
			{ deep: true }
		);
		const zoomIn = (commander) => {
			// console.log(commander)
			const zoomDiv = document.querySelector(".zoom")
			// zoomDiv.style.backgroundImage = url("src/assets/Commanders/BARATHEON/BARATHEON.png")
			// zoomDiv.style.display = "block"
		}
		const zoomOut = () => {
			const zoomDiv = document.querySelector(".zoom")
			zoomDiv.style.display = "none"
			
		}
		return {
			powerTokensDefinitions,
			store,
			zoomIn,
			zoomOut
		};
	},
};
</script>
<template>
	
	<div v-for="house in $store.state.powerTokens">
		<div class="enemis" v-if="$store.state.house !== house.houseName">
			<h3>{{ house.houseName }}</h3>
			<ul
				class="enemis_commanders"
				v-for="commander in $store.state.allComanders">
				<li v-if="commander.houseName == house.houseName">
					<div class="zoom" :id="commander"  ></div>
					<img v-if="!commander.used" @mouseover="zoomIn(commander.commander)" @mouseout="zoomOut()" :src="commander.commander" alt="" />
					<img v-if="commander.used" @mouseover="zoomIn(commander.commander)"  @mouseout="zoomOut()" :src="commander.background" alt="" />
				</li>
			</ul>
			<h3>Power tokens: {{ house.numberOfPowerTokens }}</h3>
		</div>
	</div>
</template>

<style>
.enemis {
	border: 2px solid white;
	padding: 5px;
	width: 310px;
	margin-left: 10px;
	margin-top: 10px;
	border-radius: 10px;
	text-align: center;
}

.enemis_commanders {
	display: inline-block;
	margin: 0;
	padding: 0;
}
.enemis_commanders img:hover {
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
	transform: scale(3); 
}
.enemis_commanders img {
	width: 35px;
	height: 50px;
	margin: 5px;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.zoom {
	display: none;
	position: absolute;
	width: 200px;
	height: 300px;
	border: 2px solid black;
	
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
