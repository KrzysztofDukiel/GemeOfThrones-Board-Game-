<script>
import { OrderDefinitons } from '@/configuration/OrderDefinitions';
export default {
	components: {},
	setup() {
		const orderDefinitions = OrderDefinitons;
		return {
			OrderDefinitons,
		};
	},
};
</script>
<template>
	<div class="orders">
		<h2>Orders</h2>
		<ul>
			<li v-for="order in OrderDefinitons">{{ order.order }}</li>
		</ul>
	</div>
</template>

<style>
.orders	 {
	widows: 300px;
	z-index: 100;
}
.orders ul {
	display: flex;
	flex-wrap: wrap;
}


</style>
