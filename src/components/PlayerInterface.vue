<script>
import {UnitDefinitions} from "@/configuration/UnitDefinitions"
import {CommanderDefinitions} from "@/configuration/CommanderDefinitions"
export default {
	components: {},
	setup() {
        const unitDefinitions = UnitDefinitions
		const commanderDefinitions = CommanderDefinitions
		return {
            unitDefinitions,
			commanderDefinitions
        };
	},
    methods: {
     chooseUnit(unit, id) {
	const chosenUnit = [unit, id]
	console.log(chosenUnit)
	return chosenUnit
}

    }
};
</script>
<template>
	<div class="interface">
		<h2>Bartheon</h2>
		<div class="commanders">
			<h3>Commanders</h3>
			<ul>
				<li v-for="commander in commanderDefinitions"> {{ commander.commander }}</li>
			</ul>
		</div>
		<div class="units">
			<h3>Units</h3>
			<ul>
				<li
					v-for="unit in unitDefinitions"
					@click="chooseUnit(unit, units.indexOf(unit))">
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
