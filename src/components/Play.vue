<script>
// import draggable from 'vuedraggable';
export default {
  // components: {
  //   draggable,
  // },
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
     
      imageX: 1000, // Dostosuj kordynaty X
      imageY: 1000, // Dostosuj kordynaty Y
      imageSize: 2000, // Dostosuj wielkość zdjęcia,
      house: "",
      houseColor: "",
      items: ['Element 1', 'Element 2', 'Element 3', 'Element 4'],
      
    };
  },
  mounted() {
    document.addEventListener('mousemove', this.handleMouseMove);
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  },
  methods: {
    handleMouseMove(event) {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
      console.log(this.mouseX, this.mouseY)
    },
    changeHouse(house, color) {
      this.house = house
      this.houseColor = color

    }
  },


};
</script>

<template>

<div class="play">
    <h1>Good luck have fun</h1>
    <div class="map"><img src="../assets/9PlayersMap.jpg"  alt="" class="map_img" :style="{ left: imageX + 'px', top: imageY + 'px', width: imageSize + 'px' }"></div>
	<div class="game">
		<div class="houses"><h2>Chose your house</h2>
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
        <li>Martell</li></ul></div>
		<div class="units"><h2>Chose units</h2>
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
        <div>
    <p>Mouse Coordinates</p>
    <p>X: {{ mouseX }}</p>
    <p>Y: {{ mouseY }}</p>
  </div>
	</div>
</div>
<!-- <div>
    <h2>Przesuwaj mnie!</h2>
    <draggable v-model="items" class="drag-container">
      <div v-for="(item, index) in items" :key="index" class="drag-item">
        {{ item }}
      </div>
    </draggable>
  </div> -->
</template>

<style >

.map {
    max-width: 100%;
  max-height: 100%;
  margin: auto;
}
.map_img {
    /* width: auto;
  max-width: 100%;
  max-height: 100%;*/
  transform: scale(1); 
}
.drag-container {
  list-style-type: none;
  padding: 10px;
  border: 1px solid #ccc;
}

.drag-item {
  margin: 5px;
  padding: 10px;
  background-color: #f0f0f0;
  cursor: grab;
}
</style>
