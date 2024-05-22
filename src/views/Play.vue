<script>
import Play from "../components/Play.ts.vue";
import Map from '../components/Map.vue';
import HouseChoose from "../components/HouseChoose.vue";
import { PlayManager } from "@/mods/PlayManager";
import { reactive } from "vue";

export default {
	components: {
		Play,
		Map,
		HouseChoose,
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
	<button @click="playManager.prepareGame">Inizliaze</button>
	<span v-if="playManager.gameInitialized">INITIALIZED</span>
	<!-- <Play></Play> -->
	<HouseChoose/>
		<Map></Map>
</template>

<style scoped></style>
