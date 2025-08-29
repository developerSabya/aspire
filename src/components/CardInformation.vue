<template>
    <div>
        <!-- <q-card class="q-pa-md" style="max-width: 400px; margin: auto;"> -->
        <q-expansion-item label="Card details" group="cardInfo" expand-icon-side="right">
            <template #header="props">
                <div class="flex row items-center full-width">
                    <q-img src="../assets/Group 11889.svg" alt="Card"
                        style="width: 24px; height: 24px; margin-right: 8px;" />
                    <span class="q-expansion-item__label">Card details</span>
                    <div class="q-space"></div>
                    <q-icon :name="props.expandIcon" class="q-expansion-item__toggle-icon"
                        :class="{ 'q-expansion-item__toggle-icon--rotated': props.expanded }" />
                </div>
            </template>
            <q-card>
                <q-card-section>
                    <div class="text-grey-7 q-pa-sm">
                        Card number, expiry, holder name, etc.
                    </div>
                </q-card-section>
            </q-card>
        </q-expansion-item>

        <q-expansion-item label="Recent transactions" group="cardInfo" expand-icon-side="right" bordered>
            <template #header="props">
                <div class="flex row items-center full-width">
                    <q-img src="../assets/Group 118888.svg" alt="Card"
                        style="width: 24px; height: 24px; margin-right: 8px;" />
                    <span class="q-expansion-item__label">Recent transactions</span>
                    <div class="q-space"></div>
                    <q-icon :name="props.expandIcon" class="q-expansion-item__toggle-icon"
                        :class="{ 'q-expansion-item__toggle-icon--rotated': props.expanded }" />
                </div>
            </template>
            <q-card>
                <q-list separator>
                    <q-item v-for="tx in transactions" :key="tx.id">
                        <q-item-section avatar>
                            <q-avatar :color="tx.color" text-color="white">
                                <q-icon :name="tx.icon" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label class="text-weight-medium">{{ tx.merchant }}</q-item-label>
                            <q-item-label caption class="text-grey-6">{{ tx.date }}</q-item-label>
                            <q-item-label caption v-if="tx.refund" class="text-positive">Refund on debit
                                card</q-item-label>
                            <q-item-label caption v-else>Charged to debit card</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <div
                                :class="{ 'text-positive': tx.amount > 0, 'text-negative': tx.amount < 0, 'text-weight-bold': true }">
                                {{ tx.amount > 0 ? '+' : '-' }} S$ {{ Math.abs(tx.amount) }}
                            </div>
                        </q-item-section>
                    </q-item>
                </q-list>
                <div class="q-mt-md">
                    <q-btn primary no-caps color="green" class="full-width bg-green-1 text-green" label="View all card transactions" />
                </div>
            </q-card>
        </q-expansion-item>
        <!-- </q-card> -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
const transactions = ref([
    {
        id: 1,
        merchant: 'Hamleys',
        date: '20 May 2020',
        amount: 150,
        refund: true,
        color: 'primary',
        icon: 'store'
    },
    {
        id: 2,
        merchant: 'Hamleys',
        date: '20 May 2020',
        amount: -150,
        refund: false,
        color: 'secondary',
        icon: 'flight'
    },
    {
        id: 3,
        merchant: 'Hamleys',
        date: '20 May 2020',
        amount: -150,
        refund: false,
        color: 'pink',
        icon: 'local_offer'
    },
    {
        id: 4,
        merchant: 'Hamleys',
        date: '20 May 2020',
        amount: -150,
        refund: false,
        color: 'primary',
        icon: 'store'
    },
])
</script>
