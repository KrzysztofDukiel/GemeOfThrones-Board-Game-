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
			house: 'Grajoy',
      chosenElemnt: "footman",
			elemntsArray: [],
      //
			mapWidth: 2000,
			mapHeight: 2257,
			clickedCoordinates: { x: 0, y: 0 },
			distanceFromEdges: { top: 0, right: 0, bottom: 0, left: 0 },

		};
	},
	
	methods: {

		changeHouse(house, elemnt) {
			this.house = house;
			this.chosenElemnt = elemnt
		},

		calculateDistance(event) {
			const boundingRect = event.target.getBoundingClientRect();
			const offsetX = event.clientX - boundingRect.left;
			const offsetY = event.clientY - boundingRect.top;

			this.clickedCoordinates = { x: offsetX, y: offsetY };

			this.distanceFromEdges = {
				top: offsetY,
				right: this.mapWidth - offsetX,
				bottom: this.mapHeight - offsetY,
				left: offsetX,
			};
      if(this.chosenELemnt === "" || this.house === "") {
        console.log("if sytuacja")
        return "no element chosen"
      }
   
      this.elemntsArray.push({class: this.chosenElemnt, house: this.house, position: `top: ${this.clickedCoordinates.y}px; left: ${this.clickedCoordinates.x}px;`})
      
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
			<div v-for="elemnt in elemntsArray">
      <div v-bind:class="elemnt.class" :style=" elemnt.position" ></div>
      </div>
		</div>
		<div>
			<p>Koordynaty po kliknięciu: {{ clickedCoordinates }}</p>
			
		</div>
		<div class="game">
			<div class="houses">
				<h2>Chose your house</h2>
				<ul>
					<!-- dostosowac do mapy roboczo robimy na sztywno -->
					<li>Baratheon</li>
					<li>Lannister</li>
					<li>Grejoy</li>
					<li>Tully</li>
					<li>Arryn</li>
					<li>Targ</li>
					<li>Stark</li>
					<li>Tyller</li>
					<li>Martell</li>
				</ul>
			</div>
			<div class="units">
				<h2>Chose units</h2>
				<ul>
					<li>footman</li>
					<li>knight</li>
					<li>Tower</li>
					<li>ship</li>
				</ul>
			</div>
			<div class="tokens">
				<h2>Orders</h2>
				<div class="attack">
					<div>Attack -1</div>
					<div>Attack +0</div>
					<div>Attack +1</div>
				</div>
				<div class="s">
					<div>support</div>
					<div>support</div>
					<div>support +1</div>
				</div>
				<div class="s">
					<div>raid</div>
					<div>raid</div>
					<div>raid Star</div>
				</div>
				<div class="s">
					<div>defend +1</div>
					<div>defend +1</div>
					<div>defend +2</div>
				</div>
				<div class="s">
					<div>Powertoken</div>
					<div>Powertoken</div>
					<div>Powertoken Star</div>
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
	background-color: black;
	width: 20px;
	height: 20px;
	/* top: 1900px;
	left: 893px; */
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
background-color:  lightblue;
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


</style>
