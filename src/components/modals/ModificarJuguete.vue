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
            disable
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
              label="Editar"
              type="submit"
              color="primary"
              v-close-popup="accept"
              :disable="
                !accept ||
                  juguete.codigo == '' ||
                  juguete.nombre == '' ||
                  juguete.stock == '' ||
                  juguete.precio == '' ||
                  juguete.stock < 0
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
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "editar",
  data() {
    return {
      accept: false,
      juguete: {}
    };
  },
  mounted() {
    this.juguete = JSON.parse(JSON.stringify(this.idEditar.data))
  },

  methods: {
    ...mapActions("crud", ["edit_Juguete"]),
    onSubmit(juguete) {
      //console.log(juguete)
      const data = { id: this.idEditar.id, juguete: juguete };
      //console.log(data)
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Usted debe aceptar que todos los campos son correctos"
        });
      } else {
        this.edit_Juguete(data);
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Producto ha sido modificado"
        });
      }
    }
  },

  computed: {
    ...mapState("crud", ["idEditar"])
  }
};
</script>