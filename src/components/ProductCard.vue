<template>
  <v-card
    class="mx-auto my-12"
    width="300"
    max-width="300"
    height="600"
    elevation="5"
  >
    <v-img class="mt-3"
      height="200"
      aspect-ratio="1"
      :src="src"
     
    ></v-img>

    <div class="my-3 mx-5 text-subtitle-1 text-justify font-weight-black" >{{description}}</div>
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
       
      </v-row>
      <div class="my-4 text-subtitle-1">
       Código {{id}}
      </div>
      <div class="my-4 text-body-1">
        {{brand}}
      </div>
      <div class="my-4 text-body-1">
        {{pack}}
      </div>
      <div class="my-4 text-body-1">
        R$ {{price}}
      </div>

      <div class="my-4 text-body-1">EAN13# {{ean13}} </div>
    </v-card-text>

    

    
    <div class="px-4">
      <v-chip-group v-if="isFeature || isLiquidation" >
       
        <v-chip v-if="isFeature" class="ma-2" color="orange" text-color="white" append-icon="mdi-star">
          Lançamento
        </v-chip>
        <v-chip v-if="isLiquidation" class="ma-2" color="red" text-color="white" append-icon=" mdi-currency-usd-off">
          Promoção
        </v-chip>
      </v-chip-group>
    </div>

  </v-card>
</template>

<script>
export default {
    name:'ProductCard',
    props: {
    description: String,
    id: String,
    brand: String,
    category: String,
    pack: String,
    price: String,
    ean13:String,
    isFeature: Boolean,
    isLiquidation: Boolean,
    src:String

  },
    data: () => ({
      show: false,
    }),
}
</script>

<style>

</style>
