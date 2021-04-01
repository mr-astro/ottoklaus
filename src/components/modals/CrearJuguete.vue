<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Crear Juguete</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-input outlined v-model="juguete.codigo" label="Codigo" />
      <q-input outlined v-model="juguete.nombre" label="Nombre" />
      <q-input outlined v-model="juguete.stock" label="Stock" />
      <q-input outlined v-model="juguete.precio" label="Precio" />
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat @click="add_Juguete(juguete)" label="Agregar" color="primary" v-close-popup />
      <q-btn flat label="Cancelar" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "modalCreacion",
  data() {
    return {
      juguete: {
        codigo: null,
        nombre: null,
        stock: null,
        precio: null
      }
    };
  },

  methods: {
    ...mapActions('crud',['add_Juguete'])
  }
};
</script>