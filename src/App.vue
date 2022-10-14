<template>
  <v-app>
    <v-layout>
      <v-main>
        <NavComexs></NavComexs>
        <v-container>
          <v-row class="mx-auto justify-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import NavComexs from './components/NavComexs.vue'
import ProductCard from './components/ProductCard.vue'
export default {
  name: 'App',

  components: {
    NavComexs, ProductCard
  },

  data: () => ({
    //
  }),
}
</script>
