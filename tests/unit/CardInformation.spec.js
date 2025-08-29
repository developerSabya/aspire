import { shallowMount } from '@vue/test-utils'
import CardInformation from '@/components/CardInformation.vue'
import { createTestingPinia } from '@pinia/testing'

describe('CardInformation.vue', () => {
  it('renders two q-expansion-item stubs', () => {
    const wrapper = shallowMount(CardInformation, {
      global: { plugins: [createTestingPinia()] },
      props: { card: null }
    })
    const items = wrapper.findAllComponents({ name: 'q-expansion-item' })
    expect(items.length).toBe(2)
  })
})
