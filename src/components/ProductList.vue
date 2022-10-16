<template>
  <vue-flip active-click >
    <template v-slot:front>
      <v-card class="mx-auto" width ="300px" height="350px" max-width="300" max-height="350px">
        <v-tooltip activator="parent" location="bottom">Click-me</v-tooltip>
        <v-img
        class="bg-white"
        width="300"
        height="350px"
        max-height="350px"
        aspect-ratio="1"
        :src="src"
        cover
      ></v-img>
      </v-card>
  </template>
    <template v-slot:back>
    <v-card class="mx-auto" width ="300px" height="350px" max-width="300" max-height="350px">
      <v-list flat>
        <v-list-title class="d-flex mx-2 font-weight-black text-center" >{{description}}</v-list-title>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-pound"></v-icon>
          </template>
          <v-list-item-title>{{id}}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-watermark"></v-icon>
          </template>
          <v-list-item-title>{{brand}}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-package-variant"></v-icon>
          </template>
          <v-list-item-title>{{pack}}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-shape"></v-icon>
          </template>
          <v-list-item-title>{{category}}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <template v-slot:prepend>
            <v-icon icon="mdi-currency-usd"></v-icon>
          </template>
          <v-list-item-title>{{price}}</v-list-item-title>
        </v-list-item>

        <v-chip v-if="isFeature" class="ma-2" color="orange" text-color="white" append-icon="mdi-star">
          Lançamento
        </v-chip>
        <v-chip v-if="isLiquidation" class="ma-2" color="red" text-color="white" append-icon=" mdi-currency-usd-off">
          Promoção
        </v-chip>

      </v-list>
    </v-card>
  </template>
  </vue-flip>
</template>

<script>
import { VueFlip } from 'vue-flip';
export default ({
  name: 'ProductList',
  props: {
    description: String,
    id: String,
    brand: String,
    category: String,
    pack: String,
    price: String,
    isFeature: Boolean,
    isLiquidation: Boolean,
    src:String

  },
  components: {
    'vue-flip': VueFlip
  }

})

</script>
<style>

</style>