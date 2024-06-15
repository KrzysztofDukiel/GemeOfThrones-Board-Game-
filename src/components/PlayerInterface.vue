<script>
import { useStore } from 'vuex';

export default {
	components: {},
	setup() {
		const store = useStore();
		const chooseUnit = (unit) => {
			const chosenUnit = unit;
			console.log(chosenUnit);
			return chosenUnit;
		};
		const chooseGeneral = (val) => {
			for (let commander in store.state.allComanders) {
				if (store.state.allComanders[commander].commander === val) {
					store.state.allComanders[commander].used =
						!store.state.allComanders[commander].used;
					console.log(store.state.allComanders[commander].used);
				}
			}
		};
		const zoomIn = () => {
			// console.log(commander)
			const zoomDiv = document.querySelector('.zoomPlayerInt');
			// zoomDiv.style.backgroundImage = url("src/assets/Commanders/BARATHEON/BARATHEON.png")
			zoomDiv.style.display = 'block';
		};
		const zoomOut = () => {
			const zoomDiv = document.querySelector('.zoomPlayerInt');
			zoomDiv.style.display = 'none';
		};
		return {
			chooseUnit,
			chooseGeneral,
			store,
			zoomIn,
			zoomOut,
		};
	},
};
</script>
<template>
	<div class="interface">
		<h2>{{ $store.state.house }}</h2>
		<div class="commanders">
			<h3>Comanders</h3>
			<ul class="commanders_list">
				<li v-for="commander in $store.state.houseCommanders">
					<img class="zoomPlayerInt" :src="commander.commander" alt="">
					<img
						v-if="!commander.used"
						:src="commander.commander"
						@mouseover="zoomIn()"
						@mouseout="zoomOut()"
						@click="chooseGeneral(commander.commander)"
						alt="" />
					<img
						v-if="commander.used"
						@click="chooseGeneral(commander.commander)"
						@mouseover="zoomIn(commander.commander)"
						@mouseout="zoomOut()"
						:src="commander.background"
						alt="" />
				</li>
			</ul>
		</div>
		<div class="units">
			<h3>Units</h3>
			<ul class="units_list">
				<li @click="chooseUnit('footman')">
					<img src="../assets/SVGunits/Vector 99.svg" alt="" />
				</li>
				<li @click="chooseUnit('ship')">
					<img src="../assets/SVGunits/Vector 102.svg" alt="" />
				</li>
				<li @click="chooseUnit('knight')">
					<img src="../assets/SVGunits/Vector 100.svg" alt="" />
				</li>
				<li @click="chooseUnit('tower')">
					<img src="../assets/SVGunits/Vector 101.svg" alt="" />
				</li>
			</ul>
		</div>
		<div class="powerTokens">
			<h3>Power Tokens:</h3>
			<button
				@click="$store.commit('decrementPowerTokens')"
				class="powerTokens_btn">
				-
			</button>
			<span>{{ $store.state.housePowerTokens }}</span>
			<button
				@click="$store.commit('incrementPowerTokens')"
				class="powerTokens_btn">
				+
			</button>
		</div>
	</div>
</template>

<style>
.interface {
	border: 2px solid black;
	width: 300px;
	padding: 10px;
	border-radius: 10px;
	margin-left: 10px;
	margin-top: 50px;
}
.interface li {
	cursor: pointer;
}
.commanders_list {
	display: flex;
	flex-wrap: wrap;
}
.commanders_list img {
	width: 35px;
	height: 50px;
}
.commanders_list img:hover {
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

.powerTokens_btn {
	background: none;
	border: 1px solid black;
	border-radius: 5px;
	cursor: pointer;
	height: 20px;
	margin: 10px;
}
.units_list {
	display: flex;
	flex-wrap: wrap;
}
.units_list img {
	width: 40px;
	height: 40px;
	margin-inline: 10px;
	fill: url('src/assets/unitsColor/ARRYN.png');
}
.zoomPlayerInt {
	display: none;
	position: absolute;
	top: 20px;
	width: 200px;
	height: 300px;
}
</style>
