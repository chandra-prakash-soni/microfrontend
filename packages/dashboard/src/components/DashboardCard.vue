<template>
	<div class="card">
		<i :class="`pi ${icon}`"></i>
		<div class="info">
			<h4>{{ title }}</h4>
			<p>{{ value }}</p>
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: String,
	icon: String,
	value: [String, Number],
});
</script>

<style scoped>
.card {
	display: flex;
	align-items: center;
	background: white;
	border-radius: 8px;
	box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
	padding: 1rem;
}

.card i {
	font-size: 2rem;
	margin-right: 1rem;
	color: #007ad9;
}

.info h4 {
	margin: 0;
	font-size: 1rem;
	color: #333;
}

.info p {
	margin: 0;
	font-weight: bold;
	font-size: 1.2rem;
}
</style>
