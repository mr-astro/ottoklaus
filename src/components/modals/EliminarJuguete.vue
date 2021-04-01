<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Eliminar Juguete</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <h1>Desea eliminar este juguete</h1>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn
        flat
        @click="delete_Juguete(idEliminar)"
        label="Eliminar"
        color="primary"
        v-close-popup
      />
      <q-btn flat label="Cancelar" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions("crud", ["delete_Juguete"])
  },

  computed: {
    ...mapState("crud", ["idEliminar"])
  }

};
</script>
