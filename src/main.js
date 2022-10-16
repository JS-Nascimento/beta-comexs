import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { loadFonts } from './plugins/webfontloader'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import App from './App.vue'

import router from './router'

loadFonts()

const vuetify = createVuetify({
  components,
  directives,
  blueprints,
  locale

})

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as blueprints from 'vuetify/blueprints'
import * as locale from 'vuetify/locale'

createApp(App).use(router)
  .use(vuetify)
  .component('EasyDataTable', Vue3EasyDataTable)
  .mount('#app')
