<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Editar Juguete</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-input outlined disable v-model="juguete.codigo" label="Codigo" />
      <q-input outlined v-model="juguete.nombre" label="Nombre" />
      <q-input outlined v-model="juguete.stock" label="Stock" />
      <q-input outlined v-model="juguete.precio" label="Precio" />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        flat
        label="Editar"
        color="primary"
        @click="editJuguete(juguete, idEditar)"
        v-close-popup
      />
      <q-btn flat label="Cancelar" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "editar",
  data() {
    return {
      juguete: {}
    };
  },
  mounted() {
    this.juguete = this.idEditar.data;
  },

  methods: {
    ...mapActions("crud", ["edit_Juguete"]),
    editJuguete(juguete, idEditar) {
      const data = { id: idEditar.id, juguete: juguete };
      //console.log(data)
      this.edit_Juguete(data);
      this.$q.notify({
        color: "warning",
        message: "Producto editado"
    })
    }
  },

  computed: {
    ...mapState("crud", ["idEditar"])
  }
};
</script>