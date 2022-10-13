<template>
  <v-app >
    <v-layout>
      <v-main>
        <NavComexs></NavComexs>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import NavComexs from './components/NavComexs.vue'

export default {
  name: 'App',

  components: {
    NavComexs
  },

  data: () => ({
    //
  }),
}
</script>
