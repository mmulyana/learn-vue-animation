<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([
	{ id: 1, text: 'Belajar Vue 3' },
	{ id: 2, text: 'Bikin CRUD Todo' },
])

function addTodo() {
	if (!newTodo.value) return
	todos.value.unshift({
		id: Date.now(),
		text: newTodo.value,
	})
	newTodo.value = ''
}

function removeTodo(id) {
	todos.value = todos.value.filter((t) => t.id !== id)
}
</script>

<template>
	<div class="todo-app">
		<div class="todo-form">
			<input
				v-model="newTodo"
				placeholder="Tambah todo..."
				@keyup.enter="addTodo"
				class="todo-input"
			/>
			<button @click="addTodo">Add</button>
		</div>

		<TransitionGroup name="slide" tag="ul" class="todo-list">
			<li v-for="todo in todos" :key="todo.id" class="todo-item">
				{{ todo.text }}
				<button @click="removeTodo(todo.id)">❌</button>
			</li>
		</TransitionGroup>
	</div>
</template>

<style scoped>
.todo-list {
	position: relative;
	list-style: none;
	padding: 0;
}

.todo-item {
	display: flex;
	justify-content: space-between;
	margin: 6px 0;
	border-radius: 8px;
	position: relative;
  align-items: center;
}

.todo-input {
	height: 32px;
	border-radius: 8px;
	border: none;
	padding: 0 0.8em;
}

.todo-form {
	display: flex;
	gap: 1rem;
	justify-content: space-between;
}

.slide-enter-from {
	opacity: 0;
	transform: translateY(-30px);
	position: absolute;
	width: 100%;
}
.slide-enter-to {
	opacity: 1;
	transform: translateY(0);
}
.slide-enter-active {
	transition: all 0.4s ease;
}

.slide-leave-from {
	opacity: 1;
}
.slide-leave-to {
	opacity: 0;
}
.slide-leave-active {
	transition: all 0.4s ease;
}
.slide-move {
	transition: all 0.5s ease-in-out;
}

</style>
