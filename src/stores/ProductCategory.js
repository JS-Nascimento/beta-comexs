import { defineStore } from "pinia";


export const useProductCategoryStore = defineStore("ProductCategory", {
    state: () => {
        return {
            productCategory: [],
        };
    },

    actions: {
        async fill() {
            this.cleanProductCategory()
            const bruteData = (await import("@/data/productCategory.json")).default

            for (let counter = 0; counter < bruteData.data.length; counter++) {
                this.addCategory(
                    bruteData.data[counter].CODGRUPOPROD.V,
                    bruteData.data[counter].DESCRGRUPOPROD.V
                );

            }

            
            
        },

        addCategory(id , name) {
            const newCategory = {
                key:id,
                text: name
            };

            this.productCategory.push(newCategory);
            
        },

        cleanProductCategory(){
            this.productCategory=[]
        }
    }
})