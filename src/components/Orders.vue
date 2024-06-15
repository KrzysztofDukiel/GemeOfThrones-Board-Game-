<script>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

export default {
	setup() {
		const store = useStore();

		const ordersBox = ref(store.state.ordersBox);
		const closeOrderBox = () => {
			const orderBox = document.querySelector('.orders');
			orderBox.style.display = 'none';
		};
		watch(
			() => store.state.ordersBox,
			(newVal) => {
				const orderBox = document.querySelector('.orders');
				if (orderBox && newVal.length === 2) {
					orderBox.style.display = 'block';
					orderBox.style.left = newVal[0] + 'px';
					orderBox.style.top = newVal[1] + 'px';
				}
			},
			{ deep: true }
		);

		return {
			ordersBox,
			store,
			closeOrderBox,
		};
	},
};
</script>
<template>
	<!-- <button @click="putOrdersBox()" >klik</button> -->
	<div class="orders">
		<h2 @click="closeOrderBox()">X</h2>
		<ul>
			<li class="order at1"></li>
			<li class="order at0"></li>
			<li class="order atm1"></li>
			<li class="order def2"></li>
			<li class="order def1"></li>
			<li class="order def1"></li>
			<li class="order sup1"></li>
			<li class="order sup"></li>
			<li class="order sup"></li>
			<li class="order raid1"></li>
			<li class="order raid"></li>
			<li class="order raid"></li>
			<li class="order pow1"></li>
			<li class="order pow"></li>
			<li class="order pow"></li>
		</ul>
	</div>
</template>

<style>
.orders {
	width: 240px;
	border: 3px solid black;
	position: absolute;
	background-color: white;
	z-index: 200;
	display: none;
}
.orders h2 {
	cursor: pointer;
	text-align: right;
	margin: 0;
	margin-right: 20px;
}
.orders ul {
	display: flex;
	flex-wrap: wrap;
	margin-inline: auto;
}
.order {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	margin: 1px;
}
.order:hover {
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
	cursor: pointer;
}
.at1 {
	background-image: url('../assets/orders/at1.webp');
}
.at0 {
	background-image: url('../assets/orders/at0.webp');
}
.atm1 {
	background-image: url('../assets/orders/at-1.webp');
}
.def2 {
	background-image: url('../assets/orders/def2.jpg');
}
.def1 {
	background-image: url('../assets/orders/def1.webp');
}
.sup1 {
	background-image: url('../assets/orders/sup1.webp');
}
.sup {
	background-image: url('../assets/orders/sup.webp');
}
.raid1 {
	background-image: url('../assets/orders/raidSt.webp');
}

.raid {
	background-image: url('../assets/orders/raid.webp');
}
.pow1 {
	background-image: url('../assets/orders/powSt.webp');
}
.pow {
	background-image: url('../assets/orders/pow.webp');
}
</style>
