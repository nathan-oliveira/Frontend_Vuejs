<template>
  <header class="menu">
    <div class="container">
      <router-link class="menu__logo" to="/">Acácia</router-link>
      <nav class="menu__nav">
        <ul v-if="!this.$store.state.login">
          <li>
            <router-link class="menu__nav__link" to="/cadastrar">Cadastrar</router-link>
          </li>
          <li>
            <router-link class="menu__nav__link" to="/login">Entrar</router-link>
          </li>
        </ul>
        <ul v-if="this.$store.state.login">
          <li>
            <a class="menu__nav__link" @click="logout">Sair</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store.dispatch("logout", { router: this.$router });
    }
  },
}
</script>

<style scoped>
.menu {
  background: #00293b;
  padding: 18px 0;
  z-index: 9;
  box-shadow: 0px 3px 9px 0px rgb(0 0 0 / 30%);
}

.menu__logo {
  color: #fff;
  cursor: pointer;
  font-size: 1.4rem;
  margin: 0 10px;
  font-weight: bold;
}

.menu__nav {
	flex: 1;
	align-self: center;
  margin: 0 10px;
}

.menu__nav ul {
	float: right;
	display: flex;
	list-style: none;
}

.menu__nav ul li {
	padding-left: 20px;
}

.menu__nav .menu__nav__link {
  cursor: pointer;
  color: #fff;
  font-size: 1.1rem;
  /* padding-right: 10px; */
}

.menu__nav .menu__nav__link:hover {
  color: rgb(209, 209, 209);
  transition: 0.5s;
}

@media (max-width: 739px) {
	.menu__nav {
		margin: 0px;
	}

	.menu__logo {
		text-align: center;
	}

	.menu__nav .menu__nav__link {
		padding-left: 0px;
    padding-right: 20px;
	}

  .menu__nav ul li {
    padding-left: 0px;
  }

  .menu__nav ul {
    display: flex;
    justify-content: space-between;
  }

  .container {
    flex-direction: row !important;
    margin: 0 10px !important;
    max-width: 100% !important;
  }
}
</style>
