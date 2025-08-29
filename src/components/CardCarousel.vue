<template>
	<div class="row">
		<div class="col-md-6 col-sm-12">
			<div class="flex justify-end items-end">
				<q-btn style="color: #01D167" :icon="showCardNumber ? 'visibility_off' : 'visibility'"
					:label="showCardNumber ? 'Hide Card Number' : 'Show Card Number'" no-caps class="new-card" flat
					@click="showCardNumber = !showCardNumber"></q-btn>
			</div>
			<q-carousel v-model="slide" swipeable animated :control-type="controlType" control-color="green" navigation
				padding height="300px" class="text-purple rounded-borders"
				@update:model-value="onSlideChange">
				<q-carousel-slide v-for="card in cardsToShow" :key="card.id" :name="card.id"
					class="column no-wrap flex-center q-pa-0">
					<PayCard :cardDetails="card" :showNumber="showCardNumber"></PayCard>
				</q-carousel-slide>
			</q-carousel>
			<CardControls> </CardControls>
		</div>
		<div class="col-md-6 col-sm-12">
			<CardInformation :card="cardsToShow.find(card => card.id === slide)" />
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
import { useCardStore } from '../stores/cardStore';
import { storeToRefs } from 'pinia';
import PayCard from './PayCard.vue';
import CardControls from './CardControls.vue';
import CardInformation from './CardInformation.vue';

export default {
	components: { PayCard, CardControls, CardInformation },
	name: 'CardCarousel',
	props: {
		selectedCardIndex: {
			type: Number,
			default: 0
		},
		cardType: {
			type: String,
			default: 'my' // 'my' or 'company'
		}
	},
	emits: ['update:selectedCardIndex'],
	async setup(props, { emit }) {
		const cardStore = useCardStore();
		const { allMyCards, companyCards, showCardNumber } = storeToRefs(cardStore);
		const slide = ref(1);

		// Fetch cards and transactions on mount (simulate API call)
		if (cardStore.allMyCards.length === 0) {
			await cardStore.fetchCards();
		}
		if (cardStore.companyCards.length === 0) {
			await cardStore.fetchCompanyCards();
		}
		if (cardStore.transactions.length === 0) {
			await cardStore.fetchTransactions();
		}

		const cardsToShow = computed(() => props.cardType === 'company' ? companyCards.value : allMyCards.value);

		// Watch for slide change and emit selectedCardIndex
		const onSlideChange = (val) => {
			const idx = cardsToShow.value.findIndex(card => card.id === val);
			emit('update:selectedCardIndex', idx);
		};

		// Set initial slide based on selectedCardIndex
		if (cardsToShow.value[props.selectedCardIndex]) {
			slide.value = cardsToShow.value[props.selectedCardIndex].id;
		}

		return {
			slide,
			cardsToShow,
			showCardNumber,
			cardStore,
			onSlideChange
		};
	}
};
</script>
