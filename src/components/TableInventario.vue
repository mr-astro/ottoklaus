<template>
  <div>
    <q-table
      title="Inventario Otto Klaus"
      :data="juguetes"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell-Accion="props">
        <q-td :props="props">
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="edit_Juguete(props)"
            icon="edit"
          ></q-btn>
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="ELIMINARID(props.row.id), (deleteToy = true)"
            icon="delete"
          ></q-btn>
        </q-td>
      </template>
    </q-table>
    <!--Modal Eliminar Juguete-->
    <q-dialog v-model="deleteToy" persistent>
      <eliminar-juguete />
    </q-dialog>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      deleteToy: false,
      columns: [
        {
          name: "Codigo",
          required: true,
          label: "CODIGO",
          align: "left",
          field: row => row.Codigo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "Nombre",
          align: "center",
          label: "NOMBRE",
          field: "Nombre",
          sortable: true
        },
        {
          name: "Stock",
          label: "STOCK",
          field: "Stock",
          sortable: true
        },
        { name: "Precio", label: "PRECIO", field: "Precio", sortable: true },
        { name: "Accion", label: "EDITAR/ELIMINAR", field: "", align: "right" }
      ]
    };
  },

  methods: {
    ...mapActions("crud", ["get_Juguetes", "edit_Juguete", "idEliminar"]),
    ...mapMutations("crud", ["ELIMINARID"]),
  },

  computed: {
    ...mapState("crud", ["juguetes"])
  },

  components: {
    "eliminar-juguete": require("../components/modals/EliminarJuguete").default
  },

  mounted() {
    this.get_Juguetes();
  }
};
</script>