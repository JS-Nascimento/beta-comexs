<template>
    <div>
        <v-toolbar class="mb-2" :extended="extended">
            <v-toolbar-title>Catálogo de Produtos</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon @click="isVisible">mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            <template v-if="extended" v-slot:extension>
                <v-row>
                    <v-col cols="auto" xs="1" align-self="start">
                        <v-btn-toggle v-model="toggle_exclusive" class="ml-5">
                            <v-btn icon @click='isExclusive(0)'>
                                <v-icon>mdi-view-carousel</v-icon>
                                <v-tooltip activator="parent" location="bottom">Visualização em Cartões
                                </v-tooltip>
                            </v-btn>

                            <v-btn icon @click="isExclusive(1)">
                                <v-icon>mdi-view-list</v-icon>
                                <v-tooltip activator="parent" location="bottom">Visualização em Tabela
                                </v-tooltip>
                            </v-btn>

                            <v-btn icon @click="isExclusive(2)">
                                <v-icon>mdi-view-grid</v-icon>
                                <v-tooltip activator="parent" location="bottom">Visualização em Lista
                                </v-tooltip>
                            </v-btn>

                        </v-btn-toggle>
                        <v-tooltip activator="parent" location="bottom">Modos de Visualização
                        </v-tooltip>
                    </v-col>
                    <v-col cols="7" xs="1" align-self="center">
                        <v-row>
                            <v-select 
                                label="Categoria" 
                                v-model="CategorySelected"  
                                :items="items" 
                                item-text="text" 
                                item-value="key" 
                                item-title="text"
                                density="comfortable"
                                

                                ></v-select>
                            <v-select 
                                label="Subgrupos" 
                                v-model="subCategorySelected"
                                :disabled="CategorySelected.length < 1"
                                :items="['Papelaria', 'Festas', 'Utilidades', 'Brinquedos', 'Limpeza']" class="px-2"
                                density="comfortable"
                                >
                            </v-select>
                            <v-select label="Famílias" 
                                v-model="familySelected"
                                :disabled="subCategorySelected.length < 1"
                                :items="['Papelaria', 'Festas', 'Utilidades', 'Brinquedos', 'Limpeza']"
                                density="comfortable"
                               ></v-select>
                        </v-row>
                    </v-col>
                    <v-col cols="1" xs="1" class="px-5" align-self="start">
                        <v-btn
                            :loading="loading[1]"
                            :disabled="familySelected.length < 1"
                            color="blue"
                            icon="mdi-magnify"
                            @click="load(4)"
                            ></v-btn>
                    </v-col>

                        <!--  <v-col cols="3" xs="1" class="px-5" align-self="start">
                        <v-text-field density="comfortable" clearable label="Pesquisar" prepend-icon="mdi-magnify" :value="CategorySelected" dense>
                            <v-tooltip activator="parent" location="bottom">Digite o termo da pesquisa e tecle Enter...
                            </v-tooltip>
                        </v-text-field>
                    </v-col>  -->

                </v-row>

            </template>

        </v-toolbar>

        <v-container>
            <v-col v-if="toggle_exclusive === 0" cols="12">
                <v-row class="mx-auto justify-lg-space-around">
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
            </v-col>

            <v-col v-if="toggle_exclusive === 1">
                <ProductTable></ProductTable>

            </v-col>


            <div v-if="toggle_exclusive === 2">
                <v-container>
                    <v-row>
                        <!-- <v-col cols="auto">
                            <ProductList class="d-flex justify-center align-center" description="Apontador"
                                src="https://livrariaepapelariabrasil.com.br/wp-content/uploads/2019/06/Apontador-cDeposito-Neon-Faber-Castell.png"
                                id="5001" brand="Faber Castell" pack="Caixa com 25 und"
                                category="Apontadores com Depósito" price="105.25" isFeature />
                        </v-col> -->
                    </v-row>
                </v-container>
            </div>

        </v-container>


    </div>
</template>

<script >
import ProductCard from '../components/ProductCard.vue'
import ProductTable from '../components/ProductTable.vue'
//import ProductList from '../components/ProductList.vue'
import { useProductCategoryStore } from "@/stores/ProductCategory";




const Category = useProductCategoryStore()
Category.fill()

const CategoryItems = Category.$state.productCategory






export default {
    props: {
        Category: {
            id: {},
            name: {},
        },
        

    },

    components: {
        ProductCard,
        ProductTable,
        //ProductList,

    },
    data: () => ({

        extended: false,
        toggle_exclusive: 2,
        items: CategoryItems,
        CategorySelected:"" ,
        subCategorySelected:"",
        familySelected:"",
        loading:[]

    }),
    methods: {
        isVisible() {
            this.extended = !this.extended

        },
        isExclusive(index) {
            this.toggle_exclusive = index
        },
        verifySubCategories(){
            
        },    
        load (i) {
        this.loading[i] = true
        setTimeout(() => (this.loading[i] = false), 3000)
      },

    computed: {
        
            
    },
    mounted() {
        
    },
},
}
</script>

<style>

</style>
