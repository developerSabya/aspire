import { shallowMount } from '@vue/test-utils'
import SettingsSection from '@/views/SettingsSection.vue'

describe('SettingsSection.vue', () => {
  it('renders at least 4 q-card stubs', () => {
    const wrapper = shallowMount(SettingsSection)
    const cards = wrapper.findAllComponents({ name: 'q-card' })
    expect(cards.length).toBeGreaterThanOrEqual(4)
  })
})
