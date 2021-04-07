<template>
  <section class="container">
    <div class="listagem">
      <Breadcrumb>
        <BreadcrumbItem titulo="Dashboard" asset="Listagem de itens" />
      </Breadcrumb>
      <div class="cadastro">
        <router-link class="btn" to="/notes/cadastrar">Cadastrar</router-link>
      </div>
      <MsgError />
      <div class="notes">
        <div class="notes__items">
          <div class="notes__card" v-for="(item, index) in itens" :key="index">
            <div class="notes__card__title">
              <span>{{item.title}}</span>
            </div>
            <div class="notes__card__body">
              <p>{{item.content.substring(0, 120)}}...</p>
            </div>
            <div class="notes__card__footer">
              <a class="edit" @click="editarItem(item)">Editar</a>
              <button class="delete" @click="deleteItem(item)">Deletar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/domain/services/api"
import Breadcrumb from "@/presentation/components/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "@/presentation/components/breadcrumb/BreadcrumbItem.vue";

export default {
  name: "Home",
  data() {
    return {
      itens: []
    }
  },
  components: {
    Breadcrumb,
    BreadcrumbItem
  },
  created() {
    this.getItens();
  },
  methods: {
    async getItens() {
      try {
        const resp = await api.get("/notes")
        this.itens = resp.data;
      } catch (err) {
        this.$store.dispatch("setError", [err.response.data.error]);
      }
    },
    async deleteItem(item) {
      const confirm = window.confirm('Tem certeza que deseja deletar?')

      try {
        if (confirm) {
          const resp = await api.delete(`/notes/${item.id}`)
          if (resp.statusText === "OK") this.itens = this.itens.filter((obj) => obj !== item);
        }
      } catch (err) {
        this.$store.dispatch("setError", [err.response.data.error]);
      }
    },
    editarItem(item) {
      this.$router.push(`/notes/editar/${item.id}`)
    }
  }
}
</script>

<style scoped>
.listagem {
  width: 100%;
}

.notes__items {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.notes__card {
  flex: 1 1 31%;
  margin: 10px;
  padding: 15px;
  max-width: 31.2%;
  height: 210px;
  background: #fff;
  box-shadow: 0px 3px 9px 0px rgb(0 0 0 / 30%);
  border-radius: 5px;
}

.notes__card__title {
  text-align: center;
}

.notes__card__title span {
  font-size: 1.3rem;
  font-weight: 400;
}

.notes__card__title span::after {
  content: '';
  display: block;
  height: 1px;
  background: #027DB3;
  margin: 3px 0;
}

.notes__card__body {
  margin: 1rem 0;
  min-height: 86px;
}

.notes__card__footer {
  display: flex;
  justify-content: space-between;
}

.notes__card__footer .edit,
.notes__card__footer .delete {
  outline: none;
  cursor: pointer;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 20%);
  color: #fff;
  transition: all 0.3s;
}

.notes__card__footer .edit:hover,
.notes__card__footer .delete:hover {
  transform: scale(1.03);
}

.notes__card__footer .delete {
  background: #dc3545;
}

.notes__card__footer .edit {
  background: #343a40;
}

.cadastro {
  margin: 0 10px;
  margin-bottom: 10px;
}

@media (max-width: 872px) {
  .notes__card {
    max-width: 50%;
    flex: 1 1 40%;
  }
}

@media (max-width: 584px) {
  .notes__card {
    max-width: 100%;
    flex: 1 1 100%;
  }
}

@media (min-width: 585px) {
  .btn {
    width: 150px;
  }
}
</style>
