<script>
import { HouseDefinitions } from '@/configuration/GameDefinitions';
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex';


export default {
  setup() {
    const houseDefinitions = reactive(HouseDefinitions);
	
	const store = useStore();

    return {
      houseDefinitions,
   

    };
  },
};
</script>

<template>
	<div class="houses">
		<h2> Choose House</h2>
		<ul class="houses_list">
			<li
				v-for="house in houseDefinitions"
				@click="$store.commit('chooseHouse', house.houseName)">
				{{ house.houseName }}
			</li>
		</ul>
	</div>
</template>

<style>
.houses {
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	background-color: black;
	border: 2px solid white;
	border-radius: 20px;
	background-image: url('../assets/battle.jpg');
	background-position: 50% 68%;
	width: 1500px;
	height: 150px;
	margin: 20px;
}
.houses_list {
	cursor: pointer;
	display: flex;
}

.houses_list li {
	padding: 15px;
	border: 2px solid white;
	border-radius: 10px;
	margin-inline: 10px;
}

.houses_list li:hover {
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}
</style>
