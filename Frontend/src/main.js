import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import components from './components/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

import fullCalendar from 'vue-fullcalendar'

Vue.component('full-calendar', fullCalendar)

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false


//components.install(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')