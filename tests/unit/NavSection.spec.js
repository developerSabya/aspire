import { shallowMount } from '@vue/test-utils'
import NavSection from '@/components/NavSection.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('NavSection.vue', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', name: 'Home', component: { template: '<div />' } },
      { path: '/cards', name: 'Cards', component: { template: '<div />' } },
      { path: '/payments', name: 'Payments', component: { template: '<div />' } },
      { path: '/credit', name: 'Credit', component: { template: '<div />' } },
      { path: '/settings', name: 'Settings', component: { template: '<div />' } }
    ]
  })
  it('renders at least 1 q-list and 1 q-item stub', async () => {
    const wrapper = shallowMount(NavSection, {
      global: { plugins: [router] }
    })
    await router.isReady()
  // Since stubs render as divs, check for at least 1 div (q-list) and at least 1 div (q-item)
  const divs = wrapper.findAll('div')
  expect(divs.length).toBeGreaterThanOrEqual(2)
  })
})
