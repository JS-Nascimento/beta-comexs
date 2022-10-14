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
                    <v-col class="ml-2" cols="2" xs="1">
                        <v-select label="Grupos" :items="['Papelaria', 'Festas', 'Utilidades', 'Brinquedos', 'Limpeza']"
                            outlined dense max-height="20px" class="col-4"></v-select>
                    </v-col>
                    <v-col cols="3" xs="1">
                        <v-select label="Subgrupos"
                            :items="['Papelaria', 'Festas', 'Utilidades', 'Brinquedos', 'Limpeza']" outlined dense
                            max-height="20px" class="col-4"></v-select>
                    </v-col>
                    <v-col cols="3" xs="1">
                        <v-select label="Famílias"
                            :items="['Papelaria', 'Festas', 'Utilidades', 'Brinquedos', 'Limpeza']" outlined dense
                            max-height="20px" class="col-4"></v-select>
                    </v-col>
                    <v-col cols="3" xs="1">
                        <v-text-field clearable label="Pesquisar" prepend-icon="mdi-magnify" dense><v-tooltip activator="parent" location="bottom">Digite o termo da pesquisa e tecle Enter...</v-tooltip></v-text-field>
                    </v-col>

                </v-row>

            </template>

        </v-toolbar>
        <v-divider class="mb-2" />
        <v-col cols="12">
            <v-row class="mx-auto justify-center justify-lg-space-around ">
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
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
    components: {
        ProductCard,
    },
    data: () => ({

        extended: false

    }),
    methods: {
        isVisible() {
            this.extended = !this.extended
            console.log(this.extended)
        }
    }




}
</script>

<style>

</style>
