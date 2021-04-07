import Vue from "vue"
import VueRouter from "vue-router"

import cadastrar from './cadastrar'
import login from './login'
import home from './home'
import notesCadastrar from './notes/cadastrar'
import notesEditar from './notes/editar'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: () => import('@/commom/components/PaginaNaoEncontrada.vue')
  },
  cadastrar,
  login,
  home,
  notesCadastrar,
  notesEditar
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.login)) {
    if (!window.localStorage.token) next("/login");
    next();
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.access)) {
    if (window.localStorage.token) next("/");
    next();
  } else {
    next();
  }
});

export default router;
