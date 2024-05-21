<script>
import Play from "../components/Play.ts.vue";
import { PlayManager } from "@/mods/PlayManager";
import { reactive } from "vue";

export default {
	components: {
		Play,
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
	<Play></Play>
</template>

<style scoped></style>
