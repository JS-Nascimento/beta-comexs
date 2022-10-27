<template>
  <div>


    <v-text-field  v-model="searchValue" clearable label="Pesquisar" prepend-icon="mdi-magnify" dense>
      <v-tooltip activator="parent" location="bottom">Digite o termo da pesquisa e tecle Enter...
      </v-tooltip>
    </v-text-field>

    <EasyDataTable buttons-pagination :headers="headers" :items="ItemsProducts" :search-field="searchField" :search-value="searchValue" theme-color="#f48225" table-class-name="customize-table" alternating>

    </EasyDataTable>
  </div>
</template>

<script >

export default {
  components: {
    EasyDataTable: window['vue3-easy-data-table'],
  },

  props:{
    ItemsProducts:[]
  },

  data: () => ({


    searchField: 'Description',
    searchValue: '',
    headers: [
    
      {
        text: 'Código',
        align: 'start',
        sortable: false,
        value: 'IdProduct',
      },
      { text: 'Imagem', value:  `avator:${Image}` , fixed: true, width: 80 },
      { text: 'Descrição', value: 'Description', sortable: true },
      { text: 'Marca', value: 'Brand', sortable: true },
      { text: 'Unidade', value: 'Pack', sortable: false },
      { text: 'Código de Barras', value: 'EAN13', sortable: false },
      { text: 'Preço Unitário', value: 'Price', sortable: false },
    ],
      
    
  }),

}
</script>

<style>
.customize-table {
  --easy-table-header-font-size: 16px;
  --easy-table-header-height: 50px;
  /* --easy-table-header-font-color: #fff; */
  --easy-table-header-background-color: #E0E0E0; 

  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

 
  --easy-table-body-row-hover-font-color: #fff !important;
  --easy-table-body-row-hover-background-color: #4DB6AC !important; 
}

</style>
