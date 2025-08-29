<template>
    <div>
        <h5 class="q-mb-md">Company Cards</h5>
        <q-table
            :rows="companyCards"
            :columns="columns"
            row-key="id"
            flat
            bordered
            :pagination="{ rowsPerPage: 5 }"
        />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCardStore } from '../stores/cardStore'
import { storeToRefs } from 'pinia'

const cardStore = useCardStore()
const { companyCards } = storeToRefs(cardStore)

const columns = [
    { name: 'cardHolder', label: 'Card Holder', field: 'cardHolder', align: 'left' },
    { name: 'cardType', label: 'Type', field: 'cardType', align: 'left' },
    { name: 'cardNumber', label: 'Card Number', field: 'cardNumber', align: 'left' },
    { name: 'expiry', label: 'Expiry', field: 'expiry', align: 'left' },
    { name: 'balance', label: 'Balance', field: 'balance', align: 'right' },
    { name: 'department', label: 'Department', field: 'department', align: 'left' },
]

onMounted(() => {
    if (companyCards.value.length === 0) {
        cardStore.fetchCompanyCards()
    }
})
</script>