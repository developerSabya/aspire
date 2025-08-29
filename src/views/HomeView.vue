
<template>
  <div class="home q-pa-md">
    <q-card bordered class="my-card q-pa-md q-mb-md flex flex-center bg-primary text-white">
      <div class="text-h5">Hello Mark Henry!</div>
    </q-card>

    <q-card bordered class="q-pa-md q-mb-md">
      <div class="row items-center justify-between">
        <div>
          <div class="text-subtitle1">Total Company Balance</div>
          <div class="text-h6 text-primary">$120,500.00</div>
        </div>
        <q-btn color="primary" label="Add Funds" flat />
      </div>
    </q-card>

    <q-card bordered class="q-pa-md q-mb-md">
      <div class="text-subtitle1 q-mb-sm">Your Cards</div>
      <div class="row q-col-gutter-md">
        <div class="col-6 col-md-3" v-for="card in cards" :key="card.id">
          <q-card class="q-pa-sm bg-grey-2">
            <div class="text-bold">{{ card.type }}</div>
            <div class="text-caption">**** {{ card.last4 }}</div>
            <div class="text-caption">Balance: ${{ card.balance }}</div>
          </q-card>
        </div>
      </div>
    </q-card>

    <q-card bordered class="q-pa-md q-mb-md">
      <div class="text-subtitle1 q-mb-sm">Recent Transactions</div>
      <q-list bordered separator>
        <q-item v-for="tx in transactions" :key="tx.id">
          <q-item-section>
            <q-item-label>{{ tx.merchant }}</q-item-label>
            <q-item-label caption>{{ tx.date }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label :class="tx.amount < 0 ? 'text-negative' : 'text-positive'">
              {{ tx.amount < 0 ? '-' : '+' }}${{ Math.abs(tx.amount) }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <q-card bordered class="q-pa-md q-mb-md">
      <div class="text-subtitle1 q-mb-sm">Company Spend Overview</div>
      <q-linear-progress value="0.7" color="primary" track-color="grey-3" size="20px" rounded>
        <div class="absolute-full flex flex-center text-white">$84,350 / $120,500</div>
      </q-linear-progress>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
  { id: 1, type: 'Corporate Visa', last4: '1234', balance: '8,500.00' },
  { id: 2, type: 'Team MasterCard', last4: '5678', balance: '5,200.00' },
  { id: 3, type: 'Travel Card', last4: '9012', balance: '2,300.00' },
  { id: 4, type: 'Expense Card', last4: '3456', balance: '1,000.00' },
])

const transactions = ref([
  { id: 1, merchant: 'Amazon Web Services', date: '2025-08-28', amount: -1200.00 },
  { id: 2, merchant: 'Starbucks', date: '2025-08-28', amount: -15.50 },
  { id: 3, merchant: 'Aspire', date: '2025-08-27', amount: 5000.00 },
  { id: 4, merchant: 'Uber', date: '2025-08-27', amount: -45.00 },
  { id: 5, merchant: 'Apple', date: '2025-08-26', amount: -299.99 },
])
</script>
