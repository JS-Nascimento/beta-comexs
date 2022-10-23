<template>
    <fragment>
        <v-responsive>
            <v-toolbar>
                <v-toolbar-title>Catálogo de Produtos</v-toolbar-title>
                <v-btn-toggle v-model="toggle_exclusive" class="me-10">
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

                <!--  <v-col cols="3" xs="1" class="px-5" align-self="start">
                        <v-text-field density="comfortable" clearable label="Pesquisar" prepend-icon="mdi-magnify" :value="CategorySelected" dense>
                            <v-tooltip activator="parent" location="bottom">Digite o termo da pesquisa e tecle Enter...
                            </v-tooltip>
                        </v-text-field>
                    </v-col>  -->
                <!-- </v-col> -->
                <!-- </v-row> -->
                <v-btn icon>
                    <v-icon @click.stop="drawer = !drawer">mdi-magnify</v-icon>
                    <v-tooltip activator="parent" location="bottom">Filtros...</v-tooltip>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-filter-remove</v-icon>
                    <v-tooltip activator="parent" location="bottom">Resetar os filtros...</v-tooltip>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>



            </v-toolbar>


        </v-responsive>
        <v-navigation-drawer v-model="drawer" bottom temporary location="right">
            <template v-slot:prepend>
                <v-list-item title="Filtro de Produtos"></v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-select label="Categoria" v-model="CategorySelected" :items="items" item-text="text" item-value="key"
                    item-title="text" density="comfortable" min-width="200px">
                </v-select>
                <v-select label="Subgrupos" v-model="subCategorySelected" :disabled="CategorySelected.length < 1"
                    :items="['Papelaria', 'Festas', 'Utilidades', 'Brinquedos', 'Limpeza']" density="comfortable">
                </v-select>
                <v-select label="Famílias" v-model="familySelected" :disabled="subCategorySelected.length < 1"
                    :items="['Papelaria', 'Festas', 'Utilidades', 'Brinquedos', 'Limpeza']" density="comfortable">
                </v-select>
            </v-list>
        </v-navigation-drawer>


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

            <v-row>
                <!-- <v-col cols="auto">
                            <ProductList class="d-flex justify-center align-center" description="Apontador"
                                src="https://livrariaepapelariabrasil.com.br/wp-content/uploads/2019/06/Apontador-cDeposito-Neon-Faber-Castell.png"
                                id="5001" brand="Faber Castell" pack="Caixa com 25 und"
                                category="Apontadores com Depósito" price="105.25" isFeature />
                        </v-col> -->
            </v-row>

        </div>


    </fragment>
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
        CategorySelected: "",
        subCategorySelected: "",
        familySelected: "",
        loading: [],
        drawer: null,

    }),
    methods: {
        isVisible() {
            this.extended = !this.extended

        },
        isExclusive(index) {
            this.toggle_exclusive = index
        },
        verifySubCategories() {

        },
        load(i) {
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
