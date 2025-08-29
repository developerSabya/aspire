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
import { ref } from 'vue';
import { useCardStore } from '../stores/cardStore';
import { storeToRefs } from 'pinia';
import PayCard from './PayCard.vue';
import CardControls from './CardControls.vue';
import CardInformation from './CardInformation.vue';

export default {
  components: { PayCard, CardControls, CardInformation },
  name: 'MyCards',
  setup() {
    const cardStore = useCardStore();
    const { allMyCards, showCardNumber } = storeToRefs(cardStore);
    const slide = ref(1);
    return {
      slide,
      allMyCards,
      showCardNumber,
      cardStore
    };
  }
};
</script>