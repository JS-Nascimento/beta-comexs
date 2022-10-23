import { defineStore } from "pinia";


export const useProductSubCategoryStore = defineStore("ProductSubCategory", {
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
                
                this.addSubCategory(
                    bruteData.responseBody.records.record[counter].CODGRUPOPROD.$,
                    bruteData.responseBody.records.record[counter].DESCRGRUPOPROD.$,
                    bruteData.responseBody.records.record[counter].CODGRUPAI.$
                );

            }

            
            
        },

        addSubCategory(id , name, pai) {
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
            const modifiedArray = filteredArray.map(({key, text}) => ({key, text}))
            this.productSubCategory = modifiedArray
        }

    }
})