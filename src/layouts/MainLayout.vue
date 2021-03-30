<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-dark text-white" height-hint="98">
      <q-toolbar style="height: 80px">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          Otto Klaus
        </q-toolbar-title>

        <span
        v-if="login"
        class="q-mr-md"
        >Bienvenida(o), {{ usuario.nombre }}
        </span>
        <q-avatar rounded size="4rem">
        <img
        :src="`${usuario.imagen}`"
        class="q-mr-lg"
        v-if="login"
         />
        </q-avatar>
        <q-btn
          color="white"
          text-color="black"
          elevation="16"
          @click="login_User"
          class="q-mr-lg"
          label="INGRESAR"
          v-if="!login"
        />
        <q-btn
          color="white"
          text-color="black"
          elevation="16"
          @click="logout_User"
          class="q-mr-lg"
          label="SALIR"
          v-else
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar style="height: 80px">
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          DC
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";

export default {
  name: "Estructura",
  methods: {
    ...mapActions("auth", ["login_User", "logout_User"])
  },
  computed: {
    ...mapState("auth", ["usuario", "login"])
  }
};
</script>