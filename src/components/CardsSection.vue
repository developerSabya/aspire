<template>
    <div class="q-pa-xl">
        <div class="row">
            <div class="col-2">
                <div class="text-caption">Available Balance</div>
                <q-chip square class="bg-transparent text-weight-bold">
                    <q-avatar color="green" text-color="white">S$</q-avatar>
                    3,000
                </q-chip>
            </div>
            <div class="col-7"></div>
            <div class="col-3 flex flex-row justify-end items-end">
                <q-btn color="primary" icon="add" label="New card" no-caps class="new-card" />
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
                                <MyCards />
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
</template>

<script>
import CompanyCards from './CompanyCards.vue';
import MyCards from './MyCards.vue';

export default {
    name: 'CardsSection',
    data() {
        return {
            tab: 'myCards'
        }
    },
    components: {
        MyCards,
        CompanyCards
    }
}
</script>

<style scoped></style>