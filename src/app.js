import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import VueResourse from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResourse)

import '../static/css/reset.css'
import './common/sass/index.sass'

export function createApp() {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })
  return { app, router }
}
