<template>
  <div class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Crear Juguete</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit(juguete)" class="q-gutter-md">
          <q-input
            filled
            type="text"
            v-model="juguete.codigo"
            label="Codigo del producto"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || 'Porfavor ingrese un codigo'
            ]"
          />

          <q-input
            filled
            type="text"
            v-model="juguete.nombre"
            label="Nombre del producto"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || 'Porfavor ingrese un nombre'
            ]"
          />

          <q-input
            filled
            type="number"
            v-model="juguete.stock"
            label="Stock del producto"
            lazy-rules
            :rules="[
              val =>
                (val !== null && val !== '') || 'Porfavor ingrese una cantidad'
            ]"
          />

          <q-input
            filled
            type="number"
            v-model="juguete.precio"
            label="Precio del producto"
            lazy-rules
            :rules="[
              val => (val !== null && val !== '') || 'Porfavor ingrese un valor'
            ]"
          />

          <q-toggle
            v-model="accept"
            label="Aceptar que todos los datos son correctos"
          />

          <div>
            <q-btn
              label="Crear"
              type="submit"
              color="primary"
              v-close-popup="accept"
              :disable="
                !accept ||
                  juguete.codigo == null ||
                  juguete.nombre == null ||
                  juguete.stock == null ||
                  juguete.precio == null
              "
            />
            <q-btn
              label="Cancelar"
              color="primary"
              flat
              class="q-ml-sm"
              v-close-popup
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "modalCreacion",
  data() {
    return {
      accept: false,
      juguete: {
        codigo: null,
        nombre: null,
        stock: null,
        precio: null
      }
    };
  },

  methods: {
    ...mapActions("crud", ["add_Juguete"]),

    onSubmit(juguete) {
      
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Usted debe aceptar que todos los campos son correctos"
        });
      } else {
        this.add_Juguete(juguete);
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Producto Creado"
        });
      }
    }
  }
};
</script>