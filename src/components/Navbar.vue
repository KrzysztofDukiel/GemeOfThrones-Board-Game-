<script setup></script>

<template>
	<div class="navbar">

		<div class="navbar_background"></div>

		<div class="navbar_container">
			<div class="menu_bar">
				<h2 class="menu_bar_title">Board Game </h2>
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

<style lang="scss" scoped>
.navbar {
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100%;
	padding-top: 0.8rem;

	&_container {
		display: flex;
		margin: auto;
		position: relative;
		width: max-content;
		padding: 0 2.8rem;
		justify-content: center;
		align-items: center;
		color: white;
		background-color: rgba(0, 0, 0, 0.8);
		border: 2px solid rgb(124, 124, 124);
		border-radius: 20px;

		&_background {
			position: absolute;
			width: 100%;
			height: 100%;
			background-image: url('../assets/battle.jpg');
			background-size: cover;
			background-position: 50% 70%;
		}
	}
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
}

.menu_bar_list li:hover {
	cursor: pointer;
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