<script>
import { HouseDefinitions } from '@/configuration/GameDefinitions';
import { reactive } from 'vue';
import store from '../store/Store';


export default {
  setup() {
    const houseDefinitions = reactive(HouseDefinitions);
	
    const chooseHouse = (name) => {
		console.log(name.houseName)
		store.commit('chooseHouse', name.houseName)
      
		
    };

    return {
      houseDefinitions,
      chooseHouse,
    };
  },
};
</script>

<template>
	<div class="houses">
		<h2></h2>
		<ul class="houses_list">
			<li
				v-for="house in houseDefinitions"
				@click="chooseHouse(house)">
				{{ house.houseName }}
			</li>
		</ul>
	</div>
</template>

<style>
.houses_list {
	cursor: pointer;
	display: flex;
}
.houses {
	margin-left: 400px;
}
.houses_list li {
	padding: 15px;
	border: 2px solid black;
	border-radius: 10px;
	margin-inline: 10px;
}
li {
	list-style: none;
}
</style>
