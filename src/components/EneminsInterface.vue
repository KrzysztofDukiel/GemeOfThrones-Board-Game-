<script >
import {HouseDefinitions} from "@/configuration/GameDefinitions"
export default {
	components: {
		
	},
	setup() {
		const houseDefinitions = HouseDefinitions
	  return {
		houseDefinitions,
	  }
	}
}
</script>
<template>
	<div class="enemis">
		<h3 v-for="house in houseDefinitions"> {{ house.houseName }}</h3>
	</div>
</template>


<style>
.enemis {
	border: 2px solid black;
	padding: 10px;
	width: 300px;
	margin-left: 10px;
	margin-top: 20px;
	border-radius: 10px;
}
.enemis h3 {
	padding: 20px, 0;
}
</style>