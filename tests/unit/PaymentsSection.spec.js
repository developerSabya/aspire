import { shallowMount } from '@vue/test-utils'
import PaymentsSection from '@/views/PaymentsSection.vue'

describe('PaymentsSection.vue', () => {
  it('renders at least 3 q-card stubs', () => {
    const wrapper = shallowMount(PaymentsSection)
    const cards = wrapper.findAllComponents({ name: 'q-card' })
    expect(cards.length).toBeGreaterThanOrEqual(3)
  })
})
