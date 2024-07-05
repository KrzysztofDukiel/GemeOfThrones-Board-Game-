<script>
import { useStore } from 'vuex';

	export default {
		setup() {
			const store = useStore()
			
		 const 	westerosPhase =() => {

		 }
			return
		}
	}
</script>

<template>
	<div class="Phase">
		<div class="Phase_one"><img src="../assets/weterosCards/Westeros1.png" alt="" />
		
		</div>
		<div class="Phase_two"><img src="../assets/weterosCards/Westeros2.png" alt="" />
		
		</div>
		<div class="Phase_three"><img src="../assets/weterosCards/Westeros3.png" alt="" />
		
		</div>
	</div>
	<button @click="westerosPhase()" >Card Of Westeros Phase</button>
</template>
<style>
	.Phase {
		display: flex;
	}
	.Phase img {
		width: 250px;
		height: 150px;
	}
</style>
