<script setup>
import { ref } from 'vue'

const showText = ref(false)
</script>

<template>
	<Transition name="fade">
		<h1 v-if="showText">Hello world</h1>
	</Transition>
	<button @click="showText = !showText">Toggle</button>
</template>

<style scoped>
.fade-enter-from {
	opacity: 0;
}

.fade-enter-to {
	opacity: 1;
}

.fade-enter-active {
	transition: all 1s ease;
}

.fade-leave-from {
	opacity: 1;
}

.fade-leave-to {
	opacity: 0;
}

.fade-leave-active {
	transition: all 1s ease;
}
</style>
