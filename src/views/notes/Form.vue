<template>
  <section class="container">
    <div class="cadastrar">
      <Breadcrumb>
        <BreadcrumbItem titulo="Notes" asset="Cadastrar" />
      </Breadcrumb>
      <MsgError />
      <form class="form">
        <fieldset>
          <legend>Cadastro</legend>

          <div class="form-group">
            <label for="title">Título:</label>
            <input
              type="text"
              placeholder="Título"
              id="title"
              name="title"
              v-model.trim="notes.title"
              maxlength="255"
            />
          </div>

          <div class="form-group">
            <label for="title">Conteúdo:</label>
            <textarea
              placeholder="Conteúdo"
              id="content"
              name="content"
              v-model.trim="notes.content"
              cols="10"
              rows="5"
            ></textarea>
          </div>
        </fieldset>
        <div class="form__button">
          <router-link class="btn" to="/">Voltar</router-link>
          <a class="btn btn__save" @click.prevent="salvar" id="salvar">Salvar</a>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import api from "@/domain/services/api"
import Breadcrumb from "@/presentation/components/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "@/presentation/components/breadcrumb/BreadcrumbItem.vue";

export default {
  name: "Form",
  data() {
    return {
      notes: {
        title: "",
        content: ""
      }
    }
  },
  async created() {
    this.getItem();
  },
  components: {
    Breadcrumb,
    BreadcrumbItem
  },
  methods: {
    async getItem() {
      if (this.$route.params.id) {
        try {
          const resp = await api.get(`/notes/${this.$route.params.id}`)
          this.notes.title = resp.data[0].title;
          this.notes.content = resp.data[0].content;
        } catch (err) {
          document.getElementById("salvar").disabled = true;
          document.getElementById("salvar").className += ' disabled';

          alert(err.response.data.error)
          this.$router.push("/")
        }
      }
    },
    async salvar() {
      try {
        if (this.$route.params.id) {
          const resp = await api.put(`/notes/${this.$route.params.id}`, this.notes)
          if (resp.statusText === "OK") this.$router.push("/")
        } else {
          const resp = await api.post("/notes", this.notes)
          if (resp.statusText === "OK") this.$router.push("/")
        }
      } catch (err) {
        this.$store.dispatch("setError", [err.response.data.error]);
      }
    }
  }
}
</script>

<style scoped>
.cadastrar {
  width: 100%;
}

fieldset {
  border: 1px solid #ccc !important;
  padding: 0 1.4em 1.4em 1.4em !important;
  margin: 0 10px !important;
  border-radius: 4px;
}

legend {
  font-size: 1.2em !important;
  text-align: left !important;
  width: auto;
  padding: 0 10px;
  border-bottom: none;
  margin-bottom: 0.5%;
}

.form__button {
  margin: 0 10px;
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
}

.btn {
  padding: 7px 16px !important;
}

.btn__save {
  background: #116e08 !important;
}

.btn__save:hover {
  background: #0d5806 !important;
}

.disabled {
  background: #444444 !important;
}
</style>
