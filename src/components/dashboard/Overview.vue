<script setup>
import { statistic } from "@/data/statistic";
import BarChart from "../ui/chart-bar/BarChart.vue";
</script>
<template>
  <BarChart
    :data="statistic"
    :categories="['total']"
    :index="'name'"
    :rounded-corners="4"
  />
</template>
