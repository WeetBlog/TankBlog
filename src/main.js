import Vue from 'vue'
import App from './App.vue'
import './elements.js'
import router from './router'

import infiniteScroll from "vue-infinite-scroll";
Vue.use(infiniteScroll);


new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
