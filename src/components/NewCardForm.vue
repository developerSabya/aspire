<template>
  <q-dialog :model-value="modelValue" @update:model-value="val => emit('update:modelValue', val)" persistent>
    <q-card style="min-width:350px">
      <q-card-section>
        <div class="text-h6">Create New Card</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="cardName" label="Card Name" autofocus />
        <q-select v-model="cardType" :options="cardTypeOptions" label="Card Type" class="q-mt-md" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="grey" v-close-popup @click="close" />
        <q-btn flat label="Create" color="primary" :disable="!cardName || !cardType" @click="createCard" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, defineEmits, defineProps } from 'vue'

const emit = defineEmits(['close', 'create', 'update:modelValue'])
const props = defineProps({
  modelValue: Boolean
})
const cardName = ref('')
const cardType = ref('')
const cardTypeOptions = ['Visa', 'MasterCard', 'Amex']

function close() {
  cardName.value = ''
  cardType.value = ''
  emit('update:modelValue', false)
  emit('close')
}

function createCard() {
  emit('create', { cardName: cardName.value, cardType: cardType.value })
  close()
}
</script>
