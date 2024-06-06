<script>
import { ref } from 'vue';
import { UnitDefinitions } from '@/configuration/UnitDefinitions';
import { CommanderDefinitions } from '@/configuration/CommanderDefinitions';

export default {
  components: {},
  setup() {
    const unitDefinitions = ref(UnitDefinitions);
    const commanderDefinitions = ref(CommanderDefinitions);

    const chooseUnit = (unit) => {
      const chosenUnit = unit;
      console.log(chosenUnit);
      return chosenUnit;
    };

	const houseCommandersArr = ref([])
    const commanders = () => {
		const dcoy = "BARATHEON"
		
	  for(let com in commanderDefinitions.value) {
		  if(commanderDefinitions.value[com].houseName == dcoy) {
			
			houseCommandersArr.value.push(commanderDefinitions.value[com].houseName)
		}
		
	  }
    };

    return {
      unitDefinitions,
      commanderDefinitions,
      chooseUnit,
      commanders,
	  houseCommandersArr
    };
  },
};
</script>
<template>
	<div class="interface">
		<h2>Bartheon</h2>
		<div class="commanders">
			<h3 @click="commanders()" >Commanders</h3>
			<ul>
				<li v-for="commander in houseCommandersArr">
					{{ commander }}
				</li>
			</ul>
		</div>
		<div class="units">
			<h3>Units</h3>
			<ul>
				<li
					v-for="unit in unitDefinitions"
					@click="chooseUnit(unit.unit)">
					{{ unit.unit }}
				</li>
			</ul>
		</div>
		<div class="powerTokens">
			<h3>Power tokens</h3>
			<button>-</button>
			<span>0</span>
			<button>+</button>
		</div>
	</div>
</template>

<style>
.interface {
	border: 2px solid black;
	width: 300px;
	padding: 10px;
	border-radius: 10px;
	margin-left: 10px;
	margin-top: 100px;
}
.commanders ul {
	display: flex;
	flex-wrap: wrap;
}
.commanders li {
	padding: 10px;
}
</style>
