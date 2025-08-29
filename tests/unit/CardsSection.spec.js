import { shallowMount } from '@vue/test-utils'
import CardsSection from '@/components/CardsSection.vue'
import { createTestingPinia } from '@pinia/testing'

describe('CardsSection.vue', () => {
  it('renders q-tabs and new card button', () => {
    const wrapper = shallowMount(CardsSection, {
      global: { plugins: [createTestingPinia()] }
    })
  expect(wrapper.findComponent({ name: 'q-tabs' }).exists()).toBe(true)
    expect(wrapper.find('.new-card').exists()).toBe(true)
  })
})
