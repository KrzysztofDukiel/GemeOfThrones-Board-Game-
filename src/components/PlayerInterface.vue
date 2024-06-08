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

    return {
      unitDefinitions,
      commanderDefinitions,
      chooseUnit,
      
	  
    };
  },
};
</script>
<template>
	<div class="interface">
		<h2>{{ $store.state.house }}</h2>
		<div class="commanders">
			<h3>Comanders</h3>
			<ul>
				<li v-for=" com in $store.state.comanders" >
					<!-- lista generałow  -->
					 {{ com.houseName }}
					 {{ com.commander }}
					 {{ com.strength }}
				</li>
			</ul>
		</div>
		<div class="units">
			<h3>Units</h3>
			<ul>
				<!-- naprawic odziały -->
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
