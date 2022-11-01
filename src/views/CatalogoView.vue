<template>
    <div>
        
            <v-toolbar>
                <v-toolbar-title>Catálogo de Produtos</v-toolbar-title>


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


       
        <v-navigation-drawer v-model="drawer" bottom temporary location="right">
            <template v-slot:prepend>
                <v-list-item title="Filtro de Produtos"></v-list-item>
            </template>

            <v-divider></v-divider>

            <v-list class="d-flex align-center flex-column bg-grey-lighten-4 pa-6">
                <v-btn-toggle v-model="toggle_exclusive" variant="outlined" class="mx-auto">
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
            </v-list>

            <v-divider></v-divider>

            <v-list nav>
                <v-select id="Categoria" label="Categoria" v-model="CategorySelected" :items="itemsCategories"
                    item-text="text" item-value="key" item-title="text" density="comfortable" return-object
                    @update:model-value="filteredSubCategories(CategorySelected.key)">
                </v-select>
                <v-select id="SubCategoria" label="Subgrupos" v-model="subCategorySelected"
                    :disabled="CategorySelected.length < 1" :items="itemsSubCategories" item-text="text"
                    item-value="key" item-title="text" density="comfortable" return-object
                    @update:model-value="filteredFamily(subCategorySelected.key)">
                </v-select>
                <v-select id="Familia" label="Famílias" v-model="familySelected"
                    :disabled="subCategorySelected.length < 1" :items="itemsFamily" item-text="text" item-value="key"
                    item-title="text" density="comfortable" return-object>
                </v-select>
            </v-list>
            <v-list class="mx-2">
                <v-btn :rounded="0" variant="outlined" size="large" color="error" class="mx-1" @click="cleanFilters()">
                    Limpar
                </v-btn>
                <v-btn :rounded="0" size="large" color="blue-darken-4" class="mx-1" :loading="loading[1]"
                    :disabled="familySelected.length < 1"
                    @click="filtersProducts(1, CategorySelected.text, subCategorySelected.text, familySelected.text, familySelected.key)">
                    Filtrar
                </v-btn>
            </v-list>
        </v-navigation-drawer>


        <v-breadcrumbs :items="itemsSelected" bg-color="teal-lighten-4">
            <template v-slot:divider>
                <v-icon icon="mdi-forward"></v-icon>
            </template>
        </v-breadcrumbs>

        <v-row v-if="toggle_exclusive === 0" cols="12">
            <v-col v-for="(product, index) in itemsProducts" :key="index">
                <ProductCard :id="product.IdProduct" :description="product.Description" :src="product.Image"
                    :brand="product.Brand" :pack="product.Pack" :ean13="product.EAN13" :price="product.Price" is-feature
                    is-liquidation />

            </v-col>
        </v-row>

        <v-col v-if="toggle_exclusive === 1">
            <ProductTableSync :ItemsProducts="itemsProducts"></ProductTableSync>
        </v-col>




        <div  v-if="toggle_exclusive === 2">
            <v-row >
                <div v-for="(product, index) in itemsProducts" :key="index" class="board ms-10">
                    <ProductList :description="product.Description" :src="product.Image" :id="product.IdProduct"
                        :brand="product.Brand" :pack="product.Pack" category="Apontadores com Depósito"
                        :price="product.Price" isFeature />
                </div>
            </v-row>
        </div>




    </div>
</template>

<script >
import ProductCard from '../components/ProductCard.vue'
import ProductTableSync from '../components/ProductTableSync.vue'
import ProductList from '../components/ProductList.vue'
import { useProductCategoryStore } from "@/stores/ProductCategory";
const Category = useProductCategoryStore()
Category.fill()
const CategoryItems = Category.$state.productCategory



import { useProductSubCategoryStore } from "@/stores/ProductSubCategory";

const SubCategory = useProductSubCategoryStore()
SubCategory.fill()

const SubCategoryItems = SubCategory.$state.productSubCategory




import { useProductFamilyStore } from "@/stores/ProductFamily";

const Family = useProductFamilyStore()
Family.fill()

const FamilyItems = Family.$state.productFamily

import { useProductStore } from "@/stores/Product";
const Products = useProductStore()
Products.fill()

const ProductsItems = Products.$state.productStore

export default {
    props: {
        Category: {
            id: {},
            name: {},
        },


    },

    components: {
        ProductCard,
        ProductTableSync,
        ProductList,

    },
    data: () => ({

        toggle_exclusive: 0,
        itemsCategories: CategoryItems,
        itemsSubCategories: SubCategoryItems,
        itemsFamily: FamilyItems,
        itemsProducts: ProductsItems,
        CategorySelected: [],
        subCategorySelected: [],
        familySelected: [],
        loading: [],
        drawer: null,
        itemsSelected: [
            {

            },

        ]

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

        cleanFilters() {
            this.CategorySelected = ""
            this.subCategorySelected = ""
            this.familySelected = ""
            this.itemsSelected = []

        },
        setBreadCumbs(CategoryName, SubCategoryName, FamilyName) {
            this.itemsSelected = []
            const catSelected = {
                title: CategoryName,
                disabled: false,
            }

            this.itemsSelected.push(catSelected)
            const SubcatSelected = {
                title: SubCategoryName,
                disabled: false,
            }
            this.itemsSelected.push(SubcatSelected)
            const FamcatSelected = {
                title: FamilyName,
                disabled: false,
            }
            this.itemsSelected.push(FamcatSelected)


        },

        filtersProducts(theLoad, CategoryName, SubCategoryName, FamilyName, pai) {
            this.load(theLoad) // ative modo espera
            this.setBreadCumbs(CategoryName, SubCategoryName, FamilyName)
            console.log(pai)
            this.filteredProduct(pai)
            //this.drawer=!this.drawer //fecha menu lateral
        },

        filteredSubCategories(pai) {
            this.subCategorySelected = ""
            this.familySelected = ""
            this.itemsSubCategories = SubCategory.filterPerCategory(pai)


        },
        filteredFamily(pai) {
            this.familySelected = ""
            this.itemsFamily = Family.filterPerSubCategory(pai)
        },

        filteredProduct(pai) {
            this.itemsProducts = Products.filterPerSubCategory(pai)
        },

    },


}
</script>

<style scoped>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}


.board {
    display: flex;
    flex-wrap: wrap;
   
    
    
}
.boardFlip {
    vertical-align: top;
    float: left;

}

@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@-o-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}
</style> 
