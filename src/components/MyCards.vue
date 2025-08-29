<template>
    <div class="row">
        <div class="col-6">
            <div class="flex justify-end items-end">
                <q-btn style="color: #01D167" :icon="showCardNumber ? 'visibility_off' : 'visibility'"
                    :label="showCardNumber ? 'Hide Card Number' : 'Show Card Number'" no-caps class="new-card" flat
                    @click="showCardNumber = !showCardNumber"></q-btn>
            </div>
            <q-carousel v-model="slide" swipeable animated :control-type="controlType" control-color="green" navigation
                padding height="300px" class="text-purple rounded-borders">
                <q-carousel-slide v-for="card of allMyCards" :key="card.id" :name="card.id"
                    class="column no-wrap flex-center q-pa-0">
                    <PayCard :cardDetails="card" :showNumber="showCardNumber"></PayCard>
                </q-carousel-slide>
            </q-carousel>
            <CardControls> </CardControls>
        </div>
        <div class="col-6">
            <CardInformation></CardInformation>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import PayCard from './PayCard.vue'
import CardControls from './CardControls.vue';
import CardInformation from './CardInformation.vue';

export default {
    components: { PayCard, CardControls, CardInformation },
    name: 'MyCards',
    data() {
        return {
            slide: ref(1),
            lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.',
            allMyCards: [
                { id: 1, cardNumber: '1234 5678 9012 3456', cardType: 'Visa', expiry: '12/24', cvv: '123', cardHolder: 'Mark Henry' },
                { id: 2, cardNumber: '9876 5432 1098 7654', cardType: 'MasterCard', expiry: '11/23', cvv: '456', cardHolder: 'Mark Henry' },
                { id: 3, cardNumber: '4567 8901 2345 6789', cardType: 'Amex', expiry: '10/25', cvv: '789', cardHolder: 'Mark Henry' },
                { id: 4, cardNumber: '3210 6543 2109 8765', cardType: '', expiry: '09/22', cvv: '012', cardHolder: 'Mark Henry' },
            ],
            showCardNumber: false,
        }
    }
}
</script>