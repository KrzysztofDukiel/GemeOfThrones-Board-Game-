<script setup></script>

<template>
	<div class="background">
		<div class="container menu">
			<div class="menu_bar">
				<h2 class="menu_bar_title">Board Game </h2>
				<p>extended edidtion</p>
				<ul class="menu_bar_list">
					<li><router-link to="/" class="test1">Home</router-link></li>
					<li><router-link to="/games" class="test1">Games</router-link></li>
					<li>
						<router-link to="/your-games" class="test1">Your games</router-link>
					</li>
					<li>
						<router-link to="/register" class="test1">Register</router-link>
					</li>
					<li>
						<router-link to="/login" class="test1">Login</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
.background {
	padding: 10px;
	background-color: black;
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
}
.menu_bar_list {
	list-style-type: none;
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu_bar_list li {
	margin-inline: 35px;
	border: 1px solid white;
	border-radius: 10px;
	padding: 5px;
	font-size: 20px;
	transition: 0.3s;
	cursor: pointer;
}

.menu_bar_list li:hover {
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}
.menu_bar_title {
	margin: 30px 0;
	font-size: 30px;
	width: 130px;
}
.test1 {
	text-decoration: none;
	color: white;
}
</style>
