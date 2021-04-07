<template>
  <section class="container center">
    <div class="card">
      <div class="card__title">
        <span>Login</span>
      </div>
      <div class="card__body">
        <MsgError />
        <form class="form">
          <div class="form-group">
            <label for="email">E-mail:</label>
            <input
              type="text"
              placeholder="Informe seu e-mail"
              id="email"
              name="email"
              v-model.trim="email"
              maxlength="255"
            />
          </div>

          <div class="form-group">
            <label for="password">Senha:</label>
            <input
              type="password"
              placeholder="Informe sua senha!"
              id="password"
              name="password"
              v-model.trim="password"
              maxlength="255"
            />
          </div>
        </form>
      </div>
      <div class="card__footer">
        <router-link class="card__footer__link" to="/cadastrar">
          Não possui uma conta? <br/> Criar Agora.
        </router-link>
        <button class="btn" @click.prevent="login">Entrar</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapFields } from "@/commom/helpers";

export default {
  name: "Login",
  methods: {
    login() {
      const { usuario } = this.$store.state;
      this.$store.dispatch("login", { usuario, router: this.$router, login: true })
    }
  },
  computed: {
    ...mapFields({
      fields: ["username", "email", "password", "realm"],
      base: "usuario",
      mutation: "UPDATE_USUARIO",
    })
  }
}
</script>

<style scoped>
.card__title span::after {
  width: 23%;
}

@media (max-width: 500px)  {
  .btn {
    padding: 10px 20px !important;
    font-size: 0.85rem !important;
  }

  .card__title span::after {
    width: 30%;
  }
}
</style>
