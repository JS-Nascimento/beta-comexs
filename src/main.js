import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'


import { registerLicense } from '@syncfusion/ej2-base';


import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { loadFonts } from './plugins/webfontloader'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

import { createPinia } from 'pinia'

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
import { VueFlip } from 'vue-flip'

registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0VgWX1ecXNRTmJfVUM=');

createApp(App).use(router)
  .use(vuetify)
  .use(VueFlip)
  .component('EasyDataTable', Vue3EasyDataTable)

  .use(createPinia())
  .mount('#app')
