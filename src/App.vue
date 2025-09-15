<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<div class="navbar">
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</div>
	<Transition name="route" mode="out-in">
		<RouterView :key="$route.fullPath" />
	</Transition>
</template>

<style scoped>
.navbar {
	height: 40px;
	width: 100%;
	position: fixed;
	background-color: #363636;
	left: 0;
	display: flex;
	gap: 16px;
	align-items: center;
	padding: 0 20px;
	top: 0;
}

.navbar a {
	text-decoration: none;
	color: white;
	opacity: 0.8;
}

.route-enter-from {
	opacity: 0;
	transform: translateX(-30px);
}
.route-enter-to {
	opacity: 1;
	transform: translateX(0);
}
.route-enter-active {
	transition: all 0.5s ease;
}
.route-leave-from {
	opacity: 1;
	transform: translateX(0px);
}
.route-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
.route-leave-active {
	transition: all 0.5s ease;
}
</style>
