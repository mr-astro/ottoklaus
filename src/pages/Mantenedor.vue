<template>
  <div class="q-pa-md">
    <!--Boton Agregar-->
    <q-btn
      color="green"
      icon-right="add"
      text-color="black"
      elevation="16"
      @click="add_Juguetes, (addToy = true)"
      class="q-mb-lg"
      label="add juguete"
    />
    <!--Modal Crear Juguete-->
    <q-dialog v-model="addToy" persistent>
      <crear-juguete />
    </q-dialog>

    <!--Tabla de inventario-->
    <tabla-juguete />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Mantenedor",
  data() {
    return {
      addToy: false,
    };
  },

  methods: {
    ...mapActions("crud", ["add_Juguetes", "delete_Juguete"])
  },

  components: {
    "crear-juguete": require("../components/modals/CrearJuguete.vue").default,
    "tabla-juguete": require("../components/TableInventario.vue").default,
  },
};
</script>