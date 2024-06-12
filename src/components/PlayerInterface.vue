<script>


export default {
  components: {},
  setup() {
   
    const chooseUnit = (unit) => {
      const chosenUnit = unit;
      console.log(chosenUnit);
      return chosenUnit;
    };

    return {
      chooseUnit,
	  
    };
  },
};
</script>
<template>
	<div class="interface">
		<h2>{{ $store.state.house }}</h2>
		<div class="commanders">
			<h3>Comanders</h3>
			<ul class="commanders_list" >
				<li v-for=" commander in $store.state.houseCommanders"  >
					
					<img v-if="!commander.used" src="../assets/Commanders/BARATHEON/BARATHEON6.png" alt="">
					<img v-if="commander.used" src="../assets/Commanders/Baratheon/BARATHEON.png" alt="">
				</li>
			</ul>
		</div>
		<div class="units">
			<h3>Units</h3>
			<ul>
				<!-- naprawic odziały -->
				<li @click="chooseUnit('footman')">
					Footman
				</li>
				<li @click="chooseUnit('ship')">
					Ship
				</li>
				<li @click="chooseUnit('knight')">
					Knight
				</li>
				<li @click="chooseUnit('tower')">
					Sige Tower
				</li>
			</ul>
		</div>
		<div class="powerTokens">
			<h3>Power Tokens:</h3>
			<button @click="$store.commit('decrementPowerTokens')" class="powerTokens_btn">-</button>
			<span>{{ $store.state.housePowerTokens }}</span>
			<button @click="$store.commit('incrementPowerTokens')" class="powerTokens_btn" >+</button>
			
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
.commanders_list  {
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
</style>
