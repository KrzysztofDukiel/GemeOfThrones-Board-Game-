<script>
import {UnitDefinitions} from "@/configuration/UnitDefinitions"
export default {
	components: {},
	setup() {
        const unitDefinitions = UnitDefinitions

		return {
            unitDefinitions
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
		<div class="commanders">
			<h3>Commanders</h3>
			<ul>
				<li></li>
			</ul>
		</div>
		<div class="units">
			<h3>Units</h3>
			<ul>
				<li
					v-for="unit in unitDefinitions"
					@click="chooseUnit(unit, units.indexOf(unit))">
					{{ unit }}
				</li>
			</ul>
		</div>
		<div class="powerTokens">
			<h3>Power tokens</h3>
			<ul>
				<li></li>
			</ul>
		</div>
	</div>
</template>

<style></style>
