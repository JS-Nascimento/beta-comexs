import { defineStore } from "pinia";
import { formatPrice } from "@/_utils";

export const useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            productStore: [],
        };
    },

    actions: {
        async fill() {
            this.cleanProductStore()
            const bruteData = (await import("@/data/product.json")).default

            for (let counter = 0; counter < 20; counter++) {
               
               
                this.addProductStore(
                    bruteData.responseBody.records.record[counter].CODGRUPOPROD.$,
                    bruteData.responseBody.records.record[counter].CODPROD.$,
                    bruteData.responseBody.records.record[counter].DESCRICAO.$,
                    bruteData.responseBody.records.record[counter].MARCA.$,
                    bruteData.responseBody.records.record[counter].UNIDADE.$,
                    bruteData.responseBody.records.record[counter].PRECO.$,
                    bruteData.responseBody.records.record[counter].EAN13.$
                    
                );

            }

            
            
        },

        addProductStore(codGrupo, codprod, descrProd, marca, unidade, preco, ean13 ) {
            const newCategory = {
                IdGroup : codGrupo,
                IdProduct : codprod,
                Image : `http://parmacon.nuvemdatacom.com.br:9271/mge/Produto@IMAGEM@CODPROD=${codprod}.dbimage`,
                Description : descrProd,
                Brand : marca,
                Pack : unidade,
                EAN13 : ean13,
                Price : formatPrice(preco)

            };
            console.log(newCategory)
            this.productStore.push(newCategory);
            
        },

        cleanProductStore(){
            this.productStore=[]
        },

        filterPerSubCategory(group){
            const filteredArray = this.productStore.filter(Product => (Product.IdGroup === group));
            console.log(filteredArray)
            return filteredArray
        }

    }
})