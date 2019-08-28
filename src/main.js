import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import { Lazyload, InfiniteScroll } from 'mint-ui'
import Vconsole from 'vconsole'
const vConsole = new Vconsole()
Vue.use(vConsole)
Vue.use(Lazyload)
Vue.use(InfiniteScroll)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
