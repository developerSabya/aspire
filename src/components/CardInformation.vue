<template>
    <div>
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
                    <div v-if="card" class="q-pa-sm">
                        <div><strong>Card Number:</strong> {{ card.cardNumber || '•••• •••• •••• ••••' }}</div>
                        <div><strong>Expiry:</strong> {{ card.expiry || '--/--' }}</div>
                        <div><strong>Holder Name:</strong> {{ card.cardHolder || 'N/A' }}</div>
                        <div v-if="card.cardType"><strong>Type:</strong> {{ card.cardType }}</div>
                    </div>
                    <div v-else class="text-grey-7 q-pa-sm">
                        No card selected.
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
                <q-list separator :style="showAll ? 'max-height:350px;overflow-y:auto' : ''">
                    <q-item v-for="tx in (showAll ? transactions : transactions.slice(0, 5))" :key="tx.id">
                        <q-item-section avatar>
                            <q-avatar :color="tx.color" text-color="white">
                                <q-icon :name="tx.icon" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>
                            <q-item-label class="text-weight-medium">{{ tx.merchant }}</q-item-label>
                            <q-item-label caption class="text-grey-6">{{ tx.date }}</q-item-label>
                            <q-item-label caption v-if="tx.refund" class="text-positive">Refund on debit card</q-item-label>
                            <q-item-label caption v-else>Charged to debit card</q-item-label>
                        </q-item-section>
                        <q-item-section side>
                            <div :class="{ 'text-positive': tx.amount > 0, 'text-negative': tx.amount < 0, 'text-weight-bold': true }">
                                {{ tx.amount > 0 ? '+' : '-' }} S$ {{ Math.abs(tx.amount) }}
                            </div>
                        </q-item-section>
                    </q-item>
                </q-list>
                <div class="q-mt-md" v-if="transactions.length > 5 && !showAll">
                    <q-btn primary no-caps color="green" class="full-width bg-green-1 text-green" label="View all card transactions" @click="showAll = true" />
                </div>
                <div class="q-mt-md" v-if="showAll && transactions.length > 5">
                    <q-btn no-caps color="grey" class="full-width" label="Show less" @click="showAll = false" />
                </div>
            </q-card>
        </q-expansion-item>
        <!-- </q-card> -->
    </div>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue'
import { useCardStore } from '../stores/cardStore'

const props = defineProps({
    card: {
        type: Object,
        default: null
    }
})

const cardStore = useCardStore()
const transactions = computed(() => {
    if (!props.card) return [];
    return cardStore.transactionsByCard(props.card.id);
})

const showAll = ref(false)
</script>
