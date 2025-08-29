<template>
  <q-footer class="mobile-bottom-nav q-pa-none" elevated>
    <q-tabs
      v-model="tab"
      dense
      align="justify"
      class="bg-white text-primary"
      indicator-color="primary"
      active-color="primary"
      @update:model-value="navigate"
    >
      <q-tab name="home" label="Home">
        <template #icon>
          <img src="../assets/Home.svg" alt="Home" width="24" height="24" />
        </template>
      </q-tab>
      <q-tab name="cards" label="Cards">
        <template #icon>
          <img src="../assets/Card.svg" alt="Cards" width="24" height="24" />
        </template>
      </q-tab>
      <q-tab name="payments" label="Payments">
        <template #icon>
          <img src="../assets/Payments.svg" alt="Payments" width="24" height="24" />
        </template>
      </q-tab>
      <q-tab name="credit" label="Credit">
        <template #icon>
          <img src="../assets/Credit.svg" alt="Credit" width="24" height="24" />
        </template>
      </q-tab>
      <q-tab name="settings" label="Settings">
        <template #icon>
          <img src="../assets/Account.svg" alt="Settings" width="24" height="24" />
        </template>
      </q-tab>
    </q-tabs>
  </q-footer>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const tab = ref('home')

// Set tab based on current route
watch(
  () => route.name,
  (name) => {
    if (name === 'Home') tab.value = 'home'
    else if (name === 'Cards' || name === 'CompanyCards') tab.value = 'cards'
    else if (name === 'Payments') tab.value = 'payments'
    else if (name === 'Credit') tab.value = 'credit'
    else if (name === 'Settings') tab.value = 'settings'
  },
  { immediate: true }
)

function navigate(val) {
  if (val === 'home') router.push({ name: 'home' })
  else if (val === 'cards') router.push({ name: 'cards' })
  else if (val === 'payments') router.push({ name: 'payments' })
  else if (val === 'credit') router.push({ name: 'credit' })
  else if (val === 'settings') router.push({ name: 'settings' })
}
</script>

<style scoped>
.mobile-bottom-nav {
  display: none;
}
@media (max-width: 600px) {
  .mobile-bottom-nav {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    z-index: 1000;
    box-shadow: 0 -2px 8px rgba(0,0,0,0.04);
  }
}
</style>
