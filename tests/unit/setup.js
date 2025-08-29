import { config } from '@vue/test-utils'

config.global.stubs = {
  'q-btn': true,
  'q-img': true,
  'q-icon': true,
  'q-card': true,
  'q-card-section': true,
  'q-expansion-item': true,
  'q-list': true,
  'q-item': true,
  'q-item-section': true,
  'q-item-label': true,
  'q-avatar': true,
  'q-chip': true,
  'q-tabs': true,
  'q-tab': true,
  'q-footer': true,
  'q-tab-panels': true,
  'q-tab-panel': true,
  'q-spinner-cube': true,
  'q-input': true,
  'q-select': true,
  'q-dialog': true,
  'q-card-actions': true,
  'q-linear-progress': true,
  'q-bar': true,
  'q-toggle': true,
  // Add more as needed
}
// Explicitly stub as components for test utils
config.global.components = {
  'q-item': { name: 'q-item', template: '<div><slot /></div>' },
  'q-list': { name: 'q-list', template: '<div><slot /></div>' },
  'q-tabs': { name: 'q-tabs', template: '<div><slot /></div>' },
  'q-tab': { name: 'q-tab', template: '<div><slot /></div>' }
}

config.global.directives = {
  'close-popup': () => {},
  'ripple': () => {}
}
