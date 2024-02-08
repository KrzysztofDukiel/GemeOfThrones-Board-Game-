<script>
import axios from 'axios';
import { h } from 'vue';

// import draggable from 'vuedraggable';
export default {
	// components: {
	//   draggable,
	// },
	data() {
		return {
			imageX: 1000, // Dostosuj kordynaty X
			imageY: 1000, // Dostosuj kordynaty Y
			imageSize: 2000, // Dostosuj wielkość zdjęcia,
			// kolor frakcji rodzje figurki lista elemntow na planszy
			house: '',
			chosenElement: '',
			elementsArray: [],
			
			//
			type: '',
			mapWidth: 2000,
			mapHeight: 2257,
			clickedCoordinates: { x: 0, y: 0 },
			distanceFromEdges: { top: 0, right: 0, bottom: 0, left: 0 },
			preventClick: false,
			revers: true,
			ready: false
		};
	},
	watch:{
		elementsArray(){
			return this.elementsArray
		}
	},
	mounted: 
	async function() {
		try {
				const response = await axios.get('http://localhost:3000/elements/show')
				console.log(response.data)
				this.elementsArray = await response.data
			} catch (error) {
				console.log(error)
			}
        },

	methods: {
		changeHouse(house) {
			this.house = house;
			this.ready = false
			console.log(this.house);
		},
		chosenElementFunc(element, type) {
			if (this.house === '') {
				return 'choose house first';
			}
			this.type = type;
			this.chosenElement = element;
			console.log(this.chosenElement);
		},

		async calculateDistance(event) {
			const boundingRect = event.target.getBoundingClientRect();
			const offsetX = event.clientX - boundingRect.left;
			const offsetY = event.clientY - boundingRect.top;

			this.clickedCoordinates = { x: offsetX, y: offsetY };

			if (this.chosenElement === '' || this.house === '' || this.preventClick || this.ready) {
				console.log(this.preventClick);
				this.preventClick = false;
				return 'no element chosen';
			}
			// if(this.type === "orders") {
			// 	this.ordersArray.push()
			// }

			this.clickedCoordinates.y -= 30;
			this.clickedCoordinates.x -= 30;
				try {
					const response = axios.post('http://localhost:3000/elements/add-element', {
						type: this.type,
						house: this.house,
						position: `position: absolute; top: ${this.clickedCoordinates.y}px; left: ${this.clickedCoordinates.x}px;`,
						chosenElement: this.chosenElement,
						className: this.type + ' ' + this.house + this.chosenElement,
						revers: this.revers,
					})
					this.elementsArray.push(response)
					console.log(response)
				} catch (error) {
					console.log(error)
				}
			console.log(this.type, this.chosenElement);
			this.elementsArray.push({ // tu zmien
				class: this.type + ' ' + this.house + this.chosenElement,
				position: `position: absolute; top: ${this.clickedCoordinates.y}px; left: ${this.clickedCoordinates.x}px;`,
				type: this.type,
				chosenElement: this.chosenElement,
				house: this.house,
				revers: true,
			});

			this.type = '';
			this.clickedCoordinates.y = null;
			this.clickedCoordinates.x = null;
			this.type = '';
			this.chosenElement = '';
		},
		changePosition(index) {
			this.preventClick = true;
			if (this.house !== this.elementsArray[index].house || !this.elementsArray[index].revers ) {
				return 'wrong House';
			}
			console.log(this.elementsArray[index].house);
			if('units' === this.elementsArray[index].type) {
				
			}
			this.type = this.elementsArray[index].type;
			this.chosenElement = this.elementsArray[index].chosenElement;

			this.elementsArray.splice(index, 1);
		},
		Ready() {
			this.ready = true
			this.elementsArray.filter((elements) => {
				if (elements.house === this.house && 'orders' === elements.type && elements.revers) {
					elements.revers = !elements.revers;
						elements.class = elements.class + ' ' + this.house + 'R';
						console.log(elements.class)
				}
			});
		},
		UnReady() {
				this.ready = false
				this.elementsArray.filter((elements) => {
					
				if (elements.house === this.house && 'orders' === elements.type && !elements.revers ) {
					elements.revers = !elements.revers;
						let  oldClass = elements.class
						let  reversToRemove = " " + this.house + "R"
						let undoRevers =  oldClass.replace(reversToRemove, "" )
						console.log(undoRevers, oldClass , elements.revers)
						elements.class = undoRevers
				}
			});
			
		},

		
		async clearHouseOrders() {
			console.log(this.house)
			try {
				const response = axios.post('http://localhost:3000/elements/clear-orders', {
					house:	this.house
				})
				console.log(response, this.house)
			} catch (error) {
				console.log(error)
			}
		},
		async getArray() {
			
			try {
				const response = await axios.get('http://localhost:3000/elements/show')
				console.log(response.data)
				this.elementsArray = await response.data
			} catch (error) {
				console.log(error)
			}
		},
		checkArray(){
			console.log(this.elementsArray)
		}
	},
	
};
</script>

<template>
	<div class="play">
		<h1>Good luck have fun</h1>
		<div class="map" @click="calculateDistance">
			<img
				src="../assets/9PlayersMap.jpg"
				alt=""
				class="map_img"
				:style="{
					left: imageX + 'px',
					top: imageY + 'px',
					width: imageSize + 'px',
				}" />
			<div
				style="position: absolute; top: {{ clickedCoordinates.y }}px; left: {{ clickedCoordinates.x }}px; background-color: red; width: 10px; height: 10px;"></div>
			<div v-for="(element, index) in elementsArray" :key="element.position">
				<div
					v-bind:class="element.class"
					:style="element.position"
					@click="changePosition(index)"></div>
					
			</div>
			
		</div>
		
		<div>
			<p>Koordynaty po kliknięciu: {{ clickedCoordinates }}</p>
		</div>
		<div class="game">
			<div class="houses">
				<h2>Chose your house</h2>
				<ul class="houses_list">
					<!-- dostosowac do mapy roboczo robimy na sztywno -->
					<li @click="changeHouse('Baratheon')">Baratheon</li>
					<li @click="changeHouse('Lannister')">Lannister</li>
					<li @click="changeHouse('Grejoy')">Grejoy</li>
					<li @click="changeHouse('Tully')">Tully</li>
					<li @click="changeHouse('Arryn')">Arryn</li>
					<li @click="changeHouse('Targ')">Targ</li>
					<li @click="changeHouse('Stark')">Stark</li>
					<li @click="changeHouse('Tyller')">Tyller</li>
					<li @click="changeHouse('Martell')">Martell</li>
				</ul>
			</div>
			<div>
				<h2>Chose units</h2>
				<ul>
					<li @click="chosenElementFunc('p', 'units')">footman</li>
					<li @click="chosenElementFunc('k', 'units')">knight</li>
					<li @click="chosenElementFunc('w', 'units')">Tower</li>
					<li @click="chosenElementFunc('s', 'units')">ship</li>
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
			<button @click="Ready">Ready</button>
			<button @click="UnReady">Unready</button>
			<button @click="clearHouseOrders">Clear orders</button>
			
			<button @click="checkArray">test check array</button>

			<div class="house_cards"></div>
		</div>
	</div>
</template>

<style>
.map {
	position: relative;
	margin: auto;
	width: 2000px;
}
.map_img {
	width: auto;
	max-width: 100%;
	max-height: 100%;
	transform: scale(1);
}

.houses_list {
	cursor: pointer;
}
.houses_list li {
	border: 2px solid black;
	widows: 200px;
}
.orders {
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
}
.orders:hover,
.units:hover {
	cursor: pointer;
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
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
