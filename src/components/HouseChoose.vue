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
		<h2> {{ $store.state.house }}</h2>
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
