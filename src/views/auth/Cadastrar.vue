<template>
  <section class="container center">
    <div class="card">
      <div class="card__title">
        <span>Criar Conta</span>
      </div>
      <div class="card__body">
        <MsgError />
        <form class="form">
          <div class="form-group">
            <label for="username">Usuário:</label>
            <input
              type="text"
              placeholder="Informe seu e-mail"
              id="username"
              name="username"
              v-model.trim="username"
              maxlength="255"
            />
          </div>

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

          <div class="form-group">
            <label for="realm">Local:</label>
            <input
              type="text"
              placeholder="Informe seu Local"
              id="realm"
              name="realm"
              v-model.trim="realm"
              maxlength="255"
            />
          </div>
        </form>
      </div>
      <div class="card__footer">
        <router-link class="card__footer__link" to="/login">
          Já possui uma conta? <br/> Entrar Agora.
        </router-link>
        <button class="btn" @click.prevent="cadastrar">Cadastrar</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapFields } from "@/commom/helpers";

export default {
  name: "Cadastrar",
  methods: {
    cadastrar() {
      const { usuario } = this.$store.state;
      this.$store.dispatch("login", { usuario, router: this.$router, login: false })
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
  width: 43%;
}

@media (max-width: 500px)  {
  .btn {
    padding: 10px 11px !important;
    font-size: 0.85rem !important;
  }

  .card__title span::after {
    width: 63%;
  }
}
</style>
