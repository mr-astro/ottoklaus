<template>
  <div class="q-pa-md">
    <q-btn
          color="green"
          text-color="black"
          elevation="16"
          @click="add_Juguetes"
          class="q-mb-lg"
          label="AGREGAR JUGUETE"
        />
    <q-table title="Inventario Otto Klaus" :data="juguetes" :columns="columns" row-key="name" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Mantenedor",
  data() {
    return {
      columns: [
        {
          name: "Codigo",
          required: true,
          label: "Codigo",
          align: "left",
          field: row => row.Codigo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "Nombre",
          align: "center",
          label: "Nombre",
          field: "Nombre",
          sortable: true
        },
        { name: "Stock", label: "Stock", field: "Stock", sortable: true },
        { name: "Precio", label: "Precio", field: "Precio" }
      ],
    };
  },

  methods: {
    ...mapActions("crud",["get_Juguetes","add_Juguetes"])
  },
  computed: {
    ...mapState("crud",["juguetes"])
  },

  mounted() {
    this.get_Juguetes();
  },
};
</script>