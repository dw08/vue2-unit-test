import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from "vuex";
import App from './App.vue'
import storeConfig from "@/store/index";
import routes from "@/router/index";
Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes
})
const store = new Vuex.Store(storeConfig);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
