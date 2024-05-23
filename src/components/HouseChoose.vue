<script >
import { HouseDefinitions } from '@/configuration/GameDefinitions'
import { reactive } from 'vue';
export default {

	setup() {
		const houseDefinitions = HouseDefinitions
	  return {
		houseDefinitions
	  }
	},
	methods: {
	 changeHouse(name, id){
	const house = [name, id]
	console.log(house)
	return house
}

	}
}
</script>
<template>
<div class="houses">
				<h2>Choose your house</h2>
				<ul class="houses_list"  >
					
					<li v-for="house in houseDefinitions"  
						@click="changeHouse(house.houseName,  house.id)" >{{ house.houseName }} 
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