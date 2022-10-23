import { defineStore } from "pinia";


export const useProductFamilyStore = defineStore("ProductFamily", {
    state: () => {
        return {
            productFamily: [],
        };
    },

    actions: {
        async fill() {
            this.cleanProductFamily()
            const bruteData = (await import("@/data/productFamily.json")).default

            for (let counter = 0; counter < bruteData.responseBody.records.record.length; counter++) {
                
                this.addFamily(
                    bruteData.responseBody.records.record[counter].CODGRUPOPROD.$,
                    bruteData.responseBody.records.record[counter].DESCRGRUPOPROD.$,
                    bruteData.responseBody.records.record[counter].CODGRUPAI.$
                );

            }

            
            
        },

        addFamily(id , name, pai) {
            const newCategory = {
                key:id,
                text: name,
                pai: pai 
            };

            this.productFamily.push(newCategory);
            
        },

        cleanProductFamily(){
            this.productFamily=[]
        },

        filterPerSubCategory(pai){
            const filteredArray = this.productFamily.filter(Family => (Family.pai === pai));
            const modifiedArray = filteredArray.map(({key, text}) => ({key, text}))
            console.log(modifiedArray)
            return modifiedArray
        }

    }
})