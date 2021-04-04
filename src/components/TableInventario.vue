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
            @click="EDITARID(props.row), (editingJuguete = true)"
            icon="edit"
          ></q-btn>
          <q-btn
            dense
            round
            flat
            color="grey"
            @click="ELIMINARID(props.row.id), (deleteJuguete = true)"
            icon="delete"
          ></q-btn>
        </q-td>
      </template>
    </q-table>
    <!--Modal Eliminar Juguete-->
    <q-dialog v-model="deleteJuguete" persistent>
      <eliminar-juguete />
    </q-dialog>

    <!--Modal Editar Juguete-->
    <q-dialog v-model="editingJuguete" persistent>
      <editar-juguete />
    </q-dialog>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "TableroJuguetes",
  data() {
    return {
      deleteJuguete: false,
      editingJuguete: false,
      columns: [
        {
          name: "codigo",
          required: true,
          label: "CODIGO",
          align: "left",
          field: row => row.data.codigo,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "nombre",
          align: "center",
          label: "NOMBRE",
          field: row => row.data.nombre,
          sortable: true
        },
        {
          name: "stock",
          label: "STOCK",
          field: row => row.data.stock,
          sortable: true
        },
        { name: "precio", label: "PRECIO", field: row => row.data.precio, sortable: true },
        { name: "Accion", label: "EDITAR/ELIMINAR", field: "", align: "right" }
      ]
    };
  },

  methods: {
    ...mapActions("crud", ["get_Juguetes"]),
    ...mapMutations("crud", ["ELIMINARID", "EDITARID"]),
  },

  computed: {
    ...mapState("crud", ["juguetes"])
  },

  components: {
    "eliminar-juguete": require("../components/modals/EliminarJuguete").default,
    "editar-juguete": require("../components/modals/ModificarJuguete").default
  },

  mounted() {
    this.get_Juguetes();
  }
};
</script>