<template >

  <vue-flip  width="300px" height="370px" active-click="true" active-hover="true" class=" mx-5 my-5 rounded-lg elevation-3" >
    <template v-slot:front>
      <!-- <v-card width ="300px" height="350px" max-width="300" max-height="350px">
        <v-tooltip activator="parent" location="bottom">Click-me</v-tooltip> -->
        <v-img
        class="bg-white mx-auto my-auto"
        width="285"
        height="355"
        max-height="340px"
        aspect-ratio="1"
        :src="src"
        
      ></v-img>
     <!-- </v-card> -->
  </template>
  <template v-slot:back>
    <div  width ="300px" height="370px" max-width="300" max-height="370px">
      <v-list flat width="285" height="355" class="mx-auto my-auto">
        <v-list-title class="d-flex mx-2 font-weight-black text-center " >{{description}}</v-list-title>
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
    </div>
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
  },
  methods :{
      formatPrice(value){
        return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
      }
    }
})

</script>
<style>

</style>