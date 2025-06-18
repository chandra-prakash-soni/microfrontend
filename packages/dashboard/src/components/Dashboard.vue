<template>
	<div class="dashboard">
		<h1>Dashboard Overview</h1>

		<div class="metrics-grid">
			<DashboardCard title="Visitors" icon="pi-users" :value="1250" />
			<DashboardCard title="Purchases" icon="pi-shopping-cart" :value="320" />
			<DashboardCard title="Revenue" icon="pi-dollar" :value="'₹ 1,25,000'" />
			<DashboardCard title="Total Queries" icon="pi-comments" :value="140" />
			<DashboardCard
				title="Total Issues"
				icon="pi-exclamation-circle"
				:value="60" />
			<DashboardCard title="Open Issues" icon="pi-info-circle" :value="35" />
			<DashboardCard title="Closed Issues" icon="pi-check-circle" :value="25" />
		</div>

		<div class="charts-section">
			<div class="chart-card">
				<h3><i class="pi pi-chart-bar"></i> Sales Report</h3>
				<Chart type="bar" :data="chartData" :options="chartOptions" />
			</div>
			<div class="chart-card">
				<h3><i class="pi pi-dollar"></i> Pay Invoices</h3>
				<p>Total Due: ₹ 75,000</p>
				<Button label="Pay Now" icon="pi pi-check" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import Chart from "primevue/chart";
import Button from "primevue/button";
import DashboardCard from "./DashboardCard.vue";

const chartData = ref({
	labels: ["Jan", "Feb", "Mar", "Apr", "May"],
	datasets: [
		{
			label: "Sales",
			backgroundColor: "#42A5F5",
			data: [65000, 59000, 80000, 81000, 56000],
		},
	],
});

const chartOptions = ref({
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
	},
});
</script>

<style scoped>
.dashboard {
	padding: 20px;
	font-family: "Segoe UI", sans-serif;
}

.metrics-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 1rem;
	margin-bottom: 2rem;
}

.charts-section {
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
}

.chart-card {
	flex: 1 1 45%;
	padding: 1rem;
	background: #f5f5f5;
	border-radius: 8px;
}
</style>
