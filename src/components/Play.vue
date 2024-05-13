<script>
import axios from 'axios';

export default {
	data() {
		return {
			houses: ["Baratheon", "Lannister", "Stark", "Grejoy", "Tyller", "Martell", "Tully", "Targaryen"],
			units: ["Footman", "Knight", "Sige tower", "Ship"]
		};
	},
	watch: {
		
	},
	computed: {
	
	},

	methods: {
	
		
	},
	mounted: async function () {
		try {
			const response = await axios.get('http://localhost:3000/elements/show');
			console.log(response.data);
			this.elementsArray = await response.data;
		} catch (error) {
			console.log(error);
		}
	},
};
</script>

<template>
	<div class="play">
		<h1>Good luck have fun</h1>
		<div class="map" @click="calculateDistance">

			<img  src="../assets/SVGSize.svg" alt="" class="map_img" />
			
			
			
			
		</div>
		
		<div class="game">
			<div class="houses">
				<h2>Chose your house</h2>
				<ul class="houses_list"  >
					<!-- dostosowac do mapy roboczo robimy na sztywno -->
					<li v-for="house in houses" @click="chooseHouse()" >{{ house }}</li>
					
				</ul>
			</div>
			<div>
				<h2>Choose units</h2>
				<ul>
					<li v-for="unit in units">{{unit}}</li>
					
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
	</div>
</template>

<style>
	

.map img {
	position: absolute;
	scale: 0.6;
	
}

.houses_list {
	cursor: pointer;
}
/* .houses_list li {
	border: 2px solid black;
	widows: 200px;
} */
/* .orders {
	width: 45px;
	height: 45px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 50%;
	transition: 0.3s;
}
.units {
	width: 45px;
	height: 45px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	transition: 0.3s;
} */

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
