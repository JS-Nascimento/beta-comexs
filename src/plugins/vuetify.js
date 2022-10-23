/* // Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'*/

Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1264,
      lg: 1904,
      xl: 2804,
    },
  },
}
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
 