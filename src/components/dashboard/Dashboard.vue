<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { summary } from "@/data/summary";
import { formatNumber } from "@/composables/Numbers";
import { ChartLine, CreditCard, DollarSign, Users } from "lucide-vue-next";
import Overview from "./Overview.vue";
import RecentSales from "./RecentSales.vue";
</script>

<template>
  <div class="m-4">
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium">
            {{ summary.revenue.title }}
          </CardTitle>
          <DollarSign />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">
            ${{ formatNumber(summary.revenue.total, "0,0.00") }}
          </div>
          <p class="text-xs text-muted-foreground">
            +{{ summary.revenue.percentage }}% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium">
            {{ summary.subscriptions.title }}
          </CardTitle>
          <Users />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">
            +{{ formatNumber(summary.subscriptions.total, "0,0") }}
          </div>
          <p class="text-xs text-muted-foreground">
            +{{ summary.subscriptions.percentage }}% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium">
            {{ summary.sales.title }}
          </CardTitle>
          <CreditCard />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">
            + {{ formatNumber(summary.sales.total, "0,0") }}
          </div>
          <p class="text-xs text-muted-foreground">
            +{{ summary.sales.percentage }}% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          class="flex flex-row items-center justify-between space-y-0 pb-2"
        >
          <CardTitle class="text-sm font-medium">
            {{ summary.active.title }}
          </CardTitle>
          <ChartLine />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">
            +{{ formatNumber(summary.active.total, "0,0") }}
          </div>
          <p class="text-xs text-muted-foreground">
            +{{ summary.active.percentage }} since last hour
          </p>
        </CardContent>
      </Card>
    </div>

    <div class="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card class="col-span-4">
        <CardHeader class="">
          <CardTitle class="text-sm font-large"> Overview </CardTitle>
        </CardHeader>
        <CardContent>
          <Overview />
        </CardContent>
      </Card>
      <Card class="col-span-3">
        <CardHeader class="">
          <CardTitle class=""> 
            <div class="text-sm font-large">Recent Sales</div>
          </CardTitle>
          <div class="text-sm text-muted-foreground">You made 265 sales this month.</div>
        </CardHeader>
        <CardContent>
          <RecentSales />
        </CardContent>
      </Card>
    </div>
  </div>
</template>
