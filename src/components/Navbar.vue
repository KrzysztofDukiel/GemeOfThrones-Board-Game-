<script setup></script>

<template>
	<div class="back_ground">
		<div class="container menu">
			<div class="menu_bar">
				<h2 class="menu_bar_title">Game of throns</h2>
				<p>extended adidtion</p>
				<ul class="menu_bar_list">
					<li class="menu_bar_list_element">Home</li>
					<li class="menu_bar_list_element">Host Game</li>
					<li class="menu_bar_list_element">Ruls</li>
					<li class="menu_bar_list_element">Register</li>
					<li class="menu_bar_list_element">Login</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
.back_ground {
	height: 840px;
	background-size: cover; 
	background-repeat: no-repeat; 
	/* background-image: url('../assets/fan-art-69.jpg'); */
    margin: 0;
}
.menu {
    
	display: flex;
	justify-content: center;
	align-items: center;
    color: white;
    background-color: black;
    border: 2px solid white;
    border-radius: 20px;
    background-image: url('../assets/battle.jpg');
    background-position: 50% 65%;
}
.menu_bar {
	list-style-type: none;
	display: flex;
	justify-content: center;
	border-top: 2px solid black;
}
.menu_bar_list {
    
	list-style-type: none;
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu_bar_list_element {
	margin-inline: 35px;
    
	font-size: 20px;
}
.menu_bar_title {
    	margin: 30px 0;
	font-size: 30px;
	width: 130px;
}
</style>
