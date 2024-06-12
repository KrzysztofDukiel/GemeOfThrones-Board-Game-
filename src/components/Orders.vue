<script>
import { OrderDefinitons } from '@/configuration/OrderDefinitions';
import { useStore } from 'vuex';
export default {
	components: {},
	setup() {
		const store = useStore
		const orderDefinitions = OrderDefinitons;
		const putOrdersBox = ()=> {
			const orderBox = document.querySelector(".orders")
			console.log(store.state.ordersBox)
			orderBox.style.left = store.state.ordersBox[0]
			orderBox.style.top = store.state.ordersBox[1]

		}
		return {
			orderDefinitions,
			putOrdersBox
		};
	},
};
</script>
<template>
	<button @click="putOrdersBox()" >klik</button>
	<div class="orders">
		
		<ul>
			<li  class="order at1" ></li>
			<li  class="order at0" ></li>
			<li  class="order atm1" ></li>
			<li  class="order def2" ></li>
			<li  class="order def1" ></li>
			<li  class="order def1" ></li>
			<li  class="order sup1" ></li>
			<li  class="order sup" ></li>
			<li  class="order sup" ></li>
			<li  class="order raid1" ></li>
			<li  class="order raid" ></li>
			<li  class="order raid " ></li>
			<li  class="order pow1" ></li>
			<li  class="order pow" ></li>
			<li  class="order pow" ></li>

		</ul>
	</div>
</template>

<style>
.orders	 {
	width: 240px;
	border: 3px solid black;
	position: absolute;
	
}
.orders ul {
	display: flex;
	flex-wrap: wrap;
	margin-inline: auto	;
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
	background-image: url("../assets/orders/at1.webp");
}
.at0 {
	background-image: url("../assets/orders/at0.webp");
}
.atm1 {
	background-image: url("../assets/orders/at-1.webp");
}
.def2 {
	background-image: url("../assets/orders/def2.jpg");
}
.def1 {
	background-image: url("../assets/orders/def1.webp");
}
.sup1 {
	background-image: url("../assets/orders/sup1.webp");
}
.sup {
	background-image: url("../assets/orders/sup.webp");
}
.raid1 {
	background-image: url("../assets/orders/raidSt.webp");
}

.raid {
	background-image: url("../assets/orders/raid.webp");
}
.pow1 {
	background-image: url("../assets/orders/powSt.webp");
}
.pow {
	background-image: url("../assets/orders/pow.webp");
}

</style>
