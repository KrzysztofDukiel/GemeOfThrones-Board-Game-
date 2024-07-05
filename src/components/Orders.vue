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
	
	<div class="orders">
    <button @click="closeOrderBox()" class="close-button">X</button>
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
    width: 250px;
    border: 3px solid #000;
    position: absolute;
    background-color: #2e2e2e;
    z-index: 200;
    display: none;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    padding: 10px;
    padding-top: 40px; 
    z-index: 10;
}

.orders .close-button {
    cursor: pointer;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    position: absolute;
    top: 10px;
    right: 10px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.orders .close-button:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
}

.orders ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    list-style: none;
    margin: 0;
}

.order {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: box-shadow 0.3s ease;
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
