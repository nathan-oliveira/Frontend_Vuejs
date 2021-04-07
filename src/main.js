import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './presentation/routes'
import store from './domain/store'

import PaginaCarregando from './commom/components/PaginaCarregando.vue'
import MsgError from './commom/components/MsgError.vue'

Vue.config.productionTip = false

Vue.component('PaginaCarregando', PaginaCarregando)
Vue.component('MsgError', MsgError)

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
