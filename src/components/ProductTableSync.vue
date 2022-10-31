<template>
    <div class="col-lg-12 control-section">
        <ejs-grid ref='grid' :dataSource="data" :allowPaging="true" :allowSorting="true" :pageSettings='pageSettings'
            loadingIndicator='Shimmer' :allowFiltering='true' :toolbar='toolbar' >
            <e-columns>
                <e-column field="IdProduct" headerText="Código" textAlign="Right" isPrimaryKey="true" width="100">
                </e-column>
                <e-column headerText="Imagem" textAlign='Center' allowFiltering = 'false' width="150" :template="'cTemplate'"></e-column>
                <e-column field="Description" headerText="Descrição" width="390"></e-column>
                <e-column field="Brand" headerText="Marca" width="190"></e-column>
                <e-column field="Pack" headerText="Embalagem" width="190"></e-column>
                <e-column field="EAN13" headerText="Código de Barras" width="190"></e-column>
                <e-column field="Price" headerText="Preço Unitário" textAlign="Right" width="90"></e-column>
            </e-columns>
            <template v-slot:cTemplate="{ data }">
                <div class="image">
                    <img :src="data.Image" :alt="data.IdProduct" />
                </div>
            </template>
        </ejs-grid>
    </div>
</template>

<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Page,  Sort, Toolbar } from '@syncfusion/ej2-vue-grids';


export default {
    props: {
        ItemsProducts: []
    },

    components: {
        'ejs-grid': GridComponent,
        'e-columns': ColumnsDirective,
        'e-column': ColumnDirective,
         
   
        


    },

    data() {
        return {
            
            data: this.ItemsProducts,
            toolbar: ["Search"],
            pageSettings: { pageSizes: true, pageSize: 8 }
        };
    },
    provide: {
        grid: [ Page, Sort, Toolbar]
    },

}

</script>

<style>

@import "../../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-calendars/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-vue-grids/styles/bootstrap5.css";
@import "../../node_modules/@syncfusion/ej2-vue-grids/styles/bootstrap5.css";

.image img {
    height: 60px;
    width: 60px;

}
</style>
