<script>
import { HouseDefinitions } from '@/configuration/GameDefinitions';
import { PowerTokensDefinitions } from '../configuration/PowerTokensDefinitions';
export default {
	components: {},
	setup() {
		const powerTokensDefinitions = PowerTokensDefinitions;
		return {
			powerTokensDefinitions,
		};
	},
};
</script>
<template>
	<!-- v-if="$store.state.house !== house.houseName" -->
	<div v-for="house in powerTokensDefinitions">
		<div class="enemis" v-if="$store.state.house !== house.houseName">
			<h3>{{ house.houseName }}</h3>
			<ul
				class="enemis_commanders"
				v-for="commander in $store.state.allComanders">
				<li v-if="commander.houseName == house.houseName">
					<img src="../assets/Commanders/LANNISTER/LANNISTER.png" alt="" />
				</li>
			</ul>
			<h3>Power tokens: {{ house.numberOfPowerTokens }}</h3>
		</div>
	</div>
</template>

<style>
.enemis {
	border: 2px solid black;
	padding: 5px;
	width: 310px;
	margin-left: 10px;
	margin-top: 10px;
	border-radius: 10px;
}

.enemis_commanders {
	display: inline-block;
	margin: 0;
	padding: 0;
}
.enemis_commanders img:hover {
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}
.enemis img {
	width: 35px;
	height: 50px;
}

</style>
