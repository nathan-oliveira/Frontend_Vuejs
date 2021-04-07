<template>
  <div id="app">
    <Header />
    <Main>
      <router-view />
    </Main>
  </div>
</template>

<script>
import api from "@/domain/services/api"
import Main from "@/presentation/components/layouts/main/Main.vue"
import Header from "@/presentation/components/layouts/header/Header.vue"

export default {
  name: 'App',
  components: {
    Main,
    Header
  },
  async beforeCreate() {
    if (this.$store.state.login) {
      try {
        await api.validateToken()
      } catch (err) {
        this.$store.dispatch("logout", { router: this.$router });
      }
    }
  }
}
</script>

<style>
@import "./presentation/assets/fonts/Nunito.css";
@import "./presentation/assets/stylesGlobal.css";
</style>
