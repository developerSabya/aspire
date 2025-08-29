import { shallowMount } from '@vue/test-utils'
import CreditSection from '@/views/CreditSection.vue'

describe('CreditSection.vue', () => {
  it('renders at least 3 q-card stubs', () => {
    const wrapper = shallowMount(CreditSection)
    const cards = wrapper.findAllComponents({ name: 'q-card' })
    expect(cards.length).toBeGreaterThanOrEqual(3)
  })
})
