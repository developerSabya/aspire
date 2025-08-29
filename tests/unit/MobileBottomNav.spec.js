// Removed erroneous describe block
import { mount } from '@vue/test-utils'
import MobileBottomNav from '@/components/MobileBottomNav.vue'
import { createRouter, createWebHistory } from 'vue-router'

describe('MobileBottomNav.vue', () => {
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

  it('renders the mobile bottom nav', async () => {
    const wrapper = mount(MobileBottomNav, {
      global: { plugins: [router] }
    })
    await router.isReady()
    expect(wrapper.find('.mobile-bottom-nav').exists()).toBe(true)
  })
})
