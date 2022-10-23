import { defineStore } from "pinia";


export const useProductCategoryStore = defineStore("ProductSubCategory", {
    state: () => {
        return {
            productSubCategory: [],
        };
    },

    actions: {
        async fill() {
            this.cleanProductSubCategory()
            const bruteData = (await import("@/data/productSubCategory.json")).default

            for (let counter = 0; counter < bruteData.responseBody.records.record.length; counter++) {
                this.addCategory(
                    bruteData.data[counter].CODGRUPOPROD.$,
                    bruteData.data[counter].DESCRGRUPOPROD.$,
                    bruteData.data[counter].CODGRUPAI.$
                );

            }

            
            
        },

        addCategory(id , name, pai) {
            const newCategory = {
                key:id,
                text: name,
                pai: pai 
            };

            this.productSubCategory.push(newCategory);
            
        },

        cleanProductSubCategory(){
            this.productSubCategory=[]
        },

        filterPerCategory(pai){
            const filteredArray = this.productSubCategory.filter(SubCategory => (SubCategory.pai === pai));
            return filteredArray
        }

    }
})