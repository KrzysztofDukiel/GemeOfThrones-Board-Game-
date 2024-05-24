<script>
import { OrderDefinitions } from '@/configuration/OrderDefinitions';
export default {
	components: {},
	setup() {
		const orderDefinitions = OrderDefinitions;
		return {
			OrderDefinitions,
		};
	},
};
</script>
<template>
	<div class="orders">
		<ul>
			<li v-for="order in OrderDefinitions">{{ order.order }}</li>
		</ul>
	</div>
</template>

<style>
.orders	 {
	widows: 300px;

}
.orders ul {
	display: flex;
	flex-wrap: wrap;
}


</style>
