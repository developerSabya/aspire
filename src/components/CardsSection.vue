<template>
    <div class="q-pa-xl">
        <div class="row">
            <div class="col-2">
                <div class="text-caption">Available Balance</div>
                <q-chip square class="bg-transparent text-weight-bold">
                    <q-avatar color="green" text-color="white">S$</q-avatar>
                    {{ selectedCardBalance }}
                </q-chip>
            </div>
            <div class="col-7"></div>
            <div class="col-3 flex flex-row justify-end items-end">
                <q-btn color="primary" icon="add" label="New card" no-caps class="new-card" @click="showNewCard = true" />
            </div>
        </div>

        <q-tabs v-model="tab" dense class="q-tabs--content q-mb-sm" active-color="primary" indicator-color="primary"
            align="left" narrow-indicator no-caps>
            <q-tab name="myCards" label="My debit cards" />
            <q-tab name="companyCards" label="All company cards" />
        </q-tabs>
        <q-card class="my-card q-pa-sm">
            <q-card-section>
                <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="myCards">
                        <Suspense>
                            <template #default>
                                <MyCards :selectedCardIndex="selectedCardIndex" @update:selectedCardIndex="selectedCardIndex = $event" />
                            </template>
                            <template #fallback>
                                <div>Loading...</div>
                            </template>
                        </Suspense>
                    </q-tab-panel>

                    <q-tab-panel name="companyCards">
                        <CompanyCards />
                    </q-tab-panel>
                </q-tab-panels>
            </q-card-section>
        </q-card>
    </div>
    <NewCardForm :model-value="showNewCard" @update:modelValue="showNewCard = $event" @close="showNewCard = false" @create="handleCreateCard" />
</template>


<script>
import CompanyCards from './CompanyCards.vue';
import MyCards from './MyCards.vue';
import NewCardForm from './NewCardForm.vue';
import { useCardStore } from '../stores/cardStore';

import { computed } from 'vue';

export default {
    name: 'CardsSection',
    data() {
        return {
            tab: 'myCards',
            showNewCard: false,
            selectedCardIndex: 0
        }
    },
    components: {
        MyCards,
        CompanyCards,
        NewCardForm
    },
    computed: {
        selectedCardBalance() {
            const cardStore = useCardStore();
            // Show balance of the first card by default, or 0 if none
            return cardStore.allMyCards[this.selectedCardIndex]?.balance ?? 0;
        }
    },
    methods: {
        handleCreateCard({ cardName, cardType }) {
            // Generate random card number, expiry, cvv
            const randomDigits = (len) => Array.from({length: len}, () => Math.floor(Math.random()*10)).join('');
            const cardNumber = `${randomDigits(4)} ${randomDigits(4)} ${randomDigits(4)} ${randomDigits(4)}`;
            const expiry = `${String(Math.floor(Math.random()*12)+1).padStart(2,'0')}/${String(new Date().getFullYear()+Math.floor(Math.random()*5)).slice(-2)}`;
            const cvv = randomDigits(3);
            const cardHolder = cardName;
            const cardStore = useCardStore();
            const newId = cardStore.allMyCards.length ? Math.max(...cardStore.allMyCards.map(c=>c.id))+1 : 1;
            cardStore.allMyCards.push({
                id: newId,
                cardNumber,
                cardType,
                expiry,
                cvv,
                cardHolder,
                balance: 0
            });
        }
    }
}
</script>

<style scoped></style>