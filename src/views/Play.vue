<script>

import Map from '../components/Map.vue';
import HouseChoose from "../components/HouseChoose.vue";
import PlayerInterface from "../components/PlayerInterface.vue";
import EneminsInterface from "../components/EneminsInterface.vue";
import Orders from "../components/Orders.vue"
import WesterosCards from '../components/westerosCards.vue';
import ClashOfKingsTrack from "../components/ClashOfKingsTrack.vue"
import { PlayManager } from "@/mods/PlayManager";
import { reactive } from "vue";

export default {
	components: {
		
		Map,
		HouseChoose,
		PlayerInterface,
		EneminsInterface,
		Orders,
		ClashOfKingsTrack,
		WesterosCards

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
	
	<Map></Map>
	<HouseChoose/>
	<PlayerInterface/>
	<EneminsInterface/>
	<WesterosCards/>
	<Orders/>
	<ClashOfKingsTrack/>
</template>

<style scoped></style>
