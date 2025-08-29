<template>
    <div class="payments q-pa-md">
        <q-card bordered class="my-card q-pa-md q-mb-md flex flex-center bg-primary text-white">
            <div class="text-h5">Payments Dashboard</div>
        </q-card>

        <q-card bordered class="q-pa-md q-mb-md">
            <div class="text-subtitle1 q-mb-sm">Payees</div>
            <q-list bordered separator>
                <q-item v-for="payee in payees" :key="payee.id">
                    <q-item-section>
                        <q-item-label>{{ payee.name }}</q-item-label>
                        <q-item-label caption>{{ payee.account }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-btn color="primary" label="Pay" size="sm" flat />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>

        <q-card bordered class="q-pa-md q-mb-md">
            <div class="text-subtitle1 q-mb-sm">Recent Payments</div>
            <q-list bordered separator>
                <q-item v-for="payment in payments" :key="payment.id">
                    <q-item-section>
                        <q-item-label>{{ payment.to }}</q-item-label>
                        <q-item-label caption>{{ payment.date }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                        <q-item-label class="text-negative">-${{ payment.amount }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-card>

        <q-card bordered class="q-pa-md q-mb-md">
            <div class="text-subtitle1 q-mb-sm">Payments Summary</div>
            <div class="q-mb-sm">Payments by Type</div>
            <div style="max-width: 500px;">
                <q-bar
                    :labels="paymentLabels"
                    :values="paymentValues"
                    color="secondary"
                    label-color="green"
                    bar-size="24px"
                />
            </div>
        </q-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const payees = ref([
    { id: 1, name: 'Acme Corp', account: 'ACME123456' },
    { id: 2, name: 'John Doe', account: 'DOE654321' },
    { id: 3, name: 'Global Supplies', account: 'GS998877' },
])

const payments = ref([
    { id: 1, to: 'Acme Corp', date: '2025-08-28', amount: 1200.00 },
    { id: 2, to: 'John Doe', date: '2025-08-27', amount: 500.00 },
    { id: 3, to: 'Global Supplies', date: '2025-08-26', amount: 3200.00 },
])

const paymentLabels = ['Vendors', 'Employees', 'Utilities', 'Other']
const paymentValues = [4200, 500, 300, 200]
</script>