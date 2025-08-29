
import './styles/quasar.scss'
import iconSet from 'quasar/icon-set/material-icons-round.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/eva-icons/eva-icons.css'

import { Dialog, Notify } from 'quasar'

export default {
  config: {},
  plugins: {
    Dialog,
    Notify
  },
  iconSet: iconSet
}