import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView.vue', () => {
  it('renders at least 4 q-card stubs', () => {
    const wrapper = shallowMount(HomeView)
    const cards = wrapper.findAllComponents({ name: 'q-card' })
    expect(cards.length).toBeGreaterThanOrEqual(4)
  })
})
