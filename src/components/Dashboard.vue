<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { summary } from "@/data/summary";
import { formatNumber } from "@/composables/Numbers";
import { ChartLine, CreditCard, DollarSign, Users } from "lucide-vue-next";
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
  </div>
</template>
