

<script lang="ts" setup>
import Map from './Map.vue';
import { HouseDefinitions } from '@/configuration/GameDefinitions.ts'
import { ref } from 'vue';
import { House } from '@/models/Houese.ts'

function changeHouse(name, id): House {
	const house = [name, id]
	console.log(house)
	return house
}

const units = ref(["Footman", "Knight", "Sige tower", "Ship"])
function chooseUnit(unit, id) {
	const chosenUnit = [unit, id]
	console.log(chosenUnit)
	return chosenUnit
}

</script>

<template>

	<h1 class="play_title">Good luck have fun</h1>
	
		<Map />
		<div class="houses">
				<h2>Chose your house</h2>
				<ul class="houses_list"  >
					
					<li v-for="house in HouseDefinitions"  @click="changeHouse(house.id)" >{{ house.houseName }}</li>
					
				</ul>
			</div>
		<div class="game">

			<div>
				<h2>Choose units</h2>
				<ul>
					<li v-for="unit in units" @click="chooseUnit(unit, units.indexOf(unit))">{{unit}}</li>
					
				</ul>
			</div>
			<h2>Orders</h2>
			<div class="tokens">
				<div class="attacks">
					<div @click="chosenElementFunc(' at-1', 'orders')">
						<img src="../assets/orders/at-1.webp" alt="" />
					</div>
					<div @click="chosenElementFunc(' at0', 'orders')">
						<img src="../assets/orders/at0.webp" alt="" />
					</div>
					<div @click="chosenElementFunc(' at1', 'orders')">
						<img src="../assets/orders/at1.webp" alt="" />
					</div>
				</div>
				<div class="supports">
					<div @click="chosenElementFunc(' def1', 'orders')">
						<img src="../assets/orders/def1.webp" alt="" />
					</div>
					<div @click="chosenElementFunc(' def1', 'orders')">
						<img src="../assets/orders/def1.webp" alt="" />
					</div>
					<div @click="chosenElementFunc(' def2', 'orders')">
						<img src="../assets/orders/def2.jpg" alt="" />
					</div>
				</div>
				<div class="raids">
					<div @click="chosenElementFunc(' raid', 'orders')">
						<img src="../assets/orders/raid.webp" alt="" />
					</div>
					<div @click="chosenElementFunc(' raid', 'orders')">
						<img src="../assets/orders/raid.webp" alt="" />
					</div>
					<div @click="chosenElementFunc(' raidSt', 'orders')">
						<img src="../assets/orders/raidSt.webp" alt="" />
					</div>
				</div>
				<div class="defends">
					<div @click="chosenElementFunc(' sup', 'orders')">
						<img src="../assets/orders/sup.webp" alt="" />
					</div>
					<div @click="chosenElementFunc(' sup', 'orders')">
						<img src="../assets/orders/sup.webp" alt="" />
					</div>
					<div @click="chosenElementFunc(' sup1', 'orders')">
						<img src="../assets/orders/sup1.webp" alt="" />
					</div>
				</div>
				<div class="Powertokens">
					<div @click="chosenElementFunc(' pow', 'orders')">
						<img src="../assets/orders/pow.webp" alt="" />
					</div>
					<div @click="chosenElementFunc(' pow', 'orders')">
						<img src="../assets/orders/pow.webp" alt="" />
					</div>
					<div @click="chosenElementFunc(' powSt', 'orders')">
						<img src="../assets/orders/powSt.webp" alt="" />
					</div>
				</div>
			</div>
			
			<div class="house_cards"></div>
		</div>
	
</template>

<style>
	.play_title {
		margin-left: 30px;
	}
.game {
	margin-left: 1600px;
}

.houses_list {
	cursor: pointer;
	display: flex;

}
.houses {
	margin-left: 400px;
}
.houses_list li {
	padding: 15px;
	list-style: none;
	border: 2px solid black;
	border-radius: 10px;
	margin-inline: 10px;
}

.tokens {
	display: flex;
}
.tokens img {
	width: 60px;
	height: 60px;
	object-fit: contain;
	cursor: pointer;
}
</style>
