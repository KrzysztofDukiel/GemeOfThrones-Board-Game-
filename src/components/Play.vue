<script>
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
			mapWidth: 2000,
			mapHeight: 2257,
			clickedCoordinates: { x: 0, y: 0 },
			distanceFromEdges: { top: 0, right: 0, bottom: 0, left: 0 },
		};
	},

	methods: {
		changeHouse(house) {
			this.house = house;
			console.log(this.house);
		},
		chosenElementFunc(element) {
			
			this.chosenElement = element;
			console.log(this.chosenElement)
		},

		calculateDistance(event) {
			const boundingRect = event.target.getBoundingClientRect();
			const offsetX = event.clientX - boundingRect.left;
			const offsetY = event.clientY - boundingRect.top;

			this.clickedCoordinates = { x: offsetX, y: offsetY };

			if (this.chosenElement === '' || this.house === '') {
				console.log('if sytuacja');
				return 'no element chosen';
			}
			this.elementsArray.push({
				class: this.chosenElement + ' ' + this.house,
				position: `top: ${this.clickedCoordinates.y}px; left: ${this.clickedCoordinates.x}px;`,
			});
		},
		changePosition(index) {
			this.elementsArray.slice(index, 1);
			console.log('działa?', index);
		},
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
			<div v-for="(element, index) in elementsArray">
				<div
					v-bind:class="element.class"
					:style="element.position"
					@click="changePosition(index)">
					{{ index }}
				</div>
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
			<div class="units">
				<h2>Chose units</h2>
				<ul>
					<li @click="chosenElementFunc('footman')">footman</li>
					<li @click="chosenElementFunc('knight')">knight</li>
					<li @click="chosenElementFunc('tower')">Tower</li>
					<li @click="chosenElementFunc('ship')">ship</li>
				</ul>
			</div>
			<div class="tokens">
				<h2>Orders</h2>
				<div class="attacks">
					<div @click="chosenElementFunc('attack')">Attack -1</div>
					<div @click="chosenElementFunc('attack')">Attack +0</div>
					<div @click="chosenElementFunc('attack')">Attack +1</div>
				</div>
				<div class="supports">
					<div @click="chosenElementFunc('support')">support</div>
					<div @click="chosenElementFunc('support')">support</div>
					<div @click="chosenElementFunc('support')">support +1</div>
				</div>
				<div class="raids">
					<div @click="chosenElementFunc('raid')">raid</div>
					<div @click="chosenElementFunc('raid')">raid</div>
					<div @click="chosenElementFunc('raid')">raid Star</div>
				</div>
				<div class="defends">
					<div @click="chosenElementFunc('defend')">defend +1</div>
					<div @click="chosenElementFunc('defend')">defend +1</div>
					<div @click="chosenElementFunc('defend')">defend +2</div>
				</div>
				<div class="Powertokens">
					<div @click="chosenElementFunc('Powertoken')">Powertoken</div>
					<div @click="chosenElementFunc('Powertoken')">Powertoken</div>
					<div @click="chosenElementFunc('Powertoken')">Powertoken Star</div>
				</div>
			</div>
			<div class="house_cards"></div>
		</div>
	</div>
</template>

<style>
/* 2100px 2400h */

.footman {
	position: absolute;

	width: 20px;
	height: 30px;
	/* top: 1900px;
	left: 893px; */
}
.knight {
	position: absolute;
	width: 30px;
	height: 20px;
}
.tower {
	position: absolute;
	width: 30px;
	height: 20px;
}
.ship {
	position: absolute;
	rotate: -30deg;
	width: 20px;
	height: 30px;
}

.Baratheon {
	background-color: yellow;
}
.Lannister {
	background-color: red;
}
.Tully {
	background-color: rgb(27, 25, 170);
}
.Arryn {
	background-color: lightblue;
}
.Targ {
	background-color: violet;
}
.Stark {
	background-color: white;
}
.Tyller {
	background-color: rgb(40, 196, 40);
}
.Martell {
	background-color: orange;
}
.Grajoy {
	background-color: black;
}

.map {
	position: relative;
	/* max-width: 100%;
  max-height: 100%; */
	margin: auto;
	width: 2000px;
	/* height: 2150px; */
	/* border: 2px solid black; */
}
.map_img {
	width: auto;
	max-width: 100%;
	max-height: 100%;
	transform: scale(1);
}
.units {
	cursor: pointer;
}
.houses_list {
	cursor: pointer;
}
.houses_list li {
	border: 2px solid black;
	widows: 200px;
}
</style>
