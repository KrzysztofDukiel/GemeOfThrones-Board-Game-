<script>
import axios from 'axios';
import { h } from 'vue';
import { state } from '../socket';

// import draggable from 'vuedraggable';
export default {
	data() {
		return {
			house: '',
			chosenElement: '',
			elementsArray: [],

			//
			type: '',
			mapWidth: 2000,
			mapHeight: 2257,
			clickedCoordinates: { x: 0, y: 0 },
			preventClick: false,
			revers: true,
			ready: false,
			message: '',
			name: 'ConnectionState',
		};
	},
	watch: {
		elementsArray() {
			return this.elementsArray;
		},
	},
	computed: {
		connected() {
			return state.connected;
		},
	},

	methods: {
		changeHouse(house) {
			this.house = house;
			this.ready = false;
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

			if (
				this.chosenElement === '' ||
				this.house === '' ||
				this.preventClick ||
				this.ready
			) {
				console.log(this.preventClick);
				this.preventClick = false;
				return 'no element chosen';
			}

			this.clickedCoordinates.y -= 30;
			this.clickedCoordinates.x -= 30;
			try {
				const response = axios.post(
					'http://localhost:3000/elements/add-element',
					{
						type: this.type,
						house: this.house,
						position: `position: absolute; top: ${this.clickedCoordinates.y}px; left: ${this.clickedCoordinates.x}px;`,
						chosenElement: this.chosenElement,
						className: this.type + ' ' + this.house + this.chosenElement,
						revers: this.revers,
					}
				);
				this.elementsArray.push(response);
				console.log(response);
			} catch (error) {
				console.log(error);
			}
			console.log(this.type, this.chosenElement);
			this.elementsArray.push({
				// tu zmien
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
			if (
				this.house !== this.elementsArray[index].house ||
				!this.elementsArray[index].revers
			) {
				return 'wrong House';
			}
			console.log(this.elementsArray[index].house);
			if ('units' === this.elementsArray[index].type) {
			}
			this.type = this.elementsArray[index].type;
			this.chosenElement = this.elementsArray[index].chosenElement;

			this.elementsArray.splice(index, 1);
		},
		Ready() {
			this.ready = true;
			this.elementsArray.filter((elements) => {
				if (
					elements.house === this.house &&
					'orders' === elements.type &&
					elements.revers
				) {
					elements.revers = !elements.revers;
					elements.class = elements.class + ' ' + this.house + 'R';
					console.log(elements.class);
				}
			});
		},
		UnReady() {
			this.ready = false;
			this.elementsArray.filter((elements) => {
				if (
					elements.house === this.house &&
					'orders' === elements.type &&
					!elements.revers
				) {
					elements.revers = !elements.revers;
					let oldClass = elements.class;
					let reversToRemove = ' ' + this.house + 'R';
					let undoRevers = oldClass.replace(reversToRemove, '');
					console.log(undoRevers, oldClass, elements.revers);
					elements.class = undoRevers;
				}
			});
		},

		async clearHouseOrders() {
			console.log(this.house);
			try {
				const response = axios.post(
					'http://localhost:3000/elements/clear-orders',
					{
						house: this.house,
					}
				);
				console.log(response, this.house);
			} catch (error) {
				console.log(error);
			}
		},
		async getArray() {
			try {
				const response = await axios.get('http://localhost:3000/elements/show');
				console.log(response.data);
				this.elementsArray = await response.data;
			} catch (error) {
				console.log(error);
			}
		},
		checkArray() {
			console.log(this.elementsArray);
		},
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
			<img src="../assets/9map.png" alt="" class="map_img" />
			
			<div v-for="(element, index) in elementsArray" :key="element.position">
				<div
					v-bind:class="element.class"
					:style="element.position"
					@click="changePosition(index)"></div>
			</div>

			<div class="s1 mapClass">
				<!-- <img class="test" src="../assets/SVGTecstureFiled/AnyConv.com__Bear Island.svg" alt=""> -->
				<svg>
					<use xlink:href="../assets/SVGTecsture/Bear-Island.svg"></use>
				</svg>
			</div>
			<div class="s2 mapClass"></div>
			<div class="s3 mapClass"></div>
			<div class="s4 mapClass"></div>
			<div class="s5 mapClass"></div>
			<div class="s6 mapClass"></div>
			<div class="s7 mapClass"></div>
			<div class="s8 mapClass"></div>
			<div class="s9 mapClass"></div>
			<div class="s10 mapClass"></div>
			<div class="s11 mapClass"></div>
			<div class="s12 mapClass"></div>
			<div class="s13 mapClass"></div>
			<div class="s14 mapClass"></div>
			<div class="s15 mapClass"></div>
			<div class="s16 mapClass"></div>
			<div class="s17 mapClass"></div>
			<div class="s18 mapClass"></div>

			<div class="a1 mapClass"></div>
			<div class="a2 mapClass"></div>
			<div class="a3 mapClass"></div>
			<div class="a4 mapClass"></div>
			<div class="a5 mapClass"></div>
			<div class="a6 mapClass"></div>
			<div class="a7 mapClass"></div>
			<div class="a8 mapClass"></div>
			<div class="a9 mapClass"></div>
			<div class="a10 mapClass"></div>
			<div class="a11 mapClass"></div>
			<div class="a12 mapClass"></div>
			<div class="a13 mapClass"></div>
			<div class="a14 mapClass"></div>
			<div class="a15 mapClass"></div>
			<div class="a16 mapClass"></div>
			<div class="a17 mapClass"></div>
			<div class="a18 mapClass"></div>
			<div class="a19 mapClass"></div>
			<div class="a20 mapClass"></div>
			<div class="a21 mapClass"></div>
			<div class="a22 mapClass"></div>
			<div class="a23 mapClass"></div>
			<div class="a24 mapClass"></div>
			<div class="a25 mapClass"></div>
			<div class="a26 mapClass"></div>
			<div class="a27 mapClass"></div>
			<div class="a28 mapClass"></div>
			<div class="a29 mapClass"></div>
			<div class="a30 mapClass"></div>
			<div class="a31 mapClass"></div>
			<div class="a32 mapClass"></div>
			<div class="a33 mapClass"></div>
			<div class="a34 mapClass"></div>
			<div class="a35 mapClass"></div>
			<div class="a36 mapClass"></div>
			<div class="a37 mapClass"></div>
			<div class="a38 mapClass"></div>
			<div class="a39 mapClass"></div>
			<div class="a40 mapClass"></div>
			<div class="a41 mapClass"></div>
			<div class="a42 mapClass"></div>
			<div class="a43 mapClass"></div>
			<div class="a44 mapClass"></div>
			<div class="a45 mapClass"></div>
			<div class="a46 mapClass"></div>
			<div class="a47 mapClass"></div>
			<div class="a48 mapClass"></div>
			<div class="a49 mapClass"></div>
			<div class="a50 mapClass"></div>
			<div class="a51 mapClass"></div>
			<div class="a52 mapClass"></div>
			<div class="a53 mapClass"></div>
			<div class="a54 mapClass"></div>
			<div class="a55 mapClass"></div>
			<div class="a56 mapClass"></div>
			<div class="a57 mapClass"></div>
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
	/* position: relative; */
	margin: auto;
	width: 2200px;
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
