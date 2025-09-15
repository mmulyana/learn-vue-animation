<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<div class="navbar">
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</div>
	<RouterView />
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
</style>
