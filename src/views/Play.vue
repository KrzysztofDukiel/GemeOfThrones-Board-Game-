<script>

import Map from '../components/Map.vue';
import HouseChoose from "../components/HouseChoose.vue";
import PlayerInterface from "../components/PlayerInterface.vue";
import EneminsInterface from "../components/EneminsInterface.vue";
import { PlayManager } from "@/mods/PlayManager";
import { reactive } from "vue";

export default {
	components: {
		
		Map,
		HouseChoose,
		PlayerInterface,
		EneminsInterface
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
</template>

<style scoped></style>
