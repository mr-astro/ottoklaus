<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Eliminar Juguete</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <h5>
          <q-icon name="warning" class="text-red" style="font-size: 3rem;" />
          ¿Desea eliminar el producto?
          <q-icon name="warning" class="text-red" style="font-size: 3rem;" />
        </h5>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          @click="deleteJuguete(idEliminar)"
          label="SI"
          color="primary"
          v-close-popup
        />
        <q-btn flat label="NO" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions("crud", ["delete_Juguete"]),
    deleteJuguete(idEliminar) {
      this.delete_Juguete(idEliminar);
      this.$q.notify({
        color: "negative",
        icon: "warning",
        message: "Producto Eliminado"
      });
    }
  },

  computed: {
    ...mapState("crud", ["idEliminar"])
  }
};
</script>
