import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'

import Login from './components/Login.vue'
import NovoCadastro from './components/NovoCadastro.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/cadastro',
      component: NovoCadastro
    },


  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
