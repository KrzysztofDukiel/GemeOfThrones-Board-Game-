<script>

import Map from '../components/Map.vue';
import HouseChoose from "../components/HouseChoose.vue";
import PlayerInterface from "../components/PlayerInterface.vue";
import EneminsInterface from "../components/EneminsInterface.vue";
import Orders from "../components/Orders.vue"
import { PlayManager } from "@/mods/PlayManager";
import { reactive } from "vue";

export default {
	components: {
		
		Map,
		HouseChoose,
		PlayerInterface,
		EneminsInterface,
		Orders
	},
	setup() {
	  const playManager = reactive(new PlayManager());
	  return {
		playManager,
	  }
	}
}
</script>

<template>
	
	<HouseChoose/>
	<PlayerInterface/>
	<EneminsInterface/>
	<Map></Map>
	<Orders/>
</template>

<style scoped></style>
