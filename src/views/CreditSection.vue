<template>
    <div class="credit q-pa-md">
        <q-card bordered class="my-card q-pa-md q-mb-md flex flex-center bg-primary text-white">
            <div class="text-h5">Credit Dashboard</div>
        </q-card>

        <q-card bordered class="q-pa-md q-mb-md">
            <div class="row items-center justify-between">
                <div>
                    <div class="text-subtitle1">Total Credit Limit</div>
                    <div class="text-h6 text-primary">$50,000.00</div>
                </div>
                <div>
                    <div class="text-subtitle2">Available Credit</div>
                    <div class="text-h6 text-positive">$32,500.00</div>
                </div>
            </div>
        </q-card>

        <q-card bordered class="q-pa-md q-mb-md">
            <div class="text-subtitle1 q-mb-sm">Recent Credit Activity</div>
            <q-list bordered separator>
                <q-item v-for="activity in creditActivity" :key="activity.id">
                    <q-item-section>
                        <q-item-label>{{ activity.type }}</q-item-label>
                        <q-item-label caption>{{ activity.date }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-item-label :class="activity.amount < 0 ? 'text-negative' : 'text-positive'">
                            {{ activity.amount < 0 ? '-' : '+' }}${{ Math.abs(activity.amount) }}
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>

        <q-card bordered class="q-pa-md q-mb-md">
            <div class="text-subtitle1 q-mb-sm">Credit Utilization</div>
            <div class="q-mb-sm">Utilization by Card</div>
            <div style="max-width: 500px;">
                <q-bar
                    :labels="utilLabels"
                    :values="utilValues"
                    color="accent"
                    label-color="grey-8"
                    bar-size="24px"
                />
            </div>
        </q-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const creditActivity = ref([
    { id: 1, type: 'Payment Received', date: '2025-08-28', amount: 5000.00 },
    { id: 2, type: 'Credit Used', date: '2025-08-27', amount: -1200.00 },
    { id: 3, type: 'Credit Used', date: '2025-08-26', amount: -800.00 },
    { id: 4, type: 'Payment Received', date: '2025-08-25', amount: 2000.00 },
])

const utilLabels = ['Corporate Visa', 'Team MasterCard', 'Travel Card', 'Expense Card']
const utilValues = [12000, 8000, 3500, 2000]
</script>